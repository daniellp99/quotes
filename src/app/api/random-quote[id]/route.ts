import getRandomQuote from "@/lib/getRandomQuote";
import { NextResponse } from "next/server";

// Choosing edge to avoid a Cold Boot Duration
export const runtime = "edge"; // 'nodejs' (default) | 'edge'

type Props = {
  params: {
    id: string;
  };
};

export async function GET(request: Request, { params: { id } }: Props) {
  const quote = await getRandomQuote(id);

  return NextResponse.json(quote);
}
