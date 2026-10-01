# Technology Stack and Architecture

## Runtime and framework

- **Next.js 14.2.5 App Router** provides file-based pages, shared layouts, static product pages, and REST route handlers.
- **React 18** and **TypeScript** power the UI and domain types.
- **Node.js** runs the Next.js development and production servers.

## UI and interaction

- **Tailwind CSS 3** provides utility styling; `app/globals.css` defines theme variables and shared component styles.
- **Zustand 4** manages cart state and persists it to browser `localStorage` through its persist middleware.
- **React Hook Form** and **Zod** validate checkout and contact fields in the browser.
- **Framer Motion** and **React Icons** are installed dependencies; inspect component usage before relying on them for new features.
- **next/font/google** loads the Inter font in the root layout.

## Data and API

- `lib/products.ts` is the current source of product and category data and provides lookup, category-filter, related-product, and search helpers.
- `lib/types.ts` defines the `Product`, `Category`, `CartItem`, and `Order` TypeScript interfaces.
- `app/api/products/route.ts`, `app/api/products/[slug]/route.ts`, and `app/api/search/route.ts` expose read-only JSON endpoints over the in-process catalog.
- There is currently **no database, ORM, external product API, authentication service, or payment provider** configured.
- Checkout creates a demo order in browser `sessionStorage`; the contact form does not deliver its submission to a server.

## Commands

- `npm run dev`: development server
- `npm run build`: production build and type validation
- `npm run start`: serve a production build
- `npm run lint`: invokes the Next.js lint command; ESLint is not currently listed as a project dependency.

## Architecture direction

Keep product-domain types and catalog access separate from route handlers. When a database is selected, replace the static data source behind those helpers and API routes; do not treat client-supplied price or inventory as authoritative.
