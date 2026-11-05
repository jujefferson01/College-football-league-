# NCAA Logo URL & Rendering Audit — 138 Schools

**Audit baseline:** November 5, 2026  
**Repository:** `jujefferson01/College-football-league-`  
**Dataset source:** `data/school-branding.json`  
**Scope:** static URL and source metadata integrity, endpoint class, extension-based file-format inventory, and a render-validation tracker.

## Executive result

- **138/138** records have a populated `logo.primary_mark_url`.
- **138/138** logo URLs are absolute HTTPS URLs by syntax.
- **138/138** records have a populated HTTPS `logo_source_page`.
- **0** duplicate logo URLs detected.
- **94** assets use Wikimedia Commons `Special:Redirect/file/`; **44** use direct hosted image URLs.
- Filename-extension inventory: **100 SVG, 26 PNG, 11 JPG, 1 WebP**. This is an extension-based inventory, not MIME sniffing.
- **2/138** images were visibly previewed in the available browser research surface: Navy and San Diego State.
- **136/138** remain pending actual in-app/browser rendering confirmation and visual school-to-logo matching.

## Important interpretation

A syntactically valid HTTPS URL is not proof that the remote server currently returns HTTP 200, that the response MIME type matches the filename extension, or that the consuming app can render the file. The available browser surface visibly rendered Navy and San Diego State. It could not retrieve several other image URLs, including both direct-hosted and Commons redirect URLs; those tool-level fetch failures are **not** classified as broken assets. They remain unverified until tested in the target application or by an HTTP-capable link checker.

