// Simulate fetching market data
export async function fetchMarketData(symbol) {
  // Here, you would fetch real market data. For simplicity, return a mock object.
  return {
    symbol: symbol,
    price: Math.random() * 100, // Mock price
  };
}
