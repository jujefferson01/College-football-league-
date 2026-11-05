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


## Visual rendering spot-check — Batch 3 (November 5, 2026)

**Scope:** West Virginia, James Madison, Old Dominion, Liberty, Marshall, and Duke. The exact stored image endpoints were opened in the available browser preview surface. An endpoint that the text/browser tool cannot retrieve is recorded as PENDING, not as a broken file.

| School | Browser image preview | Result |
|---|---|---|
| West Virginia | Wikimedia SVG returned an unsupported SVG content-type in the preview tool | PENDING — endpoint not visually decoded by this tool |
| James Madison | Sidearm-hosted PNG was inaccessible to the preview tool | PENDING — retrieval limitation, not proof of a broken asset |
| Old Dominion | ODU-hosted JPG was inaccessible to the preview tool | PENDING — retrieval limitation, not proof of a broken asset |
| Liberty | PNG visibly rendered; red, navy, and white LU/Flames monogram is clearly displayed | PASS — image decoded/rendered; asset is a monogram-style mark, not a full wordmark |
| Marshall | Wikimedia SVG returned an unsupported SVG content-type in the preview tool | PENDING — endpoint not visually decoded by this tool |
| Duke | Duke-hosted PNG was inaccessible to the preview tool | PENDING — retrieval limitation, not proof of a broken asset |

**Batch 3 result:** 1 PASS, 5 PENDING, 0 confirmed broken assets. Liberty's asset classification is preserved as a monogram-style Athletics mark. This is browser-preview validation only; the consuming game UI is not present in this repository and has not been tested.



## Visual rendering spot-check — Batch 4 (November 5, 2026)

**Scope:** North Carolina, NC State, Wake Forest, Michigan, Michigan State, and Ohio State. Each exact stored `primary_mark_url` was opened in the available browser preview surface.

| School | Browser image preview | Result |
|---|---|---|
| North Carolina | Wikimedia SVG endpoint returned an unsupported SVG content-type in the preview tool | PENDING — endpoint not visually decoded by this tool |
| NC State | Official Sidearm-hosted PNG visibly rendered as the red, black, and white Tuffy wolf head | PASS — image decoded/rendered |
| Wake Forest | Official Sidearm-hosted JPG could not be retrieved by the preview tool | PENDING — retrieval limitation, not proof of a broken asset |
| Michigan | Wikimedia SVG endpoint returned an unsupported SVG content-type in the preview tool | PENDING — endpoint not visually decoded by this tool |
| Michigan State | Wikimedia SVG endpoint returned an unsupported SVG content-type in the preview tool | PENDING — endpoint not visually decoded by this tool |
| Ohio State | Wikimedia SVG endpoint returned an unsupported SVG content-type in the preview tool | PENDING — endpoint not visually decoded by this tool |

**Batch 4 result:** 1 PASS, 5 PENDING, 0 confirmed broken assets. NC State's rendered file is the Tuffy Head asset identified in the record as the athletics primary mark. The other five remain pending because of preview-tool retrieval/content-type limitations; none is classified as broken. This remains browser-preview validation, not an in-game rendering test.

**Cumulative browser-preview status:** 7 distinct assets visibly rendered (including the San Diego State and Navy baseline previews); 22 remain pending; 0 confirmed broken. This corrects the prior running total, which omitted the San Diego State baseline preview. The actual consuming game UI/runtime is still not present in this repository, so in-game rendering remains untested.


## Visual rendering spot-check — Batch 5 (November 5, 2026)

**Scope:** Central Michigan, Eastern Michigan, Western Michigan, Toledo, Bowling Green, and Miami (OH). Exact stored `primary_mark_url` endpoints were checked in the browser preview surface, with prior visual evidence in the branding records retained where available.

| School | Browser image preview | Result |
|---|---|---|
| Central Michigan | Wikimedia SVG endpoint returned unsupported SVG content-type | PENDING — endpoint not visually decoded by this preview tool |
| Eastern Michigan | Wikimedia SVG endpoint returned unsupported SVG content-type | PENDING — endpoint not visually decoded by this preview tool |
| Western Michigan | Wikimedia redirect endpoint was inaccessible to the preview tool | PENDING — retrieval limitation, not proof of a broken asset |
| Toledo | Wikimedia redirect endpoint was inaccessible to the preview tool | PENDING — retrieval limitation, not proof of a broken asset; record correctly classifies this as a wordmark |
| Bowling Green | Official BGSU PNG endpoint was inaccessible in this spot-check; branding record documents prior visual inspection of the official athletics-logo.png | PASS — prior visible asset inspection recorded; current fetch limitation noted |
| Miami (OH) | Wikimedia redirect endpoint was inaccessible to the preview tool | PENDING — retrieval limitation, not proof of a broken asset |

