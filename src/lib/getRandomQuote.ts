import getAllQuotes from "./getAllQuotes";

export default async function getRandomQuote(id: string): Promise<Quote> {
  const prevQuoteId = parseInt(id);

  const quotes: Quote[] = await getAllQuotes();

  const ids: number[] = quotes.map((q) => q.id);

  let randomId = prevQuoteId;

  while (randomId === prevQuoteId) {
    const randomIndex = Math.floor(Math.random() * ids.length);
    randomId = ids[randomIndex];
  }

  const newQuote = quotes.find((q) => q.id === randomId) as Quote;

  return newQuote;
}
