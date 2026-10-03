# Product Requirements and Current Status

## Product

ECHO is a responsive storefront prototype focused on embedded electronics and maker hardware. The current implementation demonstrates catalog browsing and a frontend shopping flow; it is not a live transaction service.

## Implemented

- Home page with brand feature, product feature, category links, product listings, and store highlights.
- Shop page with category checkboxes, a maximum-price slider, and sorting by featured order, price, or rating.
- Category pages with category imagery and descriptions.
- Product detail pages with local images, specifications, ratings, related products, and optional video/model presentation.
- Search page with instant matching against the local catalog.
- Cart page with quantity updates, removal, clear-cart, and subtotal calculation.
- Checkout form with client-side validation and a demo order confirmation flow.
- About and contact pages; the contact form currently shows a client-side success state only.
- Red, white, and black themes.
- Read-only REST API routes for product listing, product lookup by slug, and search.

## Data and transaction boundaries

The frontend sample products and categories are maintained in `lib/products.ts`; the Next.js API reads that catalog. The standalone Express backend currently has a separate copy in `backend/src/data/catalog.js` and is not connected to the storefront UI. Neither catalog is loaded from a database. The cart is persisted in the browser; demo order details are written to `sessionStorage`. No payment is collected and no order, contact message, or inventory change is stored on a server.

## Not implemented

- Database-backed catalog, inventory, cart, or order persistence.
- User accounts, authentication, or authorization.
- Payment processing, shipping calculation, or real order fulfillment.
- Server-side contact form delivery.
- Product administration or inventory management.

## Acceptance criteria for a production commerce service

- Persist product, inventory, customer, order, and contact data in a secured database.
- Validate prices, stock, and order totals on the server; never trust client-submitted totals.
- Integrate a payment provider using server-side credentials and verified payment webhooks.
- Add authentication and authorization for customer and administrative operations.
- Deliver contact messages through a server-side email or support integration.
- Add automated API, checkout, and accessibility tests before production use.