**Batch 5 result:** 1 PASS based on documented prior visual inspection, 5 PENDING in this browser-preview run, 0 confirmed broken assets. No HTTP/browser retrieval failure is treated as proof that an image is broken. This is still browser-preview/asset evidence, not a test inside the actual game/consuming application.

**Cumulative status:** 8 distinct assets visibly rendered or previously visually inspected; 26 remain pending; 0 confirmed broken. This count includes the San Diego State and Navy baseline previews and the documented prior Bowling Green inspection. The actual consuming game UI/runtime remains absent from this repository, so in-game rendering is untested.


## Visual rendering spot-check — Batch 6 (November 5, 2026)

**Scope:** Akron, Ball State, Northern Illinois, Western Kentucky, Middle Tennessee, and Memphis. Exact stored `primary_mark_url` endpoints were opened in the browser preview surface.

| School | Browser image preview | Result |
|---|---|---|
| Akron | Wikimedia redirect endpoint inaccessible to preview tool | PENDING — retrieval limitation, not proof of a broken asset |
| Ball State | Wikimedia redirect endpoint inaccessible to preview tool | PENDING — retrieval limitation, not proof of a broken asset; record classifies this file as a wordmark fallback, distinct from the Cardinal Head |
| Northern Illinois | Wikimedia redirect endpoint inaccessible to preview tool | PENDING — retrieval limitation, not proof of a broken asset; record classifies this file as a wordmark, not the composite primary mark |
| Western Kentucky | Wikimedia redirect endpoint inaccessible to preview tool | PENDING — retrieval limitation, not proof of a broken asset; record classifies this file as a wordmark |
| Middle Tennessee | Official Sidearm PNG visibly rendered as the blue interlocking MT with flying horse/lightning | PASS — image decoded/rendered |
| Memphis | Wikimedia redirect endpoint inaccessible to preview tool | PENDING — retrieval limitation, not proof of a broken asset; record classifies this file as a primary wordmark, not the tiger-head mascot |

**Batch 6 result:** 1 PASS, 5 PENDING, 0 confirmed broken assets. Middle Tennessee's image visibly decoded. The four wordmark/mark distinctions noted above are preserved; an inaccessible endpoint does not justify reclassifying or replacing an asset. This is browser-preview validation, not a test inside the actual game/consuming application.

**Cumulative status:** 9 distinct assets visibly rendered or previously visually inspected; 31 remain pending; 0 confirmed broken. The total includes the San Diego State and Navy baseline previews and the documented prior Bowling Green inspection. The actual consuming game UI/runtime remains absent from this repository, so in-game rendering is untested.


## Visual rendering spot-check — Batch 7 (November 5, 2026)

**Scope:** Minnesota, Iowa, Iowa State, Nebraska, Wisconsin, and Illinois. Exact stored `primary_mark_url` endpoints were opened in the browser preview surface.

| School | Browser image preview | Result |
|---|---|---|
| Minnesota | Wikimedia redirect endpoint inaccessible to preview tool | PENDING — retrieval limitation, not proof of a broken asset |
| Iowa | Wikimedia redirect endpoint inaccessible to preview tool | PENDING — retrieval limitation, not proof of a broken asset; record correctly classifies the file as an alternate wordmark, not the Tigerhawk primary |
| Iowa State | Wikimedia redirect endpoint inaccessible to preview tool | PENDING — retrieval limitation, not proof of a broken asset |
| Nebraska | Wikimedia redirect endpoint inaccessible to preview tool | PENDING — retrieval limitation, not proof of a broken asset; retained file is explicitly a 1992–2003 historical logo, not current Block N artwork |
| Wisconsin | Wikimedia redirect endpoint inaccessible to preview tool | PENDING — retrieval limitation, not proof of a broken asset; verify exact Motion W artwork variant against current standards |
| Illinois | Official brand CDN SVG endpoint inaccessible to preview tool | PENDING — retrieval limitation, not proof of a broken asset |

