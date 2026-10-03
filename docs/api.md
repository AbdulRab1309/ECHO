# ECHO REST APIs

This project currently has two read-only JSON APIs. Both use bundled demo data and require no external account or API key. The Express backend is separate from the Next.js frontend and is not yet consumed by the storefront.

## Next.js API

The Next.js App Router endpoints run on the frontend origin, normally `http://localhost:3000`, and read product data from `lib/products.ts`.

### List products

`GET /api/products`

Optional query parameters:

- `category`: `microcontroller`, `sensor`, `wireless`, or `all`
- `limit`: integer from 1 to 100 (default `20`)
- `offset`: non-negative integer (default `0`)

Example: `GET /api/products?category=wireless&limit=10&offset=0`

Returns `{ "data": [...], "pagination": { "limit", "offset", "count", "total" } }`. Invalid categories or pagination values return `400` with an `error` message.

### Get one product

`GET /api/products/:slug`

Example: `GET /api/products/esp32`

Returns `{ "data": { ...product } }`. Unknown slugs return `404` with `{ "error": "Product not found" }`.

### Search products

`GET /api/search?q=raspberry`

Returns `{ "data": [...], "query": "raspberry", "count": 1 }`. Missing or blank `q` returns `400`. Search matches product name, tagline, short description, and category, case-insensitively.

## Express API

The standalone Express server is in `backend/` and defaults to `http://localhost:5000`. Run it with `cd backend`, `npm ci`, then `npm run dev`. Copy `.env.example` to `.env` and configure the allowed frontend origins through `FRONTEND_URL_LOCAL` and `FRONTEND_URL_PROD` when making browser requests. The server allows GET and OPTIONS requests only.

| Method and path | Query parameters | Response |
| --- | --- | --- |
| `GET /api/health` | None | Health status object |
| `GET /api/products` | Optional `category`, `q` | Array of matching products |
| `GET /api/products/:slug` | Slug path parameter | Product object, or `404` JSON error |
| `GET /api/products/related` | Optional comma-separated `slugs` | Array of matching products |
| `GET /api/categories` | None | Array of categories |

The Express product and category records currently live in `backend/src/data/catalog.js`, separate from the Next.js catalog. Keep these datasets aligned until the frontend is switched to the backend or both services use a persistent shared data source.

## Current limitations

Neither API uses a database or persists changes. Cart state is stored in the browser, and checkout does not create a server-side order or process payment. Persistent inventory, carts, and orders require a database and payment integration.
