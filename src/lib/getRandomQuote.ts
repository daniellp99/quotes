import { connect } from "@planetscale/database";
import { drizzle } from "drizzle-orm/planetscale-serverless";
import { eq } from "drizzle-orm";

import { config } from "@/db/schema/config";
import { authors, categories, quotes } from "@/db/schema/schema";
import getAllQuotes from "./getAllQuotes";

const prevQuoteObj = {
  prev: 1,
  setPrev: function (num: number) {
    this.prev = num;
  },
};

export default async function getRandomQuote(): Promise<Quote> {
  const quotes = await getAllQuotes();

  let randomIndex = prevQuoteObj.prev;

  while (randomIndex === prevQuoteObj.prev) {
    randomIndex = Math.floor(Math.random() * quotes.length);
  }

  prevQuoteObj.setPrev(randomIndex);

  return quotes[randomIndex];
}
