# PariCerise

PariCerise is a small, image-led website for handmade **lavashak** and **fruit preserves** in Lausanne.

The site is designed to feel warm, natural, giftable, and food-focused rather than like a portfolio. The visual identity uses berry red, soft green, cream tones, photography, and subtle miniature- and carpet-inspired decorative motifs.

## Brand idea

PariCerise is built around simple fruit products made in small batches:

- **Lavashak** made from fruit with **no added sweeteners**
- **Jams and preserves** gently sweetened with **honey** and balanced with **fresh lemon**
- Local pickup around **Lausanne / EPFL**
- A visual style inspired by fruit, ceramics, floral details, and traditional textile motifs

## Website features

- Responsive one-page layout for desktop and mobile
- Large image-led hero section
- Separate Lavashak and Jam collections
- Product cards with descriptions, draft weights, and prices
- Simple basket with quantity controls and estimated total
- WhatsApp order generation
- Gift section for mixed boxes and small presents
- Short brand story section
- Subtle decorative motif details throughout the page

## Project structure

```text
PariCerise/
├── index.html      # Website content and product information
├── styles.css      # Layout, colors, typography, and motifs
├── script.js       # Basket and WhatsApp ordering logic
└── README.md       # Project notes and setup instructions
```

## Run locally

No framework or build step is required.

You can simply open `index.html` in a browser, or run a small local server from the project folder:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Publish with GitHub Pages

1. Push the files to the GitHub repository.
2. Open **Settings → Pages** in the repository.
3. Under **Build and deployment**, select **Deploy from a branch**.
4. Choose the `main` branch and the root `/` folder.
5. Save the settings.

The site will then be available through the repository's GitHub Pages URL.

## What to update before launch

### 1. WhatsApp number

Open `script.js` and replace the placeholder value:

```js
const WHATSAPP_NUMBER = '41791234567';
```

Use the full international number without `+`, spaces, or dashes.

### 2. Product prices and weights

The current package sizes are still drafts. Update the product text and `data-unit` values in `index.html` once the final jar and lavashak sizes are decided.

### 3. Product photography

The current site uses temporary lifestyle and ingredient images to establish the layout and visual direction.

For the final version, replace them with original PariCerise photography, ideally including:

- one strong hero image with jam, lavashak, and fresh fruit
- one photo for each lavashak flavor
- one photo for each jam or preserve
- one lifestyle image with fruit, ceramics, linen, or botanical details
- one gift-box image

Original photography will make the website feel much more distinctive and trustworthy.

### 4. Contact details

Update the footer with the final:

- Instagram handle
- email address
- WhatsApp number

## Design palette

The current palette is centered on:

- **Berry red:** `#CC3333`
- **Soft botanical green:** `#6F8464`
- **Cream:** `#FFFAF3`
- **Dark text:** `#332823`

The decorative motifs are intentionally subtle so the cultural influence is visible through the design rather than repeatedly explained in the copy.

## Editing products

Each product card lives in `index.html` and includes:

- product name
- short description
- price
- draft package size
- image
- basket data

When changing a price, make sure the visible price and the button's `data-price` value match.

Example:

```html
<strong>CHF 12</strong>
<button
  class="add-item"
  data-name="Sour Cherry Lavashak"
  data-price="12"
  data-unit="100 g pack"
>
  Add
</button>
```

## Notes

This is intentionally a lightweight static site. It does not require React, a backend, a database, or an e-commerce platform. Orders are confirmed manually through WhatsApp, which keeps the first version simple and easy to maintain.

---

**PariCerise**  
Handmade fruit, small batches, and a little sourness.
