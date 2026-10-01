import { NextResponse } from "next/server";
import { searchProducts } from "@/lib/products";

export function GET(request: Request) {
  const query = new URL(request.url).searchParams.get("q")?.trim() ?? "";

  if (!query) {
    return NextResponse.json(
      { error: "q is required and cannot be empty" },
      { status: 400 }
    );
  }

  const results = searchProducts(query);

  return NextResponse.json({
    data: results,
    query,
    count: results.length,
  });
}