**Batch 7 result:** 0 PASS, 6 PENDING, 0 confirmed broken assets. The Iowa, Nebraska, and Wisconsin asset classifications and caveats are preserved; identity verification does not imply that the specific file is the current primary artwork. This is browser-preview validation, not a test inside the actual game/consuming application.

**Cumulative status:** 9 distinct assets visibly rendered or previously visually inspected; 37 remain pending; 0 confirmed broken. The actual consuming game UI/runtime remains absent from this repository, so in-game rendering is untested.


## Visual rendering spot-check — Batch 8 (November 5, 2026)

**Scope:** Notre Dame, Indiana, Purdue, Cincinnati, Louisville, and Kentucky. Exact stored `primary_mark_url` endpoints were opened in the browser preview surface.

| School | Browser image preview | Result |
|---|---|---|
| Notre Dame | Wikimedia SVG returned unsupported SVG content-type | PENDING — endpoint not visually decoded by this preview tool |
| Indiana | Wikimedia SVG returned unsupported SVG content-type | PENDING — endpoint not visually decoded by this preview tool; stored art is documented as historical/alternate |
| Purdue | Wikimedia SVG returned unsupported SVG content-type | PENDING — endpoint not visually decoded by this preview tool; stored art is documented as a wordmark, not the Motion P logo |
| Cincinnati | Wikimedia-hosted SVG endpoint inaccessible | PENDING — retrieval limitation, not proof of a broken asset |
| Louisville | Wikimedia redirect endpoint inaccessible | PENDING — retrieval limitation, not proof of a broken asset; stored art is a wordmark, not the Birdhead primary |
| Kentucky | Wikimedia redirect endpoint inaccessible | PENDING — retrieval limitation, not proof of a broken asset |

**Batch 8 result:** 0 PASS, 6 PENDING, 0 confirmed broken assets. All six are still pending browser-preview confirmation; no endpoint failure is treated as proof of a broken image. Existing wordmark/historical classifications remain explicit. This is browser-preview validation, not a test inside the actual game/consuming application.

**Cumulative status:** 9 distinct assets visibly rendered or previously visually inspected; 43 remain pending; 0 confirmed broken. The actual consuming game UI/runtime remains absent from this repository, so in-game rendering is untested.


## Visual rendering spot-check — Batch 9 (November 5, 2026)

**Scope:** Ohio, Kent State, UMass, Alabama, Auburn, and Georgia. Exact stored `primary_mark_url` endpoints were opened in the browser preview surface.

| School | Browser image preview | Result |
|---|---|---|
| Ohio | Wikimedia redirect endpoint inaccessible to preview tool | PENDING — retrieval limitation, not proof of a broken asset; record classifies this as a historical wordmark |
| Kent State | Wikimedia redirect endpoint inaccessible to preview tool | PENDING — retrieval limitation, not proof of a broken asset; stored file is an Athletics wordmark |
| UMass | Wikimedia redirect endpoint inaccessible to preview tool | PENDING — retrieval limitation, not proof of a broken asset; official guide provides approved primary mark references |
| Alabama | Wikimedia redirect endpoint inaccessible to preview tool | PENDING — retrieval limitation, not proof of a broken asset; official guide distinguishes Script A primary marks from elephant/BAMA secondary marks |
| Auburn | Official Auburn licensing JPG visibly rendered as the navy/orange interlocking AU | PASS — image decoded/rendered |
| Georgia | Wikimedia redirect endpoint inaccessible to preview tool | PENDING — retrieval limitation, not proof of a broken asset; official 2026 guide identifies oval G as primary, and the record remains partial pending standalone asset confirmation |

**Batch 9 result:** 1 PASS, 5 PENDING, 0 confirmed broken assets. Auburn's standalone interlocking AU rendered. Ohio's historical wordmark and Kent State's Athletics wordmark remain correctly classified. Georgia remains partial as a standalone asset despite official primary-mark identity evidence. This is browser-preview validation, not a test inside the actual game/consuming application.

**Cumulative status:** 10 distinct assets visibly rendered or previously visually inspected; 48 remain pending; 0 confirmed broken. The actual consuming game UI/runtime remains absent from this repository, so in-game rendering is untested.


## Visual rendering spot-check — Batch 10 (November 5, 2026)

