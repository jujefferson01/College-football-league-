# Data conventions

Canonical league data will be stored as UTF-8 JSON and validated against schemas in `data/schemas/`.

## Verification policy
- Every school record must include authoritative source URLs and a verification status.
- Prior draft inclusion does not count as verification.
- School names, abbreviations, conference membership, colors, and logo sources must be checked.
- Logo records must retain source and usage/permission notes; public availability does not imply permission to reuse.
- Conference logos are out of scope.

## Status values
Use `draft`, `needs_review`, or `verified`. Only mark a record verified after checking its source.

## Stable identifiers
Use stable machine-readable IDs (for example, `school_slug`) as foreign keys. Display names can change without breaking schedules or rivalries.
