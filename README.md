# ECHO Storefront

ECHO is a Next.js storefront prototype for embedded electronics and maker hardware. It includes a curated product catalog, browse and search pages, product details, a browser-persisted cart, a simulated checkout, and a small read-only REST API.

## Features

- App Router pages for the home page, shop, categories, product details, search, cart, checkout, order confirmation, about, and contact.
- Product category, price, and sort filters; search matches product names, taglines, descriptions, and categories.
- Product specifications, ratings, related products, local product imagery, and a video feature for a supported product.
- Three themes: white, black, and red.
- Cart persistence in browser `localStorage` through Zustand.
- Checkout form validation with React Hook Form and Zod. Submitting creates a demo order in `sessionStorage`; it does not take payment or submit an order to a server.
- Read-only JSON endpoints for products and search.

## Requirements

- Node.js 18.17 or later
- npm

## Run locally

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Available scripts:

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Build the production app |
| `npm run start` | Serve a production build |
| `npm run lint` | Run the Next.js lint command |

## REST API

The API is implemented with Next.js route handlers and reads from the same static catalog as the UI. It requires no external service or API key.

| Method and endpoint | Description |
| --- | --- |
| `GET /api/products` | List products; optional `category`, `limit`, and `offset` query parameters |
| `GET /api/products/:slug` | Get a product by slug |
| `GET /api/search?q=raspberry` | Search products |

Example:

```bash
curl "http://localhost:3000/api/products?category=wireless&limit=10&offset=0"
curl "http://localhost:3000/api/products/esp32"
curl "http://localhost:3000/api/search?q=raspberry"
```

See [docs/api.md](docs/api.md) for response formats and error behavior.

## Project structure

```text
app/              Next.js pages and REST route handlers
components/       Shared storefront, product, and UI components
lib/products.ts   Curated catalog and product lookup/search helpers
lib/store/        Zustand cart store
lib/types.ts      Product, category, cart, and order types
public/           Local product/category imagery and video assets
docs/             Product, architecture, API, and UI documentation
```

## Current limitations

The product catalog is bundled demo data, not a database. Cart state is local to the browser. Checkout only simulates order creation in the current browser session; no order, inventory, or payment data is sent to a server. The contact form displays a client-side confirmation and does not deliver messages. See [docs/Development-Roadmap.md](docs/Development-Roadmap.md) for next steps.
