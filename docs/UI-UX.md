# UI and UX Guide

## Visual direction

The storefront uses a high-contrast, structural layout: large uppercase headings, square-edged controls, visible borders, and product grids divided by rules. The design is responsive and uses shared spacing and color tokens from Tailwind and `app/globals.css`.

## Themes

The theme toggle cycles among three CSS-variable themes and saves the selection in browser `localStorage` under `echo-theme`:

- **White:** paper-white background with black text and borders; red accent.
- **Black:** black background with paper-white text and borders; red accent.
- **Red:** red background with black text and borders.

The root layout starts with the white theme when no saved preference is available. Global border-radius is reset to zero.

## Shared navigation

- Sticky header with ECHO brand link, desktop navigation, search, theme control, and cart count.
- On small screens, the primary navigation moves to a horizontally scrollable second row.
- Shared footer, scroll-to-top control, and custom cursor treatment are mounted by the root layout.

## Page patterns

- **Home:** brand statement, featured product video/poster, marquees, latest products, categories, and feature strip.
- **Shop:** category checkboxes, maximum-price slider, sort selector, and product grid.
- **Category:** category description/image followed by matching products.
- **Product:** image gallery, product details, quantity control, add-to-cart action, specs, and related products. A product can additionally show its video/model presentation.
- **Search:** client-side live search against the bundled catalog.
- **Cart:** line items, quantity controls, removal, clear-cart action, and totals.
- **Checkout:** shipping fields, order summary, validation messages, and a visible demo-payment notice.
- **Order confirmation:** reads its demo order from browser `sessionStorage`.
- **Contact:** validated client-side form with a local success state; it does not send the message to a server.

## Interaction and accessibility notes

- Use semantic links for navigation and buttons for actions; retain accessible labels for icon-only or visually compact controls.
- Maintain visible keyboard focus states when extending the current global focus styling.
- Keep product images accompanied by meaningful alt text and preserve responsive aspect ratios.
- Test the three themes and all workflows at narrow mobile and desktop widths.
- Avoid implying that demo checkout, shipping, contact, stock, or order status represents a live service.
