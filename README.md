# 🌸 Seoul Glow — Korean Skincare (K-Beauty) Affiliate Website

A fast, clean, mobile-friendly **Korean skincare** affiliate website. No build
step, no frameworks — just open it in a browser and it works. Ready to host for
free. Built around the K-beauty glass-skin routine (double cleansing, essences,
snail mucin, cica, and Korean sunscreen).

## What's inside

| File | Purpose |
|------|---------|
| `index.html` | Homepage — hero, product picks (with filters), routine, newsletter |
| `blog.html` | Blog index listing your review articles |
| `articles/*.html` | Review articles (snail mucin review, beginner routine, best sunscreens) |
| `guides.html` | SEO content: glass skin, double cleansing, essence vs serum, K-beauty ingredients |
| `about.html` | About page (builds trust + helps affiliate approval) |
| `disclosure.html` | **FTC affiliate disclosure + privacy** (legally important) |
| `data/products.js` | **Your product list & affiliate links — edit this** |
| `css/style.css` | All styling |
| `js/main.js` | Renders products, filtering, mobile nav |
| `netlify.toml`, `.github/workflows/deploy.yml` | One-click deploy config (Netlify or GitHub Pages) |
| `robots.txt`, `sitemap.xml` | Basic SEO |

## ✍️ Add / edit articles

Articles live in `articles/`. To add one, copy an existing article file, edit
the content, then add a matching `<a class="post-card">` card to `blog.html`
and a `<url>` entry to `sitemap.xml`. The in-article "Check Price" boxes use the
same affiliate links as `data/products.js` — keep them in sync.

## 🚀 Quick start

Just open `index.html` in your browser. That's it.

To preview with a local server (optional):

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## 💰 Add your affiliate links (the important part)

1. Sign up for an affiliate program (these are the best for K-beauty):
   - **Amazon Associates** — https://affiliate-program.amazon.com (easiest to start; carries most K-beauty brands)
   - **YesStyle** — huge Korean skincare catalog with its own affiliate program
   - **Stylevana / iHerb / Olive Young Global** — popular K-beauty retailers with affiliate programs
   - **ShareASale / Impact / Rakuten** — networks that host individual Korean brands
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
Built as a starting point for your K-beauty site — make it yours. 🌸
