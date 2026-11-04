# Scheduling Rules

**Status:** Working specification.

## Inputs
The scheduler consumes the verified school registry, conference membership, protected-rivalry registry, prior schedules and home/away history, school nonconference requests, and league eligibility rules.

## Conference schedule
Each school receives exactly eight conference games. Protected conference rivalries are placed first; remaining games are selected through a rotation algorithm that tracks prior meetings and balances opponent frequency.

- In an 11-school conference, each school has ten conference opponents and misses two each season.
- In a 12-school conference, each school has eleven conference opponents and misses three each season.

## Nonconference schedule
Each school receives four nonconference games. The league reviews contracts for duplicate opponents, conflicting dates, protected-rivalry conflicts, eligibility, and venue designation. Neutral-site games must be identified separately from home and away games.

## Proposed annual workflow

| Window | Activity |
|---|---|
| Jan 5–20 | Scheduling window opens |
| Jan 21–Feb 15 | School negotiations |
| Feb 16–28 | Contract submissions |
| Mar 1–15 | League conflict review |
| Mar 16–31 | Final confirmation |
| Apr 1 | Schedule publication |

These dates are proposed and may be revised.

## Schedule validation
1. Every school has 12 regular-season games.
2. Every school has 8 conference and 4 nonconference games.
3. Every protected annual rivalry is scheduled.
4. No school has overlapping games.
5. No game is duplicated.
6. Every game has two distinct eligible participants.
7. Venue designations are valid.
8. Rotation history is recorded.
9. Manual overrides include a reason and audit record.
