#!/usr/bin/env node
/**
 * Check every logo.primary_mark_url in data/school-branding.json.
 * Node.js 20+; no third-party dependencies.
 *
 * Usage:
 *   node scripts/check-logo-urls.mjs
 *   node scripts/check-logo-urls.mjs --input data/school-branding.json --output validation/logo-url-check-results.json
 */
import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const args = process.argv.slice(2);
function option(name, fallback) {
  const i = args.indexOf(name);
  return i >= 0 && args[i + 1] ? args[i + 1] : fallback;
}
const inputPath = path.resolve(option("--input", "data/school-branding.json"));
const outputPath = path.resolve(option("--output", "validation/logo-url-check-results.json"));
const timeoutMs = Number(option("--timeout-ms", "20000"));
const concurrency = Math.max(1, Math.min(20, Number(option("--concurrency", "6"))));
const maxBytes = 8192;
const userAgent = "CollegeFootballLeague-LogoAudit/1.0";

const expectedMime = {
  svg: ["image/svg+xml"],
  png: ["image/png"],
  jpg: ["image/jpeg", "image/jpg"],
  jpeg: ["image/jpeg", "image/jpg"],
  webp: ["image/webp"],
};

function extensionOf(url) {
  try {
    const pathname = new URL(url).pathname;
    return (pathname.match(/\.([a-z0-9]+)$/i)?.[1] || "unknown").toLowerCase();
  } catch {
    return "unknown";
  }
}

function sniffFormat(buffer) {
  if (buffer.length >= 8 && buffer.subarray(0, 8).equals(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]))) return "png";
  if (buffer.length >= 3 && buffer[0] === 0xff && buffer[1] === 0xd8 && buffer[2] === 0xff) return "jpg";
  if (buffer.length >= 12 && buffer.toString("ascii", 0, 4) === "RIFF" && buffer.toString("ascii", 8, 12) === "WEBP") return "webp";
  const text = buffer.toString("utf8").replace(/^\uFEFF/, "").trimStart().slice(0, 4096);
  if (/<svg(?:\s|>)/i.test(text) || (/^<\?xml[\s\S]*?<svg(?:\s|>)/i.test(text))) return "svg";
  if (/^\s*<!doctype html|^\s*<html/i.test(text)) return "html";
  return "unknown";
}

async function readPrefix(response) {
  if (!response.body) return Buffer.alloc(0);
  const reader = response.body.getReader();
  const chunks = [];
  let total = 0;
  try {
    while (total < maxBytes) {
      const { value, done } = await reader.read();
      if (done) break;
      const chunk = Buffer.from(value);
      const take = chunk.subarray(0, maxBytes - total);
      chunks.push(take);
      total += take.length;
      if (take.length < chunk.length) break;
    }
  } finally {
    await reader.cancel().catch(() => {});
  }
  return Buffer.concat(chunks);
}

async function checkOne(school, index) {
  const originalUrl = school.logo?.primary_mark_url || "";
  const result = {
    index: index + 1,
    school_id: school.school_id ?? null,
    school_name: school.school_name ?? school.name ?? ("Record " + (index + 1)),
    original_url: originalUrl,
    source_page: school.logo?.logo_source_page ?? null,
    extension: extensionOf(originalUrl),
    status: "FAIL",
    http_status: null,
    final_url: null,
    redirected: false,
    content_type: null,
    detected_format: null,
    content_length: null,
    checks: {},
    error: null,
  };

  try {
    const parsed = new URL(originalUrl);
    result.checks.absolute_https_url = parsed.protocol === "https:";
    if (parsed.protocol !== "https:") throw new Error("Logo URL is not HTTPS");
  } catch (error) {
    result.error = error.message || "Invalid URL";
    result.checks.absolute_https_url = false;
    return result;
  }

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetch(originalUrl, {
      method: "GET",
      redirect: "follow",
      signal: controller.signal,
      headers: {
        "User-Agent": userAgent,
        "Range": "bytes=0-" + (maxBytes - 1),
        "Accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
      },
    });
    result.http_status = response.status;
    result.final_url = response.url;
    result.redirected = response.redirected;
    result.content_type = (response.headers.get("content-type") || "").split(";")[0].trim().toLowerCase() || null;
    result.content_length = response.headers.get("content-length");
    result.checks.http_success = response.status >= 200 && response.status < 300;
    const prefix = await readPrefix(response);
    result.detected_format = sniffFormat(prefix);
    result.checks.image_signature = result.detected_format === result.extension ||
      (result.extension === "jpeg" && result.detected_format === "jpg");
    const allowed = expectedMime[result.extension] || [];
    result.checks.mime_matches_extension = allowed.length === 0 ? null : allowed.includes(result.content_type);
    result.checks.not_html_error_page = result.detected_format !== "html";
    result.checks.source_page_present = Boolean(result.source_page);

    const failures = [];
    if (!result.checks.http_success) failures.push("HTTP " + response.status);
    if (!result.checks.image_signature) failures.push("extension/signature mismatch (." + result.extension + " vs " + result.detected_format + ")");
    if (!result.checks.not_html_error_page) failures.push("server returned HTML instead of an image");
    if (result.checks.mime_matches_extension === false) failures.push("MIME mismatch (" + (result.content_type || "missing") + ")");
    result.status = failures.length ? "FAIL" : "PASS";
    result.error = failures.length ? failures.join("; ") : null;
  } catch (error) {
    result.error = error.name === "AbortError" ? ("Timed out after " + timeoutMs + "ms") : (error.message || String(error));
    result.checks.http_success = false;
    result.checks.image_signature = false;
    result.checks.mime_matches_extension = null;
    result.checks.not_html_error_page = null;
  } finally {
    clearTimeout(timer);
  }
  return result;
}

async function main() {
  const raw = await fs.readFile(inputPath, "utf8");
  const schools = JSON.parse(raw);
  if (!Array.isArray(schools)) throw new Error("Expected school-branding.json to contain a JSON array");

  const results = new Array(schools.length);
  let cursor = 0;
  async function worker() {
    while (true) {
      const i = cursor++;
      if (i >= schools.length) return;
      results[i] = await checkOne(schools[i], i);
      const r = results[i];
      console.log("[" + r.status + "] " + r.school_name + ": HTTP " + (r.http_status ?? "—") + "; " + (r.content_type ?? "no MIME") + "; " + (r.detected_format ?? "no signature"));
    }
  }
  await Promise.all(Array.from({ length: Math.min(concurrency, schools.length) }, worker));

  const passed = results.filter(r => r.status === "PASS").length;
  const failed = results.length - passed;
  const report = {
    generated_at: new Date().toISOString(),
    input_file: path.relative(process.cwd(), inputPath),
    total: results.length,
    passed,
    failed,
    concurrency,
    timeout_ms: timeoutMs,
    results,
  };
  await fs.mkdir(path.dirname(outputPath), { recursive: true });
  await fs.writeFile(outputPath, JSON.stringify(report, null, 2) + "\n");
  console.log("\nLogo URL check: " + passed + "/" + results.length + " passed; " + failed + " failed.");
  console.log("Report: " + path.relative(process.cwd(), outputPath));
  if (failed > 0) process.exitCode = 1;
}

main().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
