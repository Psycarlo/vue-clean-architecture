import { defineStore } from "pinia";
import { getPrice } from "../api/use-cases/bitcoin";

export const useBitcoinStore = defineStore("bitcoin", {
  state: () => {
    return { price: 0 };
  },
  actions: {
    async fetchBitcoinPrice() {
      this.price = await getPrice();
    },
  },
});
