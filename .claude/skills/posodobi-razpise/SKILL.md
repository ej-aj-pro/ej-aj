---
name: posodobi-razpise
description: Weekly refresh of the ej-aj.si calls page /razpisi/ (src/data/razpisi.yaml). Re-checks every listed call on its official page (status, deadline, amount), moves announced calls to open and expired ones to closed, finds new calls for AI, digitalisation, cybersecurity, R&D and startups from Slovenian funds, ARIS, SPIRIT, gov.si and the EU Funding & Tenders portal, has a fact-checker subagent re-check every change, and opens a PR. Use when asked to "posodobi razpise", "preveri razpise", or by the weekly routine. Never merges.
---

# Posodobi razpise

Output: a branch `razpisi/YYYY-MM-DD` with changes to `src/data/razpisi.yaml`, and an open PR.
**Never merge, never push to `main`.** Read `/Users/anze/Desktop/Claude/ej-aj/AGENTS.md` and
`docs/slog.md` first. The guide `/vodniki/kako-nastaja-pregled-razpisov/` describes this process
to readers; if the process changes, update the guide in the same PR.

Every `gh` and network `git` command needs the prefix
`GH_TOKEN="$(gh auth token --user ej-aj-pro 2>/dev/null || gh auth token --user AnzeNocAI)"` (the active gh account is a different one and
must not be switched).

## What belongs on the page

Calls a Slovenian company (or a consortium with one) can apply to, on these topics: AI,
digitalisation, cybersecurity, research and development, startups, protection of technology
(patents). Not on the page: general calls (energy renovation, agriculture, employment, tourism,
culture), calls only for research organisations, scholarships, and municipal calls (planned
later, not yet). EU topics only when they are relevant for companies (single SMEs, startups, or
consortia with companies) and have a deadline in the future. Keep the page readable: about 20
rows in "odprt" and "napovedan" together; prefer calls that a Slovenian SME can realistically
use.

## 1. Worktree

```bash
cd /Users/anze/Desktop/Claude/ej-aj
GH_TOKEN="$(gh auth token --user ej-aj-pro 2>/dev/null || gh auth token --user AnzeNocAI)" git fetch origin
DAY=$(date +%Y-%m-%d)
WT=/Users/anze/.cache/ej-aj-worktrees/razpisi-$DAY
mkdir -p /Users/anze/.cache/ej-aj-worktrees
git worktree add "$WT" -b "razpisi/$DAY" origin/main
cd "$WT" && npm ci --silent
node scripts/razpisi.mjs preveri
```

If `razpisi/$DAY` already exists on origin, stop and report. `preveri` lists calls whose
deadline has passed, announced calls whose opening date has come, and entries not checked for
more than 8 days.

## 2. Re-check every listed call

For each entry, open the first URL in `viri` (the official call page). Status is always read on
the call's own page, never from a list: on 22 October 2026 the SPS list showed voucher V10 as
open while its page said receiving applications was stopped since 18 September 2026.

- Slovenski podjetniški sklad pages render with JavaScript in lists; the call pages themselves are
  readable with WebFetch. Look for "začasno ustavljeno" and similar notices.
- EU topics: read `https://ec.europa.eu/info/funding-tenders/opportunities/data/topicDetails/<id
  in lowercase>.json`. Deadlines and opening dates are millisecond timestamps in
  `actions[].deadlineDates` and `actions[].plannedOpeningDate`; budget and expected number of
  grants are in `budgetOverviewJSONItem.budgetTopicActionMap` (pick the row whose `action` names
  this topic). Status in `actions[].status.abbreviation` (Open, Forthcoming, Closed).
- ARIS: the call page states "Zaključen" when closed.

Update `stanje`, `rok`, `odpre`, `znesek` and the texts only with what the page says. Set
`preverjeno` to today for every entry you re-checked. Moves:

- `napovedan` to `odprt` when the call is published (replace the plan URL with the call page as
  the first source, keep the plan URL second only if it adds a fact).
- `odprt` to `zaprt` when the deadline has passed or the page says it is closed or stopped.
  A stopped call that may reopen stays `odprt` only if the page gives a reopening date; otherwise
  `zaprt`, with the reason in `rok_opis`.
- Remove `zaprt` entries older than 12 months.

## 3. Look for new calls

Run these in one message where possible (subagents with `model: sonnet` for reading pages are
fine; you decide what goes in):

```bash
node scripts/razpisi.mjs spirit   # SPIRIT Slovenija JSON API, active calls
node scripts/razpisi.mjs eu       # EU portal: topics on AI, digital, cyber, SMEs, future deadlines
```

The `eu` output is a list of leads, many are for research consortia only. Open the topic JSON for
each candidate and keep only those that fit "What belongs on the page".

Pages to read (built-in browser where WebFetch gets an empty page):

- https://www.podjetniskisklad.si/javni-razpisi-pozivi-programi/ (filter Odprto) and the plan
  https://www.podjetniskisklad.si/javni-razpisi-pozivi-programi/plan-objav-razpisov-in-pozivov/
- https://www.aris-rs.si/objave/razpisi/odprti and https://www.aris-rs.si/objave/nacrtovani-razpisi
- https://www.gov.si/zbirke/javne-objave/ (ministries; ignore calls for board members)
- https://www.podjetniski-portal.si/razpisi (SPIRIT's list, also municipal and EU calls; use as
  leads, then open the official page)
- https://dihslovenia.si/ and https://www.srips-rs.si/ (digital skills, competence centres)

For each new call add an entry with the same fields as the others. `za_koga` and `kaj` are short
Slovenian sentences in plain language (follow `docs/slog.md`), every fact from the official page.
`znesek: null` when the page gives no amount; never estimate. Explain abbreviations at first use
inside the entry (for example "ARIS (Javna agencija za ...)").

## 4. Fact-check (required)

Launch one fact-checker subagent (`general-purpose`) with the diff of `src/data/razpisi.yaml` and
this task: "For every added or changed entry, open every URL in `viri` (EU topics through the
topicDetails JSON) and check naslov, razpisovalec, stanje, rok, odpre, napoved, znesek, za_koga and
kaj. Flag any claim the source does not support. Return a table: id, field, problem, what the
source says with URL, suggested Slovenian correction." Apply its corrections. If a source cannot
be opened, leave that entry unchanged and list it in the PR.

## 5. Check, commit, PR

```bash
node scripts/razpisi.mjs preveri
npm run build
git add src/data/razpisi.yaml
git commit -m "Refresh calls page ($DAY)"
GH_TOKEN="$(gh auth token --user ej-aj-pro 2>/dev/null || gh auth token --user AnzeNocAI)" git push -u origin "razpisi/$DAY"
GH_TOKEN="$(gh auth token --user ej-aj-pro 2>/dev/null || gh auth token --user AnzeNocAI)" gh pr create --repo ej-aj-pro/ej-aj --base main \
  --head "razpisi/$DAY" --title "Razpisi: osvežitev $DAY" --body-file <body.md>
```

PR body (Slovenian): new calls (name, issuer, deadline, source), status changes (old, new,
source), removed entries, what the fact-checker corrected, sources that failed, and
"Merge = objava na ej-aj.si". If nothing changed except `preverjeno` dates, still open the PR
(the page shows the date of the last check), titled "Razpisi: brez sprememb $DAY".

Remove the worktree at the end: `git -C /Users/anze/Desktop/Claude/ej-aj worktree remove "$WT"`.

## 6. Final message

Slovenian, short: PR link, new calls, status changes, failed sources, anything to check by hand.
