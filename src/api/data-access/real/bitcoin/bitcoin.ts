import axios from "axios";

export default function makeBitcoinDA() {
  async function getBitcoinPrice(): Promise<number> {
    try {
      const result = await axios.get(
        "https://api.blockchain.com/v3/exchange/tickers/BTC-USD"
      );
      return result.data.last_trade_price;
    } catch (e) {
      throw new Error("Error fetching bitcoin price");
    }
  }

  return Object.freeze({ getBitcoinPrice });
}
