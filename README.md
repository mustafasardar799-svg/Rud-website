# ڕووداو تەندروستی — Rudaw Health

A Sorani-Kurdish-first health reference for Rudaw Media Network. Plain-language,
evidence-graded medical information in a language that has very little of it.

**Prototype.** The medical content is sample text and requires clinical review
before publication. The site says so on every page, by design.

## What it is

Kurdish speakers have no equivalent of Mayo Clinic or NHS.uk. Health information
in Sorani is scattered across Facebook posts and pharmacy counters, most of it
unsourced and some of it harmful. This is a reference built to the standards a
broadcaster should be held to.

Every entry carries a visible editorial record: an ID, the strength of its
evidence on a five-point scale, the date it was last reviewed, the specialist
who reviewed it, and the date it is next due. Nothing is published without two
signatures — the content producer and the medical reviewer.

## Sections

| Section | What it does |
| --- | --- |
| **نەخۆشییەکان** Conditions | 20 conditions on one template: what it is, symptoms, when to go now, what you can do, what to ask your doctor |
| **دەرمانەکان** Medicines | 9 medicines and supplements: what it does, what it does *not* do, what to watch for |
| **ڕاست یان هەڵە** True or False | 12 verdicts on claims circulating in the region. Four verdicts — and "not yet known" is one of them |
| **بۆ کوێ بچم** Where to go | Which facility provides which service, and when |
| **پرسیارێک بنێرە** Ask a question | Viewer questions set the editorial agenda; the best become broadcast items |
| **پێوەرەکانمان** Our standards | Evidence tiers, named reviewers, and what we will not answer |
| **هەڵەکانمان** Corrections | Every mistake, dated and permanent |

## Editorial decisions worth noting

- **Red flags are never buried.** Emergency symptoms appear in a persistent band
  on every page and in a high-contrast block inside every condition entry.
- **"Not yet known" is a verdict.** Where evidence is insufficient we say so
  rather than guessing in either direction.
- **The front page leads on our region.** Heat exhaustion, dust storms and
  thalassaemia screening — not translated generic content.
- **Corrections are permanent.** They are published with dates and never removed.
- **WhatsApp voice notes are a first-class input.** Many viewers cannot type
  Kurdish comfortably; the ask page says voice is fine.

## Typography

Arabic script needs more leading and a larger optical size than Latin, and
letter-spacing breaks the joins between letters. The stylesheet sets Kurdish
body copy at 17.5px with 1.9–2.05 line-height and keeps the monospace face for
Latin-only data (IDs, ISO dates) so Kurdish never falls into a face that lacks
Arabic coverage.

- Display: Noto Kufi Arabic
- Body and UI: IBM Plex Sans Arabic
- Data: IBM Plex Mono (Latin only)

All colour pairs meet WCAG AA. The brand teal is 3.9:1 on white, so it carries
rules, icons and large type only — body links use a darker tint at 6.5:1.

## Running it

Static files, no build step:

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000>.

## Structure

```
index.html              shell
assets/css/app.css      design system
assets/js/data.js       medical content (ku/en)
assets/js/i18n.js       interface strings (ku/en)
assets/js/app.js        hash router + views
assets/img/             brand marks
```

Deployed on Railway via its static builder.
