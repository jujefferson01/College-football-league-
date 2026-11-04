# College Football League

A customizable college football league project focused on conference alignment, protected rivalries, automated scheduling, standings, and postseason selection.

## Project status

The 138-school inventory has passed its initial 2026 FBS membership and uniqueness audit. The custom 12-conference alignment is recorded as a draft configuration pending the next review.

## Current framework

- 138 schools across 12 custom conferences.
- Six conferences of 12 schools and six conferences of 11 schools.
- 8 conference games and 4 nonconference games per school.
- 12 regular-season games per school.
- No divisions; one conference table.
- Top two teams in each conference are proposed to play a conference championship game.
- Protected annual rivalries are fixed scheduling constraints.
- No conference logos; school logos and colors will be tracked with sources and usage notes.

## Build sequence

1. Review and approve the custom conference alignment.
2. Verify school colors and logo sources.
3. Lock protected annual rivalries.
4. Implement conference rotation and nonconference scheduling.
5. Add standings, tiebreakers, and playoff selection.

See `validation/ROSTER-AUDIT.md` for the roster audit and `data/` for the structured school and conference records.
