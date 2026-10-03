# Development Roadmap

This roadmap distinguishes the current frontend prototype from work required for a production commerce service.

## Completed: storefront prototype

- [x] Next.js App Router, TypeScript, and Tailwind project structure.
- [x] Shared navigation, footer, theme toggle, and scroll-to-top behavior.
- [x] Home, shop, category, product detail, search, cart, checkout, order confirmation, about, and contact pages.
- [x] Curated local product and category data, including specifications and related products.
- [x] Shop filters and sorting, product search, and product detail routes.
- [x] Zustand cart persisted in browser `localStorage`.
- [x] Client-side checkout validation and session-only demo order confirmation.
- [x] Read-only `GET /api/products`, `GET /api/products/:slug`, and `GET /api/search` route handlers.
- [x] Standalone Express backend with health, product, related-product, and category GET routes.

## Next: connect the services and add persistence

- [ ] Connect storefront product browsing and search to the Express API; remove duplicate catalog data.
- [ ] Choose and configure a database; replace the in-memory catalog with repository-backed product and inventory access.
- [ ] Add server-side cart and order endpoints with input validation and stock checks.
- [ ] Persist orders so confirmation links remain available across browser sessions and devices.
- [ ] Add payment-provider integration, webhook verification, and transaction status handling.
- [ ] Add shipping-rate calculation and fulfillment status updates.

## Next: operations and customer features

- [ ] Add authentication and role-based access for customer and admin workflows.
- [ ] Build catalog and inventory administration.
- [ ] Deliver contact-form submissions to a support inbox or service.
- [ ] Add automated unit, API, and end-to-end tests, plus accessibility checks.
- [ ] Add observability, deployment configuration, and production security review.
