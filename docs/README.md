# ECHO Documentation

This documentation describes the current Next.js storefront and standalone Express API prototype. Both use static catalog data; there is no configured database, authentication, payment gateway, or persistent order service.

## Documents

- [Product requirements and implementation status](PRD.md)
- [Development roadmap](Development-Roadmap.md)
- [Technology stack and architecture](Tech_Stack.md)
- [Current data model and persistence](DB_Schema.md)
- [REST API reference](api.md)
- [UI and theme guide](UI-UX.md)

## Quick facts

- The app uses Next.js 14 App Router, React 18, TypeScript, and Tailwind CSS.
- Product and category definitions live in `lib/products.ts`.
- API handlers under `app/api/` expose product listing, product lookup, and search as read-only endpoints.
- The separate `backend/` Express service exposes read-only health, product, related-product, and category endpoints; it is not yet connected to the storefront.
- Zustand persists cart contents in browser `localStorage`.
- Checkout is a frontend demo: it saves an order to `sessionStorage` and does not process payment or contact a server.

For install and run instructions, see the repository [README](../README.md).
