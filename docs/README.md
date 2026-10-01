# ECHO Documentation

This documentation describes the current Next.js storefront prototype. The product catalog is static TypeScript data; there is no configured database, authentication, payment gateway, or persistent order service.

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
- Zustand persists cart contents in browser `localStorage`.
- Checkout is a frontend demo: it saves an order to `sessionStorage` and does not process payment or contact a server.

For install and run instructions, see the repository [README](../README.md).
