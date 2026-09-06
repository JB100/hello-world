# Images

| Filename                | What it is                       | Size        |
| ----------------------- | -------------------------------- | ----------- |
| `kat-portrait.jpg`      | Portrait photograph for the hero | 1400 x 2100 |
| `babcp-accredited.jpg`  | BABCP Accredited mark            | 600 x 600   |
| `emdr-uk.jpg`           | EMDR UK mark                     | 600 x 325   |
| `kat-lech-psychotherapy-logo.svg` | Header wordmark        | 1957 x 211  |
| `kat-lech-psychotherapy-logo-white.svg` | Footer wordmark  | 1957 x 211  |
| `axa-health.svg`        | AXA Health logo                  | 160 x 72    |
| `aviva.svg`             | Aviva logo                       | 957 x 688   |
| `wpa.svg`               | WPA logo                         | 96 x 72     |

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

The wordmark is now supplied with the text converted to outlines, so it renders
identically everywhere with no font dependency.

`kat-lech-psychotherapy-logo-white.svg` is the light version used in the footer.
It is generated from the dark one by setting every path fill to `#f2f6f3`. If
the dark logo is ever replaced, regenerate the white one the same way.

One small thing in the artwork: the "Kat Lech" paths carry no fill attribute so
they render pure black, while the "Psychotherapy" paths are `#2e2f2f`. The
difference is invisible at header size but would show on anything large, like
print or a social banner.

## Insurer logos

The three marks have very different proportions, so they sit in equal-width
panels at a common 40px height rather than being scaled to match each other.

`aviva.svg` arrived with fixed `width` and `height` attributes but no
`viewBox`, which means CSS sizing crops it instead of scaling it. A viewBox
derived from its own dimensions has been added. It also arrived as
`Aviva.svg`; it is now lower case, because a capital in a filename breaks on
case-sensitive hosting.

These are third-party trademarks used to show insurer approval. Keep them as
supplied — do not recolour or redraw them.
