# Design

## The world

An engineer's ledger: warm paper, ink, hairline rules, a serif that does the talking, and numbers set in a monospace face because they are measurements. The page should feel drafted rather than assembled, and it should survive being printed.

Reference point: an engineering report from a company that takes its own work seriously.

## Palette

| Token       | Value     | Use                                         |
| ----------- | --------- | ------------------------------------------- |
| `--paper`   | `#f3efe6` | Page ground                                 |
| `--paper-2` | `#e6dfd0` | Image placeholders, duotone base            |
| `--ink`     | `#14120e` | Headlines, body                             |
| `--ink-2`   | `#3d372e` | Secondary prose                             |
| `--muted`   | `#6f675c` | Labels, captions                            |
| `--rule`    | `#cdc4b4` | Hairlines                                   |
| `--accent`  | `#8a2a1e` | Links, focus, years, one number per diagram |

Contrast: `--ink-2` on paper is 10.9:1, `--muted` is 5.4:1. Both pass at body size. Accent on paper is 6.6:1.

## Type

- Display: Bodoni Moda variable, 400 to 700. High-contrast Didone, the voice of a printed annual report. Italic used once per page, for the metric in the headline.
- Text: IBM Plex Sans variable, 100 to 700, set at 400 for body and 500 for emphasis.
- Data: JetBrains Mono, 400 to 500. Only for figures, years, stacks and diagram labels.
- All four files are self-hosted, subset to Latin, and total 153 KB.
- Measure: 62ch for prose, 46ch for the lede, 58ch for case summaries.
- Display sizes: `clamp(3rem, 7vw, 6rem)`. Section headings `clamp(1.75rem, 3.2vw, 2.625rem)`.
- Labels: 11px, 0.11em tracking, uppercase.

## Layout

12 columns inside a 1200px measure, gutters `clamp(22px, 4vw, 44px)`.

- Hero: text left, metric list right, baseline aligned at the bottom.
- Banner plate: full bleed, 21:9, caption aligned to the measure.
- Work: text column plus a 320px diagram column. Hairlines between cases, never cards.
- Arc: six equal columns, collapsed to two on mobile.
- About: prose plus a 180px portrait and a fact list.

## Motion

One authored moment: the banner plate reveals with a clip-path wipe on first paint, 900ms, exponential ease-out. Everything else is a 160ms colour or border transition. All of it disabled under `prefers-reduced-motion`.

## Browser surfaces

Selection is ink on paper. Focus rings are a 2px accent outline at 3px offset. The caret is accent. Links are underlined with the rule colour and switch to accent on hover. Numerals are tabular in every list that has numbers.

## Refused

No cards, no shadows, no gradients, no glass. No emoji, no icon set, no section numbers. No eyebrow above a heading. No dark mode: the paper is the point, and the print stylesheet inherits it.
