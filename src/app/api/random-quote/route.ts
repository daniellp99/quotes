import getRandomQuote from "@/lib/getRandomQuote";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const quotes = await getRandomQuote();
  return NextResponse.json(quotes);
}
