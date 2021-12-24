export default function makeBitcoinDA() {
  function getBitcoinPrice(): number {
    const randomPrice = Math.floor(Math.random() * 100_000) + 1;
    return randomPrice;
  }

  return Object.freeze({ getBitcoinPrice });
}
