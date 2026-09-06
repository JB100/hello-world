# Images

| Filename                | What it is                       | Size        |
| ----------------------- | -------------------------------- | ----------- |
| `kat-portrait.jpg`      | Portrait photograph for the hero | 1400 x 2100 |
| `babcp-accredited.jpg`  | BABCP Accredited mark            | 600 x 600   |
| `emdr-uk.jpg`           | EMDR UK mark                     | 600 x 325   |
| `kat-lech-psychotherapy-logo.svg` | Header wordmark        | 1957 x 211  |

The `width` and `height` attributes on each `<img>` match these dimensions.
They reserve the space while the file loads so the page doesn't jump — if you
replace a file at different proportions, update those two numbers to match.

The portrait was supplied at 2000 x 3000 and 971 KB. It is displayed about
480px wide, so it has been resized to 1400px and re-encoded at quality 82,
which brought it to 277 KB with no visible difference. Keep your full-size
original elsewhere.

Both accreditation marks were supplied as JPEGs with a `.png` extension and
have been re-saved as real `.jpg` files. They have white backgrounds rather
than transparency, so each is displayed inside its own white panel. If you can
get transparent PNG or SVG versions from BABCP and EMDR UK, send them and the
panels can go.

## The logo needs a proper re-export

The supplied SVG contained live text set in Helvetica Neue, with each letter
group pinned to an absolute x-coordinate. Without that font installed — every
Windows PC, most Android phones — it fell back to a serif and "Psychotherapy"
split into "Psychothe rapy".

It has been rewritten as a single flowing text run with a fallback stack and a
fixed `textLength`, so the mark holds together whichever font resolves. Macs
render true Helvetica Neue; elsewhere Arial stands in.

The correct fix is a re-export from Illustrator with **Type > Create Outlines**
applied before saving. That embeds the letterforms as shapes and removes any
dependence on fonts. Save it over the existing file — no markup changes needed.