**Scope:** Georgia Tech, Florida, Florida State, Miami (FL), Clemson, and South Carolina. Exact stored `primary_mark_url` endpoints were opened in the browser preview surface.

| School | Browser image preview | Result |
|---|---|---|
| Georgia Tech | Wikimedia redirect endpoint inaccessible to preview tool | PENDING — retrieval limitation, not proof of a broken asset |
| Florida | Wikimedia redirect endpoint inaccessible to preview tool | PENDING — retrieval limitation, not proof of a broken asset; stored asset is a script wordmark, not Gator Head primary |
| Florida State | Wikimedia redirect endpoint inaccessible to preview tool | PENDING — retrieval limitation, not proof of a broken asset; stored asset is explicitly historical, while current primary is Seminole Head |
| Miami (FL) | Wikimedia redirect endpoint inaccessible to preview tool | PENDING — retrieval limitation, not proof of a broken asset; current Split-U hierarchy/production asset remains a separate open issue |
| Clemson | Wikimedia redirect endpoint inaccessible to preview tool | PENDING — retrieval limitation, not proof of a broken asset; stored tiger-head artwork is historical/alternate, not the primary Tiger Paw |
| South Carolina | Wikimedia redirect endpoint inaccessible to preview tool | PENDING — retrieval limitation, not proof of a broken asset; stored art is historical/alternate Athletics identity |

**Batch 10 result:** 0 PASS, 6 PENDING, 0 confirmed broken assets. The mark hierarchy caveats for Florida, Florida State, Miami (FL), Clemson and South Carolina remain explicit; a recognizable historical mark is not silently promoted to current primary. This is browser-preview validation, not a test inside the actual game/consuming application.

**Cumulative status:** 10 distinct assets visibly rendered or previously visually inspected; 54 remain pending; 0 confirmed broken. The actual consuming game UI/runtime remains absent from this repository, so in-game rendering is untested.


## Visual rendering spot-check — Batch 11 (November 5, 2026)

**Scope:** Tennessee, Vanderbilt, UCF, Florida Atlantic, South Florida, and FIU. Exact stored `primary_mark_url` endpoints were opened in the browser preview surface.

| School | Browser image preview | Result |
|---|---|---|
| Tennessee | Wikimedia redirect endpoint inaccessible to preview tool | PENDING — retrieval limitation, not proof of a broken asset; stored mark is not the official Power T |
| Vanderbilt | Wikimedia redirect endpoint inaccessible to preview tool | PENDING — retrieval limitation, not proof of a broken asset; current guide distinguishes primary Athletics V from secondary Star V |
| UCF | Wikimedia redirect endpoint inaccessible to preview tool | PENDING — retrieval limitation, not proof of a broken asset; current official guide identifies a family of Athletics marks |
| Florida Atlantic | Wikimedia redirect endpoint inaccessible to preview tool | PENDING — retrieval limitation, not proof of a broken asset |
| South Florida | Wikimedia redirect endpoint inaccessible to preview tool | PENDING — retrieval limitation, not proof of a broken asset; current primary is Bull U |
| FIU | Wikimedia redirect endpoint inaccessible to preview tool | PENDING — retrieval limitation, not proof of a broken asset; current Athletics primary marks are Panther Head and FIU block wordmark variants |

**Batch 11 result:** 0 PASS, 6 PENDING, 0 confirmed broken assets. The current mark hierarchy distinctions remain explicit, especially Tennessee's Power T, Vanderbilt's Athletics V, South Florida's Bull U, and FIU's Athletics-specific primary marks. This is browser-preview validation, not a test inside the actual game/consuming application.

**Cumulative status:** 10 distinct assets visibly rendered or previously visually inspected; 60 remain pending; 0 confirmed broken. The actual consuming game UI/runtime remains absent from this repository, so in-game rendering is untested.


## Visual rendering spot-check — Batch 12 (November 5, 2026)

**Scope:** Coastal Carolina, Charlotte, Appalachian State, East Carolina, Georgia Southern, and Georgia State. Exact stored `primary_mark_url` endpoints were opened in the available browser preview surface.

