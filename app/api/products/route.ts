import { NextResponse } from "next/server";
import { categories, getProductsByCategory, products } from "@/lib/products";

function parseInteger(value: string | null, fallback: number): number {
  if (value === null) return fallback;
  const parsed = Number(value);
  return Number.isSafeInteger(parsed) ? parsed : Number.NaN;
}

export function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");
  const limit = parseInteger(searchParams.get("limit"), 20);
  const offset = parseInteger(searchParams.get("offset"), 0);

  if (
    category &&
    category !== "all" &&
    !categories.some((item) => item.slug === category)
  ) {
    return NextResponse.json(
      { error: `Unknown category: ${category}` },
      { status: 400 }
    );
  }

  if (!Number.isSafeInteger(limit) || limit < 1 || limit > 100) {
    return NextResponse.json(
      { error: "limit must be an integer between 1 and 100" },
      { status: 400 }
    );
  }

  if (!Number.isSafeInteger(offset) || offset < 0) {
    return NextResponse.json(
      { error: "offset must be a non-negative integer" },
      { status: 400 }
    );
  }

  const filteredProducts = category
    ? getProductsByCategory(category)
    : products;

  return NextResponse.json({
    data: filteredProducts.slice(offset, offset + limit),
    pagination: {
      limit,
      offset,
      count: Math.min(limit, Math.max(filteredProducts.length - offset, 0)),
      total: filteredProducts.length,
    },
  });
}