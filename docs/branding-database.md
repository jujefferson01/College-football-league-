# School Branding Database

The canonical branding registry is `data/school-branding.json`.

## Required fields
- Primary, secondary, and optional accent HEX values.
- Official primary athletics mark URL.
- Official source page for the logo and color specifications.
- Usage notes, including licensing or reproduction restrictions.
- Verification status.

## Verification statuses
- `needs_review`: no official brand guide or athletics source has been checked.
- `partial`: an official source confirms some color information, but the complete color and logo record is not yet verified.
- `verified`: official source confirms the selected palette and official mark source has been recorded and checked.

## Rules
1. Prefer university or athletics department brand standards over third-party color directories.
2. Never infer a HEX value from a visual screenshot or a Pantone approximation and label it official.
3. Preserve official color hierarchy; do not promote an accent color to primary.
4. Use official logo asset URLs only where published and permitted. Record source pages and usage restrictions.
5. No conference logos; this project uses school marks only.
6. Do not redistribute logo files without confirming applicable license or permission.

## Initial official-source batch
Buffalo, Penn State, Pittsburgh, and UConn have official palette sources recorded. Their records remain `partial` because logo asset URLs and reuse permissions still need review.