| School | Browser image preview | Result |
|---|---|---|
| Coastal Carolina | Wikimedia Commons redirect endpoint inaccessible to the preview tool | PENDING — retrieval limitation, not proof of a broken asset; stored asset is an alternate/historical Chanticleer mark, while the 2025–26 Athletics refresh governs current branding |
| Charlotte | Official university PNG visibly rendered as the green All-in-C symbol with the UNIVERSITY OF NORTH CAROLINA CHARLOTTE wordmark | PASS — image decoded/rendered; confirms a university primary lockup, not a mascot illustration |
| Appalachian State | Official licensing-hosted PNG could not be retrieved by the preview tool | PENDING — retrieval limitation, not proof of a broken asset; source record identifies the Primary athletic mark |
| East Carolina | Wikimedia Commons redirect endpoint inaccessible to the preview tool | PENDING — retrieval limitation, not proof of a broken asset; official guide identifies the Pirate mark as current primary, while the stored asset is an alternate/historical identity |
| Georgia Southern | Wikimedia Commons redirect endpoint inaccessible to the preview tool | PENDING — retrieval limitation, not proof of a broken asset; stored artwork is a wordmark, correctly distinct from the current Eagle Head primary mark |
| Georgia State | Official Communications Toolkit PNG returned HTTP 403 to the preview tool | PENDING — access restriction is not proof of a broken asset; official source record identifies Pantherhead as a primary Athletics logo |

**Batch 12 result:** 1 PASS, 5 PENDING, 0 confirmed broken assets. Charlotte's All-in-C university lockup visibly rendered. The Coastal Carolina, East Carolina, and Georgia Southern hierarchy distinctions are retained; a recognizable historical or wordmark asset is not silently promoted to the current mascot/primary mark. This is browser-preview validation, not a test inside the actual game/consuming application.

**Cumulative status after Batch 12:** 11 distinct assets visibly rendered or previously visually inspected; 65 remain pending; 0 confirmed broken. This running count follows the previous batch's cumulative tally plus this batch's one new visible render and five pending checks. The actual consuming game UI/runtime remains absent from this repository, so in-game rendering is untested.


## Visual rendering spot-check — Batch 13 (November 5, 2026)

**Scope:** Kennesaw State, Jacksonville State, LSU, Arkansas, Ole Miss, and Mississippi State. Each exact stored Commons file page was opened, then its rendered thumbnail/original preview was opened and visually inspected. The `Special:Redirect/file/` URLs themselves were inaccessible to the browser tool, but the corresponding Commons file pages and actual image previews were accessible; this confirms that the underlying files exist and decode.

| School | Browser image preview | Result |
|---|---|---|
| Kennesaw State | Rendered gold-and-black interlocking KS monogram | PASS — image decoded/rendered; official Athletics guide identifies KS Monogram as primary identity mark; the uploaded file itself is a recognizable athletics logo |
| Jacksonville State | Rendered red JSU institutional wordmark/lockup | PASS — image decoded/rendered; classify as an institutional wordmark/lockup, not a Gamecocks mascot mark; 2026–27 Athletics standards supersede it for current athletics branding |
| LSU | Rendered purple Block LSU with gold outline | PASS — image decoded/rendered; recognizable official Athletics identity; LSU guide separately identifies Eye of the Tiger and Tiger Head marks, so this block wordmark is not mislabeled as a mascot |
| Arkansas | Rendered 1980-era red ARKANSAS wordmark PNG (589 × 92) | PASS — image decoded/rendered; acceptable under the historical/uploadable G.E. rule, not the current Running Razorback primary; Commons lists unknown author and Sportslogos.net as source |
| Ole Miss | Rendered red-and-navy script Ole Miss wordmark | PASS — image decoded/rendered; correctly classified as a historical/alternate Athletics wordmark, not a mascot mark |
| Mississippi State | Rendered maroon M-State mark with white/gray outline | PASS — image decoded/rendered; this is a 2015 alternate/historical logo; current Athletics identity standards designate the M-State mark as primary, but exact variant should be reconciled before production use |

**Batch 13 result:** 6 PASS, 0 PENDING, 0 confirmed broken assets. All six underlying image files were visibly decoded through their Commons file-page preview links. The direct Commons redirect endpoints were not directly fetchable by this browser tool, but that limitation does not prevent confirmation of the underlying image files. The Jacksonville State file is an institutional lockup rather than an athletics mascot; Arkansas and Ole Miss are explicitly historical/alternate wordmarks. The user-approved historical/uploadable rule allows these to remain usable candidates, with classifications and provenance preserved. This is browser-preview validation, not a test inside the actual game/consuming application.

