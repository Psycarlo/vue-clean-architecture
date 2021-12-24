export default function buildMakeBitcoin() {
  return function makeBitcoin(price: number) {
    if (!price) {
      throw new Error("Price is required");
    }

    return Object.freeze({ getPrice: () => price });
  };
}
