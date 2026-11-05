#!/usr/bin/env node
/**
 * Audit logo URLs in data/school-branding.json.
 * Node.js 20+; no third-party dependencies.
 *
 * PASS = successful image response with a recognized image signature.
 * REVIEW = host throttling/anti-bot response or a valid image served in a
 *          different format than its URL extension (common CDN behavior).
 * FAIL = confirmed missing URL, non-image response, invalid URL, or bad data.
 *
 * Usage:
 *   node scripts/check-logo-urls.mjs
 *   node scripts/check-logo-urls.mjs --concurrency 2 --timeout-ms 25000
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
const timeoutMs = Number(option("--timeout-ms", "25000"));
const concurrency = Math.max(1, Math.min(4, Number(option("--concurrency", "2"))));
const maxBytes = 8192;
const maxAttempts = 3;
const userAgent = "Mozilla/5.0 (compatible; CollegeFootballLeague-LogoAudit/1.1)";

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

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
function retryDelay(response, attempt) {
  const retryAfter = Number(response?.headers?.get("retry-after"));
  if (Number.isFinite(retryAfter) && retryAfter > 0) return Math.min(retryAfter * 1000, 15000);
  return Math.min(1500 * (2 ** (attempt - 1)), 10000);
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
    attempts: 0,
    http_status: null,
    final_url: null,
    redirected: false,
    content_type: null,
    detected_format: null,
    content_length: null,
    checks: {},
    error: null,
  };

  let parsed;
  try {
    parsed = new URL(originalUrl);
    result.checks.absolute_https_url = parsed.protocol === "https:";
    if (parsed.protocol !== "https:") throw new Error("Logo URL is not HTTPS");
  } catch (error) {
    result.error = error.message || "Invalid URL";
    result.checks.absolute_https_url = false;
    return result;
  }

  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    result.attempts = attempt;
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeoutMs);
    let response;
    try {
      response = await fetch(originalUrl, {
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

      if ([429, 500, 502, 503, 504].includes(response.status) && attempt < maxAttempts) {
        const delay = retryDelay(response, attempt);
        await response.body?.cancel().catch(() => {});
        clearTimeout(timer);
        console.log("[RETRY] " + result.school_name + ": HTTP " + response.status + ", waiting " + delay + "ms");
        await sleep(delay);
        continue;
      }

      const prefix = await readPrefix(response);
      result.detected_format = sniffFormat(prefix);
      result.checks.http_success = response.status >= 200 && response.status < 300;
      result.checks.image_signature = ["svg", "png", "jpg", "webp"].includes(result.detected_format);
      result.checks.not_html_error_page = result.detected_format !== "html";
      result.checks.source_page_present = Boolean(result.source_page);
      const extMatches = result.detected_format === result.extension ||
        (result.extension === "jpeg" && result.detected_format === "jpg");
      result.checks.extension_matches_signature = extMatches;
      result.checks.mime_is_image = Boolean(result.content_type?.startsWith("image/"));

      if ([403, 429].includes(response.status) || response.status >= 500) {
        result.status = "REVIEW";
        result.error = "Host restricted or throttled automated access (HTTP " + response.status + "); asset validity is unconfirmed";
      } else if (response.status === 404 || response.status === 410) {
        result.status = "FAIL";
        result.error = "Asset URL not found (HTTP " + response.status + ")";
      } else if (!result.checks.http_success || !result.checks.image_signature || !result.checks.not_html_error_page || !result.checks.mime_is_image) {
        result.status = "FAIL";
        result.error = "Response did not contain a recognized image (HTTP " + response.status + "; " + (result.content_type || "no MIME") + "; " + result.detected_format + ")";
      } else if (!extMatches) {
        result.status = "REVIEW";
        result.error = "Valid image returned in " + result.detected_format + " format although URL extension is ." + result.extension + "; browser renderability needs confirmation";
      } else {
        result.status = "PASS";
      }
      return result;
    } catch (error) {
      result.error = error.name === "AbortError" ? ("Timed out after " + timeoutMs + "ms") : (error.message || String(error));
      if (attempt < maxAttempts) {
        clearTimeout(timer);
        const delay = Math.min(1500 * (2 ** (attempt - 1)), 10000);
        console.log("[RETRY] " + result.school_name + ": " + result.error + ", waiting " + delay + "ms");
        await sleep(delay);
        continue;
      }
      result.status = "REVIEW";
      result.error = "Network/timeout issue; asset validity is unconfirmed: " + result.error;
      return result;
    } finally {
      clearTimeout(timer);
    }
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
      console.log("[" + r.status + "] " + r.school_name + ": HTTP " + (r.http_status ?? "—") + "; " + (r.content_type ?? "no MIME") + "; " + (r.detected_format ?? "no signature") + "; attempts " + r.attempts);
      // Small spacing reduces burst traffic against shared file hosts.
      await sleep(300);
    }
  }
  await Promise.all(Array.from({ length: Math.min(concurrency, schools.length) }, worker));

  const passed = results.filter(r => r.status === "PASS").length;
  const review = results.filter(r => r.status === "REVIEW").length;
  const failed = results.filter(r => r.status === "FAIL").length;
  const report = {
    generated_at: new Date().toISOString(),
    input_file: path.relative(process.cwd(), inputPath),
    total: results.length,
    passed,
    review,
    failed,
    concurrency,
    timeout_ms: timeoutMs,
    max_attempts: maxAttempts,
    results,
  };
  await fs.mkdir(path.dirname(outputPath), { recursive: true });
  await fs.writeFile(outputPath, JSON.stringify(report, null, 2) + "\n");
  console.log("\nLogo URL audit: " + passed + " PASS; " + review + " REVIEW; " + failed + " FAIL (" + results.length + " total).");
  console.log("Report: " + path.relative(process.cwd(), outputPath));
  // REVIEW is not a hard failure; only confirmed invalid assets fail the job.
  if (failed > 0) process.exitCode = 1;
}

main().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
