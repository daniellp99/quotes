import getAllQuotes from "@/lib/getAllQuotes";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const quotes = await getAllQuotes();
  return NextResponse.json(quotes);
}
