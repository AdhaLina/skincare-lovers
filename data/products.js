/**
 * PRODUCT DATABASE
 * ----------------
 * This is the ONLY file you need to edit to manage products.
 *
 * HOW TO ADD YOUR AFFILIATE LINK:
 *   Replace the `link` value with your affiliate URL (Amazon Associates,
 *   ShareASale, Sephora/Ulta affiliate, etc.).
 *
 *   Example (Amazon Associates):
 *     link: "https://www.amazon.com/dp/B00XXXXXXX?tag=YOURTAG-20"
 *
 * FIELDS:
 *   id        unique slug (used internally)
 *   name      product name shown to visitors
 *   brand     brand name
 *   category  one of: cleanser | serum | moisturizer | sunscreen | treatment
 *   price     display price string (e.g. "$28")
 *   rating    number 0-5 (supports .5 steps, e.g. 4.5)
 *   image     emoji or image URL used as the product visual
 *   tag       short badge, e.g. "Editor's Pick" or "" for none
 *   skinTypes array of: dry | oily | combination | sensitive | all
 *   blurb     one-line summary
 *   pros      array of short strengths
 *   link      YOUR AFFILIATE LINK  <-- edit this
 */

const PRODUCTS = [
  {
    id: "gentle-gel-cleanser",
    name: "Gentle Foaming Gel Cleanser",
    brand: "PureGlow",
    category: "cleanser",
    price: "$16",
    rating: 4.7,
    image: "🧼",
    tag: "Best for Beginners",
    skinTypes: ["all", "combination", "oily"],
    blurb: "A pH-balanced everyday cleanser that removes grime without stripping.",
    pros: ["Fragrance-free", "Won't dry out skin", "Great value"],
    link: "https://www.amazon.com/dp/EXAMPLE1?tag=YOURTAG-20",
  },
  {
    id: "vitamin-c-serum",
    name: "15% Vitamin C Brightening Serum",
    brand: "Lumina",
    category: "serum",
    price: "$34",
    rating: 4.8,
    image: "🍊",
    tag: "Editor's Pick",
    skinTypes: ["all", "dry", "combination"],
    blurb: "Fades dark spots and boosts radiance with stabilized vitamin C.",
    pros: ["Visible glow in ~4 weeks", "Lightweight", "Pairs with SPF"],
    link: "https://www.amazon.com/dp/EXAMPLE2?tag=YOURTAG-20",
  },
  {
    id: "hyaluronic-serum",
    name: "Hyaluronic Acid + B5 Hydrating Serum",
    brand: "Dewpoint",
    category: "serum",
    price: "$22",
    rating: 4.6,
    image: "💧",
    tag: "",
    skinTypes: ["all", "dry", "sensitive"],
    blurb: "Multi-weight hyaluronic acid draws moisture deep into the skin.",
    pros: ["Plumps fine lines", "Layers well", "Non-sticky"],
    link: "https://www.amazon.com/dp/EXAMPLE3?tag=YOURTAG-20",
  },
  {
    id: "niacinamide-serum",
    name: "10% Niacinamide Pore-Refining Serum",
    brand: "ClearLab",
    category: "serum",
    price: "$19",
    rating: 4.5,
    image: "🧪",
    tag: "Best for Oily Skin",
    skinTypes: ["oily", "combination"],
    blurb: "Balances oil and visibly minimizes the look of enlarged pores.",
    pros: ["Reduces shine", "Calms redness", "Budget-friendly"],
    link: "https://www.amazon.com/dp/EXAMPLE4?tag=YOURTAG-20",
  },
  {
    id: "ceramide-moisturizer",
    name: "Ceramide Barrier Repair Moisturizer",
    brand: "Velveteen",
    category: "moisturizer",
    price: "$28",
    rating: 4.9,
    image: "🫙",
    tag: "Editor's Pick",
    skinTypes: ["all", "dry", "sensitive"],
    blurb: "Rich yet breathable cream that rebuilds a compromised skin barrier.",
    pros: ["Long-lasting hydration", "Soothing", "No greasy finish"],
    link: "https://www.amazon.com/dp/EXAMPLE5?tag=YOURTAG-20",
  },
  {
    id: "gel-moisturizer",
    name: "Oil-Free Gel Moisturizer",
    brand: "ClearLab",
    category: "moisturizer",
    price: "$21",
    rating: 4.4,
    image: "🧴",
    tag: "",
    skinTypes: ["oily", "combination"],
    blurb: "A weightless gel that hydrates without clogging pores.",
    pros: ["Matte finish", "Fast-absorbing", "Non-comedogenic"],
    link: "https://www.amazon.com/dp/EXAMPLE6?tag=YOURTAG-20",
  },
  {
    id: "mineral-spf",
    name: "Invisible Mineral Sunscreen SPF 50",
    brand: "SunVeil",
    category: "sunscreen",
    price: "$25",
    rating: 4.7,
    image: "☀️",
    tag: "Daily Essential",
    skinTypes: ["all", "sensitive"],
    blurb: "Broad-spectrum zinc protection with zero white cast.",
    pros: ["No white cast", "Reef-friendly", "Sits well under makeup"],
    link: "https://www.amazon.com/dp/EXAMPLE7?tag=YOURTAG-20",
  },
  {
    id: "retinol-treatment",
    name: "0.3% Retinol Renewal Night Treatment",
    brand: "Lumina",
    category: "treatment",
    price: "$39",
    rating: 4.6,
    image: "🌙",
    tag: "Anti-Aging",
    skinTypes: ["all", "combination", "dry"],
    blurb: "Encapsulated retinol smooths texture and softens fine lines overnight.",
    pros: ["Beginner-friendly strength", "Minimal irritation", "Time-release"],
    link: "https://www.amazon.com/dp/EXAMPLE8?tag=YOURTAG-20",
  },
  {
    id: "aha-exfoliant",
    name: "Weekly AHA Glow Exfoliant",
    brand: "PureGlow",
    category: "treatment",
    price: "$29",
    rating: 4.5,
    image: "✨",
    tag: "",
    skinTypes: ["all", "combination", "oily"],
    blurb: "A gentle glycolic exfoliant that reveals brighter, smoother skin.",
    pros: ["Even skin tone", "Non-abrasive", "Once-weekly use"],
    link: "https://www.amazon.com/dp/EXAMPLE9?tag=YOURTAG-20",
  },
];

// Expose for browser use
if (typeof window !== "undefined") {
  window.PRODUCTS = PRODUCTS;
}
