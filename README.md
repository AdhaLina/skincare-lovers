# 🌿 Skincare Lovers — Affiliate Marketing Website

A fast, clean, mobile-friendly skincare affiliate website. No build step, no
frameworks — just open it in a browser and it works. Ready to host for free.

## What's inside

| File | Purpose |
|------|---------|
| `index.html` | Homepage — hero, product picks (with filters), routine, newsletter |
| `guides.html` | SEO content: skin types, layering order, ingredient guide |
| `disclosure.html` | **FTC affiliate disclosure + privacy** (legally important) |
| `data/products.js` | **Your product list & affiliate links — edit this** |
| `css/style.css` | All styling |
| `js/main.js` | Renders products, filtering, mobile nav |
| `robots.txt`, `sitemap.xml` | Basic SEO |

## 🚀 Quick start

Just open `index.html` in your browser. That's it.

To preview with a local server (optional):

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## 💰 Add your affiliate links (the important part)

1. Sign up for an affiliate program:
   - **Amazon Associates** — https://affiliate-program.amazon.com (easiest to start)
   - **ShareASale / Impact / Rakuten** — for individual skincare brands
   - **Sephora / Ulta affiliate programs** — via their affiliate networks
2. Open `data/products.js`.
3. For each product, replace the `link:` value with your affiliate URL. Example:

   ```js
   link: "https://www.amazon.com/dp/B00XXXXXXX?tag=YOURTAG-20",
   ```

4. To add a product, copy an existing `{ ... }` block and edit the fields.

All affiliate links use `rel="sponsored nofollow noopener"` and open in a new
tab — this is Google/FTC best practice.

## ⚖️ Before you go live (compliance)

- ✅ Keep the disclosure banner and `disclosure.html` — the FTC **requires**
  clear affiliate disclosure.
- ✅ If you join Amazon Associates, the "As an Amazon Associate..." text is
  required (already included in the footer).
- ✏️ Add a real contact email to `disclosure.html`.

## 🌐 Deploy for free

**Netlify (drag & drop):** go to https://app.netlify.com/drop and drag this
folder in.

**GitHub Pages:** push this repo, then Settings → Pages → deploy from your
branch → `/root`.

**Vercel / Cloudflare Pages:** import the repo; no build command needed.

## 🎨 Customize

- **Brand name / colors:** edit the `:root` variables at the top of `css/style.css`.
- **Product images:** the `image` field accepts an emoji or an image URL.
- **Newsletter:** the form is a front-end demo. Connect it to Mailchimp,
  ConvertKit, or Beehiiv by pasting their embed form in place of the
  `<form id="newsletter-form">` in `index.html`.

---
Built as a starting point — make it yours. 💚
