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
- [ ] Formspree form ID — replace `YOUR_FORM_ID` in `contact.html`
- [x] Insurer logos — on the insurance page and the home page
- [x] Fees and response time — on the contact page
- [x] Privacy policy page — written; the bracketed details in it still need
      filling in (retention period and date)
- [ ] ICO registration and a separate clinical privacy notice — outside the
      website, but the privacy page assumes both exist

## Accessibility

Built to WCAG 2.2 AA: semantic landmarks, a skip link, visible keyboard
focus, contrast-checked text colours, and `prefers-reduced-motion` respected.
The single load animation is the only motion on the site.
