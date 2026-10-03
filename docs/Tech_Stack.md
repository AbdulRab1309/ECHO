# Technology Stack and Architecture

## Runtime and framework

- **Next.js 14.2.5 App Router** provides file-based pages, shared layouts, static product pages, and REST route handlers.
- **React 18** and **TypeScript** power the UI and domain types.
- **Node.js** runs the Next.js app and the separate Express backend in `backend/`.

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
- `backend/src/server.js` starts a standalone Express API with CORS configuration from environment variables; routes are defined in `backend/src/routes/api.js`.
- The Express backend currently uses its own static catalog at `backend/src/data/catalog.js` and is not yet connected to the storefront UI.
- There is currently **no database, ORM, external product API, authentication service, or payment provider** configured.
- Checkout creates a demo order in browser `sessionStorage`; the contact form does not deliver its submission to a server.

## Commands

- `npm run dev`: development server
- `npm run build`: production build and type validation
- `npm run start`: serve a production build
- `npm run lint`: invokes the Next.js lint command; ESLint is not currently listed as a project dependency.
- In `backend/`, `npm run dev` starts the API with nodemon and `npm start` starts it with Node.js.

## Architecture direction

The frontend and Express service currently expose separate read-only APIs over separate copies of the catalog. The next integration step is to make the frontend consume the Express API and establish one authoritative catalog source. When a database is selected, replace the static data source behind the API; do not treat client-supplied price or inventory as authoritative.