**Cumulative status after Batch 13:** 17 distinct assets visibly rendered or previously visually inspected; 59 remain pending; 0 confirmed broken. The actual consuming game UI/runtime remains absent from this repository, so in-game rendering is untested.


## Visual rendering spot-check — Batch 14 (November 5, 2026)

**Scope:** Tulane, Louisiana, Louisiana Tech, Louisiana-Monroe, Arkansas State, and South Alabama. Exact Commons file pages were opened and their image preview links were checked.

| School | Browser image preview | Result |
|---|---|---|
| Tulane | Teal-and-blue TULANE GREEN WAVE wordmark visibly rendered | PASS — image decoded/rendered; wordmark, not the current Angry Wave primary mark |
| Louisiana | Red-and-white LOUISIANA wordmark visibly rendered | PASS — image decoded/rendered; official brand guide identifies this as the primary Athletics wordmark, distinct from the circular Ragin' Cajuns primary logo |
| Louisiana Tech | Blue-and-white stacked LOUISIANA TECH wordmark visibly rendered | PASS — image decoded/rendered; Athletics wordmark, not the Bulldog head mark |
| Louisiana-Monroe | Black, white, and gold ULM wordmark visibly rendered | PASS — image decoded/rendered; secondary wordmark, not the full ULM Warhawks primary Athletics logo |
| Arkansas State | Red STATE wordmark with black-and-white outline visibly rendered | PASS — image decoded/rendered; historical/alternate Athletics wordmark |
| South Alabama | Commons page identifies the file and original SVG, but its thumbnail request returned HTTP 400 in the preview tool | PENDING — preview retrieval failure, not proof that the original SVG is broken; file is a wordmark, not the Jag Head primary Athletics lockup |

**Batch 14 result:** 5 PASS, 1 PENDING, 0 confirmed broken assets. The four wordmark distinctions (Tulane, Louisiana Tech, ULM and South Alabama) are retained; Louisiana's wordmark is separately identified as a primary Athletics wordmark, while Arkansas State's is historical/alternate. South Alabama remains pending because the thumbnail request failed even though the Commons file page lists an original SVG. This is browser-preview validation, not a test inside the actual game/consuming application.

**Cumulative status after Batch 14:** 22 distinct assets visibly rendered or previously visually inspected; 60 remain pending; 0 confirmed broken. The actual consuming game UI/runtime remains absent from this repository, so in-game rendering is untested.


## Visual rendering spot-check — Batch 15 (November 5, 2026)

**Scope:** Troy, Texas, Texas A&M, Baylor, TCU, and SMU. Each exact Commons file page was opened and its rendered thumbnail preview was opened and visually inspected.

| School | Browser image preview | Result |
|---|---|---|
| Troy | Silver, black, and white stylized Power T/letterform rendered | PASS — image decoded/rendered; treat as a Troy athletics identity asset, with official 2023 guide's Power T Cardinal designated primary and this specific variant not assumed to be the primary |
| Texas | Burnt-orange Longhorn silhouette rendered | PASS — image decoded/rendered; recognizable Texas Athletics Longhorn mark |
| Texas A&M | Maroon-and-white interlocking ATM over Texas silhouette rendered | PASS — image decoded/rendered; Commons file page lists 900 × 879 PNG, source SportsLogos.net, author Chris Creamer; usable upload candidate, but provenance is secondary rather than an official Texas A&M download |
| Baylor | Dark-green interlocking BU monogram rendered | PASS — image decoded/rendered; Commons identifies this as a 2005 Baylor Athletics wordmark/logo, historical asset rather than a confirmed current primary |
| TCU | Purple TCU athletic wordmark rendered | PASS — image decoded/rendered; Commons identifies the 2016 file as a TCU Athletics logo sourced to the official website |
| SMU | Red Peruna running-mustang silhouette rendered | PASS — image decoded/rendered; Commons identifies Peruna as the official Mustang graphic symbol of SMU Athletics, distinct from the institutional Dallas Hall/wordmark logo |

