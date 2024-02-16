import { fetchMarketData } from "./marketData.js";
import { executeTrade } from "./tradeExecution.js";

async function main() {
  const symbol = "AAPL";
  const marketData = await fetchMarketData(symbol);

  console.log(`Current price of ${symbol} is ${marketData.price}`);

  // Example trading logic
  if (marketData.price < 50) {
    const tradeResult = await executeTrade({
      symbol: symbol,
      quantity: 10,
      tradeType: "buy",
    });
    console.log(`Trade executed: `, tradeResult);
  } else {
    console.log("Market price too high, not executing trade.");
  }
}

main().catch(console.error);
console.log("hey");
