# Images

| Filename                | What it is                       | Size        |
| ----------------------- | -------------------------------- | ----------- |
| `kat-portrait.jpg`      | Portrait photograph for the hero | 1400 x 2100 |
| `babcp-accredited.jpg`  | BABCP Accredited mark            | 600 x 600   |
| `emdr-uk.jpg`           | EMDR UK mark                     | 600 x 325   |
| `kat-lech-psychotherapy-logo.svg` | Header wordmark        | 846 x 253   |
| `kat-lech-psychotherapy-logo-white.svg` | Footer wordmark  | 846 x 253   |
| `kat-lech-about.jpg`    | About page photograph            | 900 x 900   |
| `axa-health.svg`        | AXA Health logo                  | 160 x 72    |
| `aviva.svg`             | Aviva logo                       | 957 x 688   |
| `wpa.svg`               | WPA logo                         | 96 x 72     |
| `kat-cbt-emdr-favicon.webp` | Icon master                  | 512 x 512   |
| `favicon.ico`           | Browser tab icon (16/32/48)      | multi       |
| `favicon-32.png`        | Browser tab icon                 | 32 x 32     |
| `apple-touch-icon.png`  | Home-screen icon                 | 180 x 180   |

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

## The logo

The current lockup stacks "Kat Lech" over a tracked-out "PSYCHOTHERAPY". It
arrived as live text — Didot for the name, Helvetica Neue for the strapline —
with each letter group pinned to an x-coordinate calculated for those fonts.
Didot ships only on macOS, so everywhere else the name fell back to a default
serif and broke apart into "Kat Le ch".

It has been rewritten so each line is one flowing text run with a fallback
stack and a fixed `textLength`, holding its width whichever font resolves.
The strapline's tracking now comes from `textLength` rather than per-letter
letter-spacing, which is what makes it survive substitution.

**The proper fix is a re-export with Type > Create Outlines applied**, which
embeds the letterforms as shapes and removes the font dependency entirely.
Save it over this file; no markup changes needed. Then regenerate the white
version by swapping both `fill` values to `#f2f6f3`.
