# Data Model and Persistence

## Current implementation

There is no database connection, Mongoose model, or persistent backend schema in this project. The TypeScript domain definitions are in `lib/types.ts`, and the sample catalog is in `lib/products.ts`.

| Type | Current source/use |
| --- | --- |
| `Product` | Static catalog data. Includes slug, price, stock, category, specs, local image paths, ratings, and related product slugs. |
| `Category` | Static category definitions with slug, title, description, and local image path. |
| `CartItem` | Zustand cart state, persisted in browser `localStorage` under `echo-cart`. |
| `Order` | Client-side order shape. Checkout stores instances in browser `sessionStorage` under `order-<orderNumber>`. |

The REST routes return the current in-process product data. They do not read or write a database. Cart, checkout, and contact form submissions are not backed by server endpoints.

## Persistence behavior

- Cart contents survive reloads in the same browser profile through Zustand persistence.
- Demo order confirmation works only while its `sessionStorage` entry remains available in that browser tab/session.
- Product edits made to the TypeScript catalog require a code change and redeployment.
- Contact form submissions are logged in the browser console and are not retained.

## Suggested future entities

When adding a database, model these independently and enforce relationships and constraints in the data layer:

- **Product:** ID, unique slug, title, descriptions, price in minor currency units, stock, category ID, image paths, specs, rating metadata, and related product IDs.
- **Category:** ID, unique slug, title, description, and image path.
- **Customer:** ID and verified account/contact details; never store plaintext credentials.
- **Order:** ID, unique public order number, customer reference where applicable, immutable line-item snapshots, totals, shipping address snapshot, payment-provider reference, status, and timestamps.
- **Inventory event:** product reference, quantity delta, reason, and timestamp for auditable stock changes.

This future model is a proposal only. No database package, schema migration, or server-side order flow is configured.
