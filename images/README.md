# Product photos

Drop your product photos in this folder, then reference them in
`data/products.js` with the `photo` field, e.g.:

```js
{
  id: "snail-mucin-essence",
  name: "CAYRRY Advanced Snail Mucin 96 Power Essence",
  ...
  photo: "images/snail-mucin.jpg",   // <-- add this line
  link: "https://amzn.to/4pehEjQ",
}
```

If a product has no `photo`, the card shows its emoji instead — so you can add
photos one at a time.

## ✅ Which photos are safe to use
- **Your own photos** — always fine.
- **Free stock photos** from Pexels, Unsplash, or Pixabay (free for commercial use).
- **Canva "free" elements.**

## ⚠️ Avoid
- The brand's official product photos, Amazon's images, or any image from Google
  / another website — those are copyrighted.

## Tips
- Square-ish photos (e.g. 800×600) look best on the cards.
- Keep files small (under ~300 KB) so the site stays fast — compress at
  tinypng.com if needed.
