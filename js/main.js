/* =========================================================
   Skincare Lovers — interactivity
   - renders product cards from data/products.js
   - category filtering
   - mobile nav toggle
   - newsletter (front-end demo only)
   ========================================================= */

(function () {
  "use strict";

  /* ---------- Star rating helper ---------- */
  function starString(rating) {
    const full = Math.floor(rating);
    const half = rating - full >= 0.5;
    const empty = 5 - full - (half ? 1 : 0);
    return "★".repeat(full) + (half ? "⯪" : "") + "☆".repeat(empty);
  }

  /* ---------- Build one product card ---------- */
  function cardHTML(p) {
    const badge = p.tag ? `<span class="card-badge">${p.tag}</span>` : "";
    const pros = (p.pros || [])
      .map((pro) => `<li>${pro}</li>`)
      .join("");
    // Show a real photo if `photo` is set, otherwise fall back to the emoji.
    const media = p.photo
      ? `<img class="card-photo" src="${p.photo}" alt="${p.name}" loading="lazy" />`
      : `<span class="card-emoji" aria-hidden="true">${p.image}</span>`;
    return `
      <article class="card" data-category="${p.category}">
        <div class="card-media">
          ${badge}
          ${media}
        </div>
        <div class="card-body">
          <span class="card-brand">${p.brand}</span>
          <h3 class="card-name">${p.name}</h3>
          <p class="card-blurb">${p.blurb}</p>
          <ul class="pros">${pros}</ul>
          <div class="card-meta">
            <span class="stars" title="${p.rating} out of 5">
              ${starString(p.rating)}<span class="rating-num">${p.rating.toFixed(1)}</span>
            </span>
          </div>
          <a class="btn btn--block" href="${p.link}" target="_blank"
             rel="sponsored nofollow noopener">
            Check Price on Amazon →
          </a>
        </div>
      </article>`;
  }

  /* ---------- Render products into a grid ---------- */
  function renderProducts(filter) {
    const grid = document.getElementById("product-grid");
    if (!grid || typeof PRODUCTS === "undefined") return;

    const list =
      !filter || filter === "all"
        ? PRODUCTS
        : PRODUCTS.filter((p) => p.category === filter);

    grid.innerHTML = list.length
      ? list.map(cardHTML).join("")
      : `<p class="no-results">No products in this category yet — check back soon!</p>`;
  }

  /* ---------- Category filter pills ---------- */
  function initFilters() {
    const pills = document.querySelectorAll(".filter-pill");
    pills.forEach((pill) => {
      pill.addEventListener("click", () => {
        pills.forEach((p) => p.classList.remove("active"));
        pill.classList.add("active");
        renderProducts(pill.dataset.filter);
      });
    });
  }

  /* ---------- Mobile nav ---------- */
  function initNav() {
    const toggle = document.querySelector(".nav-toggle");
    const links = document.querySelector(".nav-links");
    if (!toggle || !links) return;
    toggle.addEventListener("click", () => links.classList.toggle("open"));
    links.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => links.classList.remove("open"))
    );
  }

  /* ---------- Newsletter (demo — wire up to your provider) ---------- */
  function initNewsletter() {
    const form = document.getElementById("newsletter-form");
    if (!form) return;
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const note = form.querySelector(".form-note");
      const input = form.querySelector("input");
      if (note) {
        note.textContent =
          "🎉 Thanks! (Connect this form to Mailchimp/ConvertKit to collect emails.)";
      }
      if (input) input.value = "";
    });
  }

  /* ---------- Footer year ---------- */
  function initYear() {
    const el = document.getElementById("year");
    if (el) el.textContent = new Date().getFullYear();
  }

  document.addEventListener("DOMContentLoaded", function () {
    renderProducts("all");
    initFilters();
    initNav();
    initNewsletter();
    initYear();
  });
})();
