# PariCerise.github.io — Version 2

A lightweight one-page GitHub Pages site for **PariCerise**, a handmade lavashak and jam brand.

## What changed in v2

- standardized the brand name as **PariCerise**
- changed the main brand color to berry red `#CC3333`
- added subtle Persian-rug-inspired geometric details
- repositioned the brand around handmade lavashak and jams rather than only campus snacks
- split products into dedicated **Lavashak** and **Confitures / Jams** sections
- added product-photo placeholders for easy replacement later
- added visible draft weights / pack sizes
- added taste profiles for lavashak and ingredient summaries for preserves
- replaced the old selected-items textarea with a simple basket
- added quantity increase/decrease controls and an estimated order total
- kept ordering simple by generating a pre-filled WhatsApp message
- improved responsive mobile layout

## Files

- `index.html`
- `styles.css`
- `script.js`

No framework or build step is required.

## Important before publishing

1. **Replace the WhatsApp number** in `script.js`:
   ```js
   const WHATSAPP_NUMBER = '41791234567';
   ```
2. Replace placeholder contact information in the footer.
3. Replace all photo placeholders with your own product photographs.
4. Confirm the product prices.
5. The displayed `100 g` lavashak packs and `220 g` jam jars are **draft placeholders only** because final package weights were not supplied. Update them before launch.
6. Confirm ingredients / allergen information before publishing food-product claims.
7. If GitHub Pages is not enabled, go to **Settings → Pages** and publish from the main branch.

## Adding real photos later

A simple approach is to add image files under an `assets/` folder and replace a placeholder such as:

```html
<div class="product-photo photo-placeholder">...</div>
```

with:

```html
<img class="product-photo" src="assets/barberry-lavashak.jpg" alt="Barberry lavashak by PariCerise" />
```

The existing `.product-photo` styles will keep the layout consistent.
