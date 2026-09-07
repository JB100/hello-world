# katlech.co.uk

Static website for Kat Lech Psychotherapy — BABCP-accredited CBT and
EMDR Europe-accredited EMDR therapy for trauma, anxiety and ADHD, delivered
online across the UK.

Plain HTML, CSS and JavaScript. No build step, no dependencies, no framework.

## Pages

| File                  | Page             |
| --------------------- | ---------------- |
| `index.html`          | Home             |
| `how-can-i-help.html` | How can I help   |
| `insurance.html`      | Insurance        |
| `testimonials.html`   | Testimonials     |
| `about.html`          | About Kat        |
| `contact.html`        | Contact          |
| `privacy.html`        | Privacy policy   |

## Running it locally

Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
```

## Deploying

Upload the whole folder to any static host — Netlify, Cloudflare Pages,
GitHub Pages, or classic cPanel/FTP hosting. There is nothing to build.

## Changing the brand

Every colour, typeface and spacing value is a custom property at the top of
`assets/css/site.css`, in the `:root` block. Change a value there and it
changes everywhere.

```css
--ground:    #f8faf9;  /* page background — barely-green off-white */
--surface:   #ffffff;  /* raised panels, form fields, accreditation marks */
--sage:      #e3ede5;  /* pastel green section band */
--sky:       #e0e9f0;  /* pastel blue section band */
--accent:    #9cb9a6;  /* rules and detail — decorative only, fails contrast for text */
--ink:       #2d3a3a;  /* text, deep panels — slate-teal, not black */
--ink-muted: #54615e;  /* secondary text — 5.2:1 or better on every band above */
```

Typefaces are Literata (headings) and Figtree (body), loaded from Google
Fonts in each page's `<head>`.

The site has no booking buttons or calendar by design, and no email address
is published anywhere. All enquiries run through the form on `contact.html`,
which posts to Formspree and carries an off-screen honeypot field to absorb
bot submissions.

## Still to do

- [x] Practice logo — in the header
- [x] Logo re-exported with text converted to outlines
- [x] Accreditation marks — in place below the hero
- [x] Portrait photograph — in place in the hero
- [x] Testimonials — eleven, live on the testimonials page
- [x] Formspree form ID — wired up in `contact.html`
- [x] Insurer logos — on the insurance page and the home page
- [x] Fees and response time — on the contact page
- [x] Privacy policy page — written
- [ ] ICO registration and a separate clinical privacy notice — outside the
      website, but the privacy page assumes both exist

## Search

Each page carries its own title, meta description, canonical URL and Open
Graph tags, and `assets/img/og-image.jpg` is the share card. The home page
also carries JSON-LD describing the practice, Kat's accreditations and the
session fees. `robots.txt` and `sitemap.xml` sit at the root.

Everything is scoped to the United Kingdom rather than to a town, since the
practice is online and takes clients anywhere in the UK. If the domain ever
changes, the absolute URLs to update are the canonicals, the Open Graph
tags, the JSON-LD block in `index.html`, `robots.txt` and `sitemap.xml`.

## Server configuration

`.htaccess` is read by Apache and LiteSpeed, which is what Hostinger runs. It
redirects everything to `https://katlech.co.uk` in a single hop, sets the
security headers (HSTS, a content security policy, nosniff, frame denial,
referrer and permissions policy), turns on compression, sets cache lifetimes,
and points 404s at `404.html`. On Cloudflare Pages or Netlify the file is
ignored and the equivalent settings live in the host's dashboard.

Turn HSTS on only once the certificate is working — browsers remember it for
a year.

The content security policy allows exactly three outside origins: Google
Fonts for the stylesheet, `fonts.gstatic.com` for the font files, and
`formspree.io` for the form submission. Adding anything else to the site —
analytics, a map, an embedded video — means adding it there too, or the
browser will silently block it.

## Images

The two photographs are served as WebP through `<picture>`, at several widths,
with the original JPEG as the fallback for older browsers. A phone downloads
33 KB for the portrait instead of 283 KB. If either photograph is replaced,
regenerate the WebP versions at the same widths (480, 760, 1400 for the
portrait; 480, 760 for the beach photograph) or the old ones will keep being
served.

## Accessibility

Built to WCAG 2.2 AA: semantic landmarks, a skip link, visible keyboard
focus, contrast-checked text colours, and `prefers-reduced-motion` respected.
The single load animation is the only motion on the site.
