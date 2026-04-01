# GrowthStack Website

Static HTML/CSS/JS site for growthstackhq.com — deployable to Vercel or GitHub Pages.

## Files

```
growthstack-site/
├── index.html          — Homepage
├── how-it-works.html   — How It Works + Pricing
├── about.html          — About page
├── blog.html           — Blog / Resources
├── contact.html        — Contact + booking form
├── thank-you.html      — Form submission confirmation
├── style.css           — All styles (single file)
├── main.js             — Nav scroll, mobile menu, scroll animations
├── vercel.json         — Vercel deployment config (clean URLs, headers)
└── README.md           — This file
```

## Deploy to Vercel (recommended — 2 minutes)

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click **Add New → Project**
3. Upload this folder or connect your GitHub repo
4. Vercel auto-detects static HTML — no build settings needed
5. Click **Deploy**
6. Add your custom domain `growthstackhq.com` in Project Settings → Domains

Done. `vercel.json` handles clean URLs (`/about` instead of `/about.html`) automatically.

## Deploy to GitHub Pages (alternative)

1. Create a new GitHub repository
2. Upload all files to the repository root
3. Go to **Settings → Pages**
4. Set Source to `main` branch, `/ (root)` folder
5. Save — your site will be live at `https://yourusername.github.io/repo-name`
6. Add custom domain in Settings → Pages → Custom domain

**Note:** GitHub Pages does not support `vercel.json` — URLs will include `.html` extensions.
To get clean URLs on GitHub Pages, rename files to directories:
- `about.html` → `about/index.html`
- `blog.html` → `blog/index.html`
- etc.

## Before Going Live — Checklist

- [ ] Replace Calendly link in `contact.html` with your real booking URL
  - Search: `https://calendly.com/growthstackhq`
  - Replace with your actual Calendly link
- [ ] Update copyright year if needed (currently 2026)
- [ ] Add team photos/bios to `about.html` (marked with placeholder comment)
- [ ] Add real testimonials when available (marked in `index.html`)
- [ ] Set up Google Analytics: add GA4 script before `</head>` on all pages
- [ ] Submit sitemap to Google Search Console after launch
- [ ] Redirect old service page URLs from the previous site

## Customisation

**Colours** — Edit CSS variables at the top of `style.css`:
```css
--navy:   #0F1B2D
--orange: #F15A24
```

**Fonts** — Currently Syne (headings) + DM Sans (body), loaded from Google Fonts.
Change the `@import` at the top of `style.css` and update `--font-d` / `--font-b` variables.

**Calendly embed** — To embed Calendly inline instead of linking out:
1. Add Calendly's embed script to `contact.html`
2. Replace the button with `<div class="calendly-inline-widget" data-url="YOUR_LINK"></div>`

## Contact Form

The form in `contact.html` uses Netlify Forms by default (`data-netlify="true"`).

**If deploying to Vercel:** Replace with Formspree or EmailJS:
1. Sign up at [formspree.io](https://formspree.io)
2. Create a form and get your endpoint URL
3. Change `<form ... action="/thank-you.html">` to `<form action="https://formspree.io/f/YOUR_ID" method="POST">`

**If deploying to Netlify:** Forms work out of the box — no changes needed.
