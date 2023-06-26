import { connect } from "@planetscale/database";
import { drizzle } from "drizzle-orm/planetscale-serverless";
import { eq } from "drizzle-orm";

import { config } from "@/db/schema/config";
import { authors, categories, quotes } from "@/db/schema/schema";

export default async function getAllQuotes(): Promise<Quote[]> {
  const conn = connect(config);
  const db = drizzle(conn);

  const result: Quote[] = await db
    .select({
      id: quotes.id,
      author: authors.author,
      category: categories.category,
      quote: quotes.quote,
    })
    .from(quotes)
    .innerJoin(authors, eq(quotes.authorId, authors.id))
    .innerJoin(categories, eq(quotes.categoryId, categories.id));

  return result;
}
