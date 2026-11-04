# Athletics Branding Verification Audit

**Audit date:** November 4, 2026  
**Scope:** Official school athletics identity references and asset readiness for the 138-school custom league roster.

## Verification standard

A school is not marked asset-verified merely because an official brand or athletics webpage exists. A complete asset verification requires:

1. The exact logo version and era are identified (current or historical).
2. The source is authoritative or its provenance is independently corroborated.
3. A direct PNG or SVG asset URL is captured where available.
4. The asset successfully opens and is nonblank.
5. Visual inspection confirms the file matches the identified mark.
6. Usage and licensing restrictions are documented.

## Historical logo fallback policy

If a current athletics mark is unavailable, access-controlled, or difficult to obtain, historical logos may be researched as a secondary path. Acceptable leads include official school/athletics archives, archived official athletics pages, official media guides, university libraries and reputable logo-history archives with traceable provenance.

Historical marks must be explicitly labeled with their era or approximate years of use. Do not silently substitute a historical mark for the current identity. Record the historical source page and direct asset URL, then open and visually inspect the actual file. A random image-search result, fan recreation, merchandise mockup, or unattributed logo is not sufficient evidence.

Historical assets can be useful for a retro/legacy presentation or as a documented fallback, but they do not become the school's current primary mark. If provenance or exact era cannot be established, keep the record partial and describe the uncertainty.

## Usage and licensing

Public availability, historical status, or archive preservation does not itself grant permission to reproduce, distribute, or use a mark commercially. Record known restrictions and seek permission when required. Do not bypass access controls, copy reference-only preview artwork, or recreate protected marks.

## Current repository status

- Schools in roster: 138
- Branding records: 138
- Fully asset-verified: 1
- Partial: 137
- Missing branding records: 0

The verified Navy record has an official N-Star PNG that was opened and visually inspected. Buffalo has an official direct PNG captured but remains partial pending confirmation that the spirit-mark variant is the preferred primary simulator identity. The remaining records are not verified until the full checks above are complete.

## Southwest — batch 2

The following official references and usage restrictions were refreshed in `data/school-branding.json`. All five remain partial; this pass did not capture and inspect direct PNG/SVG athletics assets.

| School | Official source | Color reference | Asset / permission finding |
|---|---|---|---|
| Rice | [Rice Athletics licensing](https://riceowls.com/sports/2018/7/17/ot-rice-licensing-html) and [Rice color guide](https://brand.rice.edu/colors) | Rice Blue `#00205B`, Rice Gray `#7C7E7F`, White `#FFFFFF` | Athletics identity is distinct from the university Athenian Owl; logo database access is by request. Commercial use requires licensing. |
| UTSA | [UTSA Athletics Brand & Style Guide](https://goutsa.com/utsa-athletics-brand-and-style-guide) | Midnight `#0C2340`, Orange `#F15A22`, White | Roadrunner head is the primary athletics mark. Official art sheet is the route to approved artwork; restrictions apply to uniforms, merchandise and venue use. |
| Texas Tech | [Texas Tech Athletics Identity (2026)](https://texastech.com/sports/2026/5/4/texas-tech-athletics-identity) | Raider Red `#C30020`, Rider Black `#000000`, Ghost White `#FFFFFF` | Double T anchors the athletics system. Public page previews are reference-only; production artwork must come through approved licensing channels. |
| North Texas | [UNT Athletics 2025 Branding Guide](https://meangreensports.com/documents/download/2025/8/19/UNT_Athletics_Branding_Guide_2025.pdf) and [Logo Usage](https://meangreensports.com/sports/2018/7/6/ot-logos-html) | UNT Green `#00853E`, White `#FFFFFF`, Black `#000000` | Athletics mark is for Athletics Department use; contact Athletics Communications for permission. |
| Sam Houston | [Sam Houston Athletics Branding](https://www.shsu.edu/offices-departments/integrated-marketing-communications/athletics-branding) | SHSU Orange `#F56423`, White `#FFFFFF`, Jade `#004853` | Bearkat athletics marks are trademarked and reserved for official athletics business and approved partners; non-athletics use requires written approval. |

## Next steps

1. Continue with the next Southwest batch.
2. For schools with restricted current artwork, research documented historical marks as a fallback.
3. Capture direct approved PNG/SVG assets only where an official or traceable archival source makes them available.
4. Keep current and historical logo variants distinct in the data model and document the era.
5. Re-run the full roster/branding cross-check before declaring the 138-school branding set complete.
