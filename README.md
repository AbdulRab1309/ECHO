# ECHO Storefront

ECHO is a storefront prototype for embedded electronics and maker hardware. The repository contains a Next.js frontend and a separate Express REST API. The storefront includes a curated product catalog, browse and search pages, product details, a browser-persisted cart, and a simulated checkout.

## Features

- App Router pages for the home page, shop, categories, product details, search, cart, checkout, order confirmation, about, and contact.
- Product category, price, and sort filters; search matches product names, taglines, descriptions, and categories.
- Product specifications, ratings, related products, local product imagery, and a video feature for a supported product.
- Three themes: white, black, and red.
- Cart persistence in browser `localStorage` through Zustand.
- Checkout form validation with React Hook Form and Zod. Submitting creates a demo order in `sessionStorage`; it does not take payment or submit an order to a server.
- Read-only JSON endpoints in both Next.js and Express for products and categories.

## Requirements

- Node.js 18.17 or later
- npm

## Run locally

Start the frontend in one terminal:

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Start the Express backend in a second terminal:

```bash
cd backend
npm ci
cp .env.example .env
npm run dev
```

The backend listens on [http://localhost:5000](http://localhost:5000) by default. Edit `backend/.env` to set the frontend origins allowed by CORS. Do not commit that file; use `.env.example` for placeholder configuration.

Available scripts:

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Build the production app |
| `npm run start` | Serve a production build |
| `npm run lint` | Run the Next.js lint command |

## REST APIs

The project currently has two read-only API implementations. Both use bundled demo catalog data and require no external account or API key. The Express backend has its own catalog copy and is not yet connected to the storefront UI; the Next.js frontend continues to use `lib/products.ts` directly.

Next.js endpoints (port `3000`):

| Method and endpoint | Description |
| --- | --- |
| `GET /api/products` | List products; optional `category`, `limit`, and `offset` |
| `GET /api/products/:slug` | Get a product by slug |
| `GET /api/search?q=raspberry` | Search products |

Express endpoints (port `5000`):

| Method and endpoint | Description |
| --- | --- |
| `GET /api/health` | Health check |
| `GET /api/products?category=wireless&q=esp32` | List/filter/search products |
| `GET /api/products/:slug` | Get a product by slug |
| `GET /api/products/related?slugs=esp32,arduino-uno-q` | Get related products by comma-separated slugs |
| `GET /api/categories` | List categories |

Example:

```bash
curl "http://localhost:3000/api/products?category=wireless&limit=10&offset=0"
curl "http://localhost:3000/api/products/esp32"
curl "http://localhost:3000/api/search?q=raspberry"
curl "http://localhost:5000/api/health"
curl "http://localhost:5000/api/products?category=wireless&q=esp32"
```

See [docs/api.md](docs/api.md) for route details, configuration, and response formats.

## Project structure

```text
app/              Next.js pages and REST route handlers
components/       Shared storefront, product, and UI components
backend/          Standalone Express API, routes, and bundled catalog
lib/products.ts   Curated catalog and product lookup/search helpers
lib/store/        Zustand cart store
lib/types.ts      Product, category, cart, and order types
public/           Local product/category imagery and video assets
docs/             Product, architecture, API, and UI documentation
```

## Current limitations

Both catalog sources are bundled demo data, not a database, and the backend catalog is currently a separate copy from the frontend catalog. The Express API is not yet consumed by the storefront. Cart state is local to the browser. Checkout only simulates order creation in the current browser session; no order, inventory, or payment data is sent to a server. The contact form displays a client-side confirmation and does not deliver messages. See [docs/Development-Roadmap.md](docs/Development-Roadmap.md) for next steps.