For Commons assets, `Special:Redirect/file/` is a supported external linking pattern; Commons/MediaWiki documentation describes it as a way to link directly to uploaded media from external sites. See [MediaWiki image-link guidance](https://www.mediawiki.org/wiki/Help:Images_and_other_uploaded_files) and [Commons file redirect guidance](https://commons.wikimedia.org/wiki/Help:File_redirect). A redirect endpoint may be inaccessible to a text-oriented browser fetch while still being suitable for an HTML image request.

## Validation dimensions

1. **URL structure:** PASS when the value is an absolute HTTPS URL.
2. **Source-page presence:** PASS when a source page URL is present.
3. **File format:** inferred from URL pathname extension only; server MIME and actual decoding are pending.
4. **Remote accessibility:** pending unless directly verified; a browser-tool fetch error is not treated as a confirmed 404.
5. **Image rendering:** PASS only for a visibly rendered preview; otherwise pending.
6. **School-to-logo match:** pending a visual comparison of all 138 images against the school identity and recorded usage notes. Historical/alternate/wordmark assets must be assessed according to their documented classification, not automatically rejected for differing from a current primary mascot mark.

## Full 138-school tracker

| # | School | URL host class | Extension | HTTPS syntax | Visual render | Source page |
|---:|---|---|---|---|---|---|
| 1 | Boston College | Official/hosted direct | WEBP | PASS | PENDING — app/browser render not confirmed | Present |
| 2 | Buffalo | Official/hosted direct | PNG | PASS | PENDING — app/browser render not confirmed | Present |
| 3 | Army | Official/hosted direct | JPG | PASS | PENDING — app/browser render not confirmed | Present |
| 4 | Navy | Official/hosted direct | PNG | PASS | PASS — preview rendered | Present |
| 5 | Syracuse | Official/hosted direct | JPG | PASS | PENDING — app/browser render not confirmed | Present |
| 6 | Temple | Official/hosted direct | JPG | PASS | PENDING — app/browser render not confirmed | Present |
| 7 | Rutgers | Wikimedia direct | PNG | PASS | PENDING — app/browser render not confirmed | Present |
| 8 | Penn State | Official/hosted direct | JPG | PASS | PENDING — app/browser render not confirmed | Present |
| 9 | Pittsburgh | Official/hosted direct | PNG | PASS | PENDING — app/browser render not confirmed | Present |
| 10 | UConn | Wikimedia direct | PNG | PASS | PENDING — app/browser render not confirmed | Present |
| 11 | Delaware | Official/hosted direct | JPG | PASS | PENDING — app/browser render not confirmed | Present |
| 12 | Maryland | Official/hosted direct | JPG | PASS | PENDING — app/browser render not confirmed | Present |
| 13 | Virginia | Official/hosted direct | JPG | PASS | PENDING — app/browser render not confirmed | Present |
| 14 | Virginia Tech | Wikimedia direct | SVG | PASS | PENDING — app/browser render not confirmed | Present |
| 15 | West Virginia | Wikimedia direct | SVG | PASS | PENDING — app/browser render not confirmed | Present |
| 16 | James Madison | Official/hosted direct | PNG | PASS | PENDING — app/browser render not confirmed | Present |
| 17 | Old Dominion | Official/hosted direct | JPG | PASS | PENDING — app/browser render not confirmed | Present |
| 18 | Liberty | Wikimedia direct | PNG | PASS | PENDING — app/browser render not confirmed | Present |
| 19 | Marshall | Wikimedia direct | SVG | PASS | PENDING — app/browser render not confirmed | Present |
| 20 | Duke | Official/hosted direct | PNG | PASS | PENDING — app/browser render not confirmed | Present |
| 21 | North Carolina | Wikimedia direct | SVG | PASS | PENDING — app/browser render not confirmed | Present |
| 22 | NC State | Official/hosted direct | PNG | PASS | PENDING — app/browser render not confirmed | Present |
| 23 | Wake Forest | Official/hosted direct | JPG | PASS | PENDING — app/browser render not confirmed | Present |
| 24 | Michigan | Wikimedia direct | SVG | PASS | PENDING — app/browser render not confirmed | Present |
| 25 | Michigan State | Wikimedia direct | SVG | PASS | PENDING — app/browser render not confirmed | Present |
| 26 | Ohio State | Wikimedia direct | SVG | PASS | PENDING — app/browser render not confirmed | Present |
| 27 | Notre Dame | Wikimedia direct | SVG | PASS | PENDING — app/browser render not confirmed | Present |
| 28 | Indiana | Wikimedia direct | SVG | PASS | PENDING — app/browser render not confirmed | Present |
| 29 | Purdue | Wikimedia direct | SVG | PASS | PENDING — app/browser render not confirmed | Present |
| 30 | Illinois | Official/hosted direct | SVG | PASS | PENDING — app/browser render not confirmed | Present |
| 31 | Central Michigan | Wikimedia direct | SVG | PASS | PENDING — app/browser render not confirmed | Present |
| 32 | Eastern Michigan | Wikimedia direct | SVG | PASS | PENDING — app/browser render not confirmed | Present |
| 33 | Western Michigan | Commons redirect | SVG | PASS | PENDING — app/browser render not confirmed | Present |
| 34 | Toledo | Commons redirect | SVG | PASS | PENDING — app/browser render not confirmed | Present |
| 35 | Ball State | Commons redirect | PNG | PASS | PENDING — app/browser render not confirmed | Present |
| 36 | Cincinnati | Wikimedia direct | SVG | PASS | PENDING — app/browser render not confirmed | Present |
| 37 | Louisville | Commons redirect | SVG | PASS | PENDING — app/browser render not confirmed | Present |
| 38 | Kentucky | Commons redirect | SVG | PASS | PENDING — app/browser render not confirmed | Present |
| 39 | Ohio | Commons redirect | SVG | PASS | PENDING — app/browser render not confirmed | Present |
| 40 | Miami (OH) | Commons redirect | SVG | PASS | PENDING — app/browser render not confirmed | Present |
| 41 | Bowling Green | Official/hosted direct | PNG | PASS | PENDING — app/browser render not confirmed | Present |
| 42 | Akron | Commons redirect | SVG | PASS | PENDING — app/browser render not confirmed | Present |
| 43 | Kent State | Commons redirect | SVG | PASS | PENDING — app/browser render not confirmed | Present |
| 44 | Western Kentucky | Commons redirect | SVG | PASS | PENDING — app/browser render not confirmed | Present |
| 45 | UMass | Commons redirect | SVG | PASS | PENDING — app/browser render not confirmed | Present |
| 46 | Middle Tennessee | Official/hosted direct | PNG | PASS | PENDING — app/browser render not confirmed | Present |
| 47 | Alabama | Commons redirect | SVG | PASS | PENDING — app/browser render not confirmed | Present |
| 48 | Auburn | Official/hosted direct | JPG | PASS | PENDING — app/browser render not confirmed | Present |
| 49 | Georgia | Commons redirect | SVG | PASS | PENDING — app/browser render not confirmed | Present |
| 50 | Georgia Tech | Commons redirect | SVG | PASS | PENDING — app/browser render not confirmed | Present |
| 51 | Florida | Commons redirect | SVG | PASS | PENDING — app/browser render not confirmed | Present |
| 52 | Florida State | Commons redirect | SVG | PASS | PENDING — app/browser render not confirmed | Present |
| 53 | Miami (FL) | Commons redirect | SVG | PASS | PENDING — app/browser render not confirmed | Present |
| 54 | Clemson | Commons redirect | SVG | PASS | PENDING — app/browser render not confirmed | Present |
| 55 | South Carolina | Commons redirect | SVG | PASS | PENDING — app/browser render not confirmed | Present |
| 56 | Tennessee | Commons redirect | SVG | PASS | PENDING — app/browser render not confirmed | Present |
| 57 | Vanderbilt | Commons redirect | SVG | PASS | PENDING — app/browser render not confirmed | Present |
| 58 | UCF | Commons redirect | SVG | PASS | PENDING — app/browser render not confirmed | Present |
| 59 | Florida Atlantic | Commons redirect | SVG | PASS | PENDING — app/browser render not confirmed | Present |
| 60 | South Florida | Commons redirect | SVG | PASS | PENDING — app/browser render not confirmed | Present |
| 61 | FIU | Commons redirect | SVG | PASS | PENDING — app/browser render not confirmed | Present |
| 62 | Coastal Carolina | Commons redirect | SVG | PASS | PENDING — app/browser render not confirmed | Present |
| 63 | Charlotte | Official/hosted direct | PNG | PASS | PENDING — app/browser render not confirmed | Present |
| 64 | Appalachian State | Official/hosted direct | PNG | PASS | PENDING — app/browser render not confirmed | Present |
| 65 | East Carolina | Commons redirect | SVG | PASS | PENDING — app/browser render not confirmed | Present |
| 66 | Georgia Southern | Commons redirect | SVG | PASS | PENDING — app/browser render not confirmed | Present |
| 67 | Georgia State | Official/hosted direct | PNG | PASS | PENDING — app/browser render not confirmed | Present |
| 68 | Kennesaw State | Commons redirect | SVG | PASS | PENDING — app/browser render not confirmed | Present |
| 69 | Jacksonville State | Commons redirect | SVG | PASS | PENDING — app/browser render not confirmed | Present |
| 70 | LSU | Commons redirect | SVG | PASS | PENDING — app/browser render not confirmed | Present |
| 71 | Arkansas | Commons redirect | PNG | PASS | PENDING — app/browser render not confirmed | Present |
| 72 | Ole Miss | Commons redirect | SVG | PASS | PENDING — app/browser render not confirmed | Present |
| 73 | Mississippi State | Commons redirect | SVG | PASS | PENDING — app/browser render not confirmed | Present |
| 74 | Southern Miss | Commons redirect | PNG | PASS | PENDING — app/browser render not confirmed | Present |
| 75 | Tulane | Commons redirect | SVG | PASS | PENDING — app/browser render not confirmed | Present |
| 76 | Louisiana | Commons redirect | SVG | PASS | PENDING — app/browser render not confirmed | Present |
| 77 | Louisiana Tech | Commons redirect | SVG | PASS | PENDING — app/browser render not confirmed | Present |
| 78 | Louisiana-Monroe | Commons redirect | SVG | PASS | PENDING — app/browser render not confirmed | Present |
| 79 | Arkansas State | Commons redirect | SVG | PASS | PENDING — app/browser render not confirmed | Present |
| 80 | South Alabama | Commons redirect | SVG | PASS | PENDING — app/browser render not confirmed | Present |
| 81 | Troy | Commons redirect | SVG | PASS | PENDING — app/browser render not confirmed | Present |
| 82 | Texas | Commons redirect | SVG | PASS | PENDING — app/browser render not confirmed | Present |
| 83 | Texas A&M | Commons redirect | PNG | PASS | PENDING — app/browser render not confirmed | Present |
| 84 | Baylor | Commons redirect | SVG | PASS | PENDING — app/browser render not confirmed | Present |
| 85 | TCU | Commons redirect | SVG | PASS | PENDING — app/browser render not confirmed | Present |
| 86 | SMU | Commons redirect | SVG | PASS | PENDING — app/browser render not confirmed | Present |
| 87 | Houston | Commons redirect | SVG | PASS | PENDING — app/browser render not confirmed | Present |
| 88 | Oklahoma | Commons redirect | SVG | PASS | PENDING — app/browser render not confirmed | Present |
| 89 | Oklahoma State | Official/hosted direct | PNG | PASS | PENDING — app/browser render not confirmed | Present |
| 90 | Tulsa | Commons redirect | SVG | PASS | PENDING — app/browser render not confirmed | Present |
| 91 | Kansas | Commons redirect | SVG | PASS | PENDING — app/browser render not confirmed | Present |
| 92 | Kansas State | Commons redirect | SVG | PASS | PENDING — app/browser render not confirmed | Present |
| 93 | Missouri State | Commons redirect | SVG | PASS | PENDING — app/browser render not confirmed | Present |
| 94 | Iowa | Commons redirect | SVG | PASS | PENDING — app/browser render not confirmed | Present |
| 95 | Iowa State | Commons redirect | SVG | PASS | PENDING — app/browser render not confirmed | Present |
| 96 | Nebraska | Commons redirect | SVG | PASS | PENDING — app/browser render not confirmed | Present |
| 97 | Missouri | Commons redirect | SVG | PASS | PENDING — app/browser render not confirmed | Present |
| 98 | North Dakota State | Commons redirect | SVG | PASS | PENDING — app/browser render not confirmed | Present |
| 99 | Northern Illinois | Commons redirect | SVG | PASS | PENDING — app/browser render not confirmed | Present |
| 100 | Memphis | Commons redirect | SVG | PASS | PENDING — app/browser render not confirmed | Present |
| 101 | UAB | Commons redirect | PNG | PASS | PENDING — app/browser render not confirmed | Present |
| 102 | Minnesota | Commons redirect | SVG | PASS | PENDING — app/browser render not confirmed | Present |
| 103 | Wisconsin | Commons redirect | SVG | PASS | PENDING — app/browser render not confirmed | Present |
| 104 | Northwestern | Commons redirect | SVG | PASS | PENDING — app/browser render not confirmed | Present |
| 105 | Arizona | Commons redirect | SVG | PASS | PENDING — app/browser render not confirmed | Present |
| 106 | Arizona State | Commons redirect | SVG | PASS | PENDING — app/browser render not confirmed | Present |
| 107 | Colorado | Commons redirect | SVG | PASS | PENDING — app/browser render not confirmed | Present |
| 108 | Utah | Commons redirect | SVG | PASS | PENDING — app/browser render not confirmed | Present |
| 109 | BYU | Commons redirect | SVG | PASS | PENDING — app/browser render not confirmed | Present |
| 110 | Texas State | Commons redirect | SVG | PASS | PENDING — app/browser render not confirmed | Present |
| 111 | Rice | Commons redirect | SVG | PASS | PENDING — app/browser render not confirmed | Present |
| 112 | UTSA | Commons redirect | SVG | PASS | PENDING — app/browser render not confirmed | Present |
| 113 | Texas Tech | Commons redirect | SVG | PASS | PENDING — app/browser render not confirmed | Present |
| 114 | North Texas | Commons redirect | PNG | PASS | PENDING — app/browser render not confirmed | Present |
| 115 | Sam Houston | Commons redirect | PNG | PASS | PENDING — app/browser render not confirmed | Present |
| 116 | Boise State | Commons redirect | SVG | PASS | PENDING — app/browser render not confirmed | Present |
| 117 | Utah State | Commons redirect | SVG | PASS | PENDING — app/browser render not confirmed | Present |
| 118 | Nevada | Commons redirect | SVG | PASS | PENDING — app/browser render not confirmed | Present |
| 119 | UNLV | Commons redirect | SVG | PASS | PENDING — app/browser render not confirmed | Present |
| 120 | San Jose State | Commons redirect | SVG | PASS | PENDING — app/browser render not confirmed | Present |
| 121 | Colorado State | Official/hosted direct | PNG | PASS | PENDING — app/browser render not confirmed | Present |
| 122 | Wyoming | Commons redirect | SVG | PASS | PENDING — app/browser render not confirmed | Present |
| 123 | Air Force | Commons redirect | SVG | PASS | PENDING — app/browser render not confirmed | Present |
| 124 | New Mexico | Commons redirect | SVG | PASS | PENDING — app/browser render not confirmed | Present |
| 125 | New Mexico State | Commons redirect | SVG | PASS | PENDING — app/browser render not confirmed | Present |
| 126 | UTEP | Commons redirect | SVG | PASS | PENDING — app/browser render not confirmed | Present |
| 127 | Oregon | Commons redirect | SVG | PASS | PENDING — app/browser render not confirmed | Present |
| 128 | Washington | Commons redirect | SVG | PASS | PENDING — app/browser render not confirmed | Present |
| 129 | USC | Commons redirect | SVG | PASS | PENDING — app/browser render not confirmed | Present |
| 130 | UCLA | Commons redirect | SVG | PASS | PENDING — app/browser render not confirmed | Present |
| 131 | California | Commons redirect | SVG | PASS | PENDING — app/browser render not confirmed | Present |
| 132 | Stanford | Commons redirect | SVG | PASS | PENDING — app/browser render not confirmed | Present |
| 133 | Oregon State | Official/hosted direct | PNG | PASS | PENDING — app/browser render not confirmed | Present |
| 134 | Washington State | Commons redirect | SVG | PASS | PENDING — app/browser render not confirmed | Present |
| 135 | Sacramento State | Commons redirect | SVG | PASS | PENDING — app/browser render not confirmed | Present |
| 136 | Hawaii | Official/hosted direct | PNG | PASS | PENDING — app/browser render not confirmed | Present |
| 137 | Fresno State | Commons redirect | PNG | PASS | PENDING — app/browser render not confirmed | Present |
| 138 | San Diego State | Official/hosted direct | JPG | PASS | PASS — preview rendered | Present |

## Next verification pass

1. Run a real HTTP GET/HEAD check against all 138 URLs from the same environment that serves the app; record status, final redirect URL, content type, and byte size.
2. Decode/render all files in the target app, including SVG, PNG, JPG, and WebP.
3. Compare each rendered mark with its source page and the school's documented mark hierarchy; preserve historical and wordmark classifications.
4. Replace only confirmed broken or mismatched URLs. Do not replace a URL merely because this browser research surface cannot fetch it.
5. Re-run the app's image rendering smoke test after any corrections.


## Visual rendering spot-check — Batch 1 (November 5, 2026)

**Scope:** First six roster entries: Boston College, Buffalo, Army, Navy, Syracuse, and Temple. Each stored `primary_mark_url` was opened directly in the available browser preview surface.

| School | Browser image preview | Result |
|---|---|---|
| Boston College | Direct WebP endpoint did not render in the preview tool | PENDING — tool retrieval failure is not proof of a broken asset |
| Buffalo | Direct PNG endpoint did not render in the preview tool | PENDING — tool retrieval failure is not proof of a broken asset |
| Army | Direct JPG endpoint did not render in the preview tool | PENDING — tool retrieval failure is not proof of a broken asset |
| Navy | PNG visibly rendered; N-Star / NAVY mark is legible | PASS — preview confirmed |
| Syracuse | Direct JPG endpoint did not render in the preview tool | PENDING — tool retrieval failure is not proof of a broken asset |
| Temple | Direct JPG endpoint did not render in the preview tool | PENDING — tool retrieval failure is not proof of a broken asset |

**Batch 1 result:** 1 PASS, 5 PENDING, 0 confirmed broken assets. This is a browser-preview check, not a test inside the actual game/consuming application. The repository currently contains branding data and validation tooling, but no game UI/runtime to launch for end-to-end rendering. The five preview-tool failures remain unclassified pending an actual app or reliable image-decoding test.


## Visual rendering spot-check — Batch 2 (November 5, 2026)

**Scope:** Pittsburgh, UConn, Delaware, Maryland, Virginia, and Virginia Tech. Stored `primary_mark_url` endpoints were opened in the available browser preview surface.

| School | Browser image preview | Result |
|---|---|---|
| Pittsburgh | Pitt script mark visibly rendered in blue and gold; preview shows a black surrounding field | PASS — image decoded/rendered; transparency/background treatment needs a separate asset check |
| UConn | Navy-and-red UCONN Athletics wordmark visibly rendered | PASS — image decoded/rendered; classified as a wordmark, not a Husky mascot mark |
| Delaware | Sidearm-hosted JPG could not be retrieved by the preview tool | PENDING — tool retrieval failure is not proof of a broken asset |
| Maryland | Red Block M with black/gold trim and Maryland banner visibly rendered | PASS — image decoded/rendered |
| Virginia | Orange/navy V with crossed sabres visibly rendered | PASS — image decoded/rendered |
| Virginia Tech | Wikimedia SVG endpoint could not be retrieved by the preview tool | PENDING — tool retrieval failure is not proof of a broken asset |

**Batch 2 result:** 4 PASS, 2 PENDING, 0 confirmed broken assets. Pittsburgh's black preview field is flagged for a later alpha/transparency check; the image is nevertheless confirmed to decode and display. The two pending results remain unresolved rather than failed. This is browser-preview validation, not a test inside the actual game/consuming application.
