/**
 * PRODUCT DATABASE — Korean Skincare (K-Beauty)
 * ---------------------------------------------
 * This is the ONLY file you need to edit to manage products.
 *
 * HOW TO ADD YOUR AFFILIATE LINK:
 *   Replace the `link` value with your affiliate URL (Amazon Associates,
 *   YesStyle affiliate, Stylevana, iHerb, etc. — all popular for K-beauty).
 *
 *   Example (Amazon Associates):
 *     link: "https://www.amazon.com/dp/B00XXXXXXX?tag=seoulglow0f-20"
 *
 * FIELDS:
 *   id        unique slug (used internally)
 *   name      product name shown to visitors
 *   brand     brand name (placeholders — swap for real brands you promote)
 *   category  one of: cleanser | toner | essence | serum | mask | moisturizer | sunscreen
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
    id: "rice-cleansing-oil",
    name: "Rice Bran Cleansing Oil",
    brand: "Hanbit",
    category: "cleanser",
    price: "$18",
    rating: 4.7,
    image: "🧴",
    tag: "Step 1 · Oil Cleanse",
    skinTypes: ["all", "dry", "combination"],
    blurb: "Melts away sunscreen and makeup — the first half of the double cleanse.",
    pros: ["Rinses clean", "No greasy film", "Gentle on eyes"],
    link: "https://www.amazon.com/dp/EXAMPLE1?tag=seoulglow0f-20",
  },
  {
    id: "green-tea-gel-cleanser",
    name: "Green Tea Low-pH Gel Cleanser",
    brand: "Jeju Botanics",
    category: "cleanser",
    price: "$14",
    rating: 4.8,
    image: "🧼",
    tag: "Step 2 · Water Cleanse",
    skinTypes: ["all", "oily", "sensitive"],
    blurb: "A gentle, low-pH gel that cleanses without stripping your skin barrier.",
    pros: ["pH-balanced", "Won't over-dry", "Great value"],
    link: "https://www.amazon.com/dp/EXAMPLE2?tag=seoulglow0f-20",
  },
  {
    id: "rice-toner",
    name: "Rice Bran Glow Toner",
    brand: "Hanbit",
    category: "toner",
    price: "$17",
    rating: 4.6,
    image: "🌾",
    tag: "",
    skinTypes: ["all", "dry"],
    blurb: "A milky rice toner that preps skin and delivers an instant dewy glow.",
    pros: ["Brightening", "Layers well", "Alcohol-free"],
    link: "https://www.amazon.com/dp/EXAMPLE3?tag=seoulglow0f-20",
  },
  {
    id: "snail-mucin-essence",
    name: "96% Snail Mucin Power Essence",
    brand: "SnailFix",
    category: "essence",
    price: "$22",
    rating: 4.9,
    image: "🐌",
    tag: "Editor's Pick",
    skinTypes: ["all", "dry", "combination"],
    blurb: "The cult K-beauty essence that plumps, repairs, and gives that glass-skin bounce.",
    pros: ["Deeply hydrating", "Fades marks", "Lightweight"],
    link: "https://www.amazon.com/dp/EXAMPLE4?tag=seoulglow0f-20",
  },
  {
    id: "ginseng-essence",
    name: "Red Ginseng First Treatment Essence",
    brand: "Hanbang House",
    category: "essence",
    price: "$36",
    rating: 4.6,
    image: "🌿",
    tag: "Anti-Aging",
    skinTypes: ["all", "dry", "combination"],
    blurb: "A traditional hanbang (herbal) essence that firms and revitalizes tired skin.",
    pros: ["Firming", "Radiance boost", "Fast-absorbing"],
    link: "https://www.amazon.com/dp/EXAMPLE5?tag=seoulglow0f-20",
  },
  {
    id: "cica-ampoule",
    name: "Centella Cica Soothing Ampoule",
    brand: "Jeju Botanics",
    category: "serum",
    price: "$21",
    rating: 4.8,
    image: "🍃",
    tag: "Best for Sensitive",
    skinTypes: ["sensitive", "all"],
    blurb: "Calms redness and irritation with soothing centella asiatica (cica).",
    pros: ["Reduces redness", "Barrier support", "Non-irritating"],
    link: "https://www.amazon.com/dp/EXAMPLE6?tag=seoulglow0f-20",
  },
  {
    id: "glass-skin-serum",
    name: "Hyaluronic Glass-Skin Serum",
    brand: "Dewdew",
    category: "serum",
    price: "$24",
    rating: 4.7,
    image: "💧",
    tag: "",
    skinTypes: ["all", "dry", "sensitive"],
    blurb: "Multi-weight hyaluronic acid for that plump, dewy, see-through glow.",
    pros: ["Instant plump", "Non-sticky", "Layer-friendly"],
    link: "https://www.amazon.com/dp/EXAMPLE7?tag=seoulglow0f-20",
  },
  {
    id: "propolis-ampoule",
    name: "Propolis Honey Glow Ampoule",
    brand: "BeeGlow",
    category: "serum",
    price: "$26",
    rating: 4.6,
    image: "🍯",
    tag: "",
    skinTypes: ["dry", "combination", "all"],
    blurb: "Honey and propolis nourish dull, dry skin into a lit-from-within glow.",
    pros: ["Nourishing", "Antioxidant-rich", "Comforting"],
    link: "https://www.amazon.com/dp/EXAMPLE8?tag=seoulglow0f-20",
  },
  {
    id: "hydrating-sheet-mask",
    name: "Daily Hydrating Sheet Mask (10-pack)",
    brand: "MaskLab",
    category: "mask",
    price: "$19",
    rating: 4.7,
    image: "🧖",
    tag: "Daily Essential",
    skinTypes: ["all", "dry", "sensitive"],
    blurb: "A 15-minute hydration boost — the K-beauty self-care staple.",
    pros: ["Instant glow", "Great value", "Travel-friendly"],
    link: "https://www.amazon.com/dp/EXAMPLE9?tag=seoulglow0f-20",
  },
  {
    id: "sleeping-mask",
    name: "Ceramide Overnight Sleeping Mask",
    brand: "Dewdew",
    category: "mask",
    price: "$28",
    rating: 4.8,
    image: "🌙",
    tag: "",
    skinTypes: ["all", "dry"],
    blurb: "Wake up to plump, glowing skin — this overnight mask locks in moisture.",
    pros: ["Wake up dewy", "Non-greasy", "Barrier repair"],
    link: "https://www.amazon.com/dp/EXAMPLE10?tag=seoulglow0f-20",
  },
  {
    id: "snail-ceramide-cream",
    name: "Snail Ceramide Repair Cream",
    brand: "SnailFix",
    category: "moisturizer",
    price: "$27",
    rating: 4.9,
    image: "🫙",
    tag: "Editor's Pick",
    skinTypes: ["all", "dry", "sensitive"],
    blurb: "Rich yet breathable cream that seals in your routine and rebuilds the barrier.",
    pros: ["Long-lasting", "Soothing", "No greasy finish"],
    link: "https://www.amazon.com/dp/EXAMPLE11?tag=seoulglow0f-20",
  },
  {
    id: "rice-sunscreen",
    name: "Rice Water Daily Sunscreen SPF 50+",
    brand: "Jeju Botanics",
    category: "sunscreen",
    price: "$20",
    rating: 4.8,
    image: "☀️",
    tag: "Daily Essential",
    skinTypes: ["all", "sensitive"],
    blurb: "A weightless Korean SPF with no white cast — the final glass-skin step.",
    pros: ["No white cast", "Dewy finish", "Sits under makeup"],
    link: "https://www.amazon.com/dp/EXAMPLE12?tag=seoulglow0f-20",
  },
];

// Expose for browser use
if (typeof window !== "undefined") {
  window.PRODUCTS = PRODUCTS;
}