**Batch 15 result:** 6 PASS, 0 PENDING, 0 confirmed broken assets. All six underlying files visibly decoded from their Commons preview links. The Troy variant, Baylor 2005 mark, and Texas A&M third-party-sourced PNG retain their specific provenance/currentness caveats. TCU is a wordmark-style athletics logo; SMU is Peruna, an Athletics spirit mark. This is browser-preview validation, not a test inside the actual game/consuming application.

**Cumulative status after Batch 15:** 28 distinct assets visibly rendered or previously visually inspected; 60 remain pending; 0 confirmed broken. The actual consuming game UI/runtime remains absent from this repository, so in-game rendering is untested.


## Visual rendering spot-check — Batch 16 (November 5, 2026)

**Scope:** Houston, Oklahoma, Oklahoma State, Tulsa, Kansas, and Kansas State. Exact Commons file pages were opened and their image preview links were checked; Oklahoma State's direct official PNG was opened directly.

| School | Browser image preview | Result |
|---|---|---|
| Houston | Red, white, and blue interlocking UH/Cougar mark rendered | PASS — image decoded/rendered; older primary Athletics mark, acceptable under historical/older asset rule |
| Oklahoma | Crimson-and-white interlocking OU mark rendered | PASS — image decoded/rendered; preserve distinction from other official OU marks and current brand guidance |
| Oklahoma State | Official orange/black/white OSU cattle-brand logo visibly rendered from the university's standalone PNG | PASS — image decoded/rendered; official trademark page designates it the primary logo |
| Tulsa | Blue-and-gold Golden Hurricane circular/crest mark rendered | PASS — image decoded/rendered; historical Athletics identity dated 1982 |
| Kansas | Blue-and-red KU Athletics compact wordmark/identifier rendered | PASS — image decoded/rendered; not the Jayhawk mascot mark |
| Kansas State | Purple K-STATE wordmark rendered | PASS — image decoded/rendered; wordmark, not the Powercat primary Athletics symbol |

**Batch 16 result:** 6 PASS, 0 PENDING, 0 confirmed broken assets. Oklahoma State's current official primary PNG visibly rendered. The historical/older Houston and Tulsa marks and the Kansas/Kansas State wordmark distinctions are retained. This is browser-preview validation, not a test inside the actual game/consuming application.

**Cumulative status after Batch 16:** 34 distinct assets visibly rendered or previously visually inspected; 60 remain pending; 0 confirmed broken. The actual consuming game UI/runtime remains absent from this repository, so in-game rendering is untested.


## Visual rendering spot-check — Batch 17 (November 5, 2026)

**Scope:** Missouri State, Iowa, Iowa State, Nebraska, Missouri, and North Dakota State. Exact Commons file pages and their thumbnail previews were opened; all six thumbnails visibly decoded.

| School | Browser image preview | Result |
|---|---|---|
| Missouri State | Dark maroon MISSOURI STATE wordmark rendered | PASS — image decoded/rendered; Athletics wordmark, not a mascot graphic |
| Iowa | Gold IOWA wordmark rendered | PASS — image decoded/rendered; historical/alternate wordmark, not the Tigerhawk primary |
| Iowa State | Cardinal-and-gold I-STATE/Cyclones mark rendered | PASS — image decoded/rendered; Athletics identity asset; official current guidance recognizes I-State and Cyclone marks as primary Athletics marks |
| Nebraska | Red block N with black-and-white script Huskers overlay rendered | PASS — image decoded/rendered; 1992–2003 historical logo, not current Block N |
| Missouri | Black block M with gold outline rendered | PASS — image decoded/rendered; historical/alternate mark, not current Athletic Tiger Head |
| North Dakota State | Green-and-gold NORTH DAKOTA STATE BISON wordmark rendered | PASS — image decoded/rendered; wordmark, not a bison-head mascot mark |

**Batch 17 result:** 6 PASS, 0 PENDING, 0 confirmed broken assets. All six Commons thumbnails visibly rendered. The Iowa, Nebraska and Missouri historical/alternate classifications and the Missouri State/North Dakota State wordmark distinctions are retained. This is browser-preview validation, not a test inside the actual game/consuming application.

**Cumulative status:** The previously reported running tally was 34 rendered/inspected and 60 pending; adding this batch yields 40 rendered/inspected and 60 pending on that same ledger. A later reconciliation should align this cumulative ledger with the full 138-school tracker and account for all previously inspected entries. The actual consuming game UI/runtime remains absent from this repository, so in-game rendering is untested.
