# katlech.co.uk

Static website for Kat's psychotherapy practice — BABCP-accredited CBT and
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
| `contact.html`        | Contact          |

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

The site has no booking buttons or calendar by design. Contact runs through
the form and email address on `contact.html`, reached from the navigation.

## Still to do

- [ ] Practice logo — the header currently uses a text wordmark
- [x] Accreditation marks — in place below the hero
- [x] Portrait photograph — in place in the hero
- [ ] Real contact details, fees and availability
- [ ] Testimonial copy
- [ ] Form handler for the contact form (Formspree or Netlify Forms)
- [ ] Privacy policy page (`privacy.html` is linked but not yet written)

## Accessibility

Built to WCAG 2.2 AA: semantic landmarks, a skip link, visible keyboard
focus, contrast-checked text colours, and `prefers-reduced-motion` respected.
The single load animation is the only motion on the site.
