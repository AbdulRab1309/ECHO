# ECHO REST API

The API is implemented with Next.js App Router route handlers and is available at `/api`. It reads the current curated catalog in `lib/products.ts`; it requires no external provider, account, API key, or database.

## List products

`GET /api/products`

Optional query parameters:

- `category`: `microcontroller`, `sensor`, `wireless`, or `all`
- `limit`: integer from 1 to 100 (default `20`)
- `offset`: non-negative integer (default `0`)

Example: `GET /api/products?category=wireless&limit=10&offset=0`

Success response (`200`):

```json
{
  "data": [],
  "pagination": {
    "limit": 10,
    "offset": 0,
    "count": 1,
    "total": 1
  }
}
```

Invalid categories or pagination values return `400` with an `error` message.

## Get one product

`GET /api/products/:slug`

Example: `GET /api/products/esp32`

Success response (`200`): `{ "data": { ...product } }`. Unknown slugs return `404` with `{ "error": "Product not found" }`.

## Search products

`GET /api/search?q=raspberry`

Success response (`200`):

```json
{
  "data": [],
  "query": "raspberry",
  "count": 1
}
```

Missing or blank `q` returns `400`. Search matches product name, tagline, short description, and category, case-insensitively.

## Current limitations

The catalog is bundled demo data, so API changes are not persisted. Cart state is stored in the browser, and checkout does not create a server-side order or process payment. Persistent inventory, carts, and orders require a database and a payment provider; no credentials are needed for the current read-only endpoints.
