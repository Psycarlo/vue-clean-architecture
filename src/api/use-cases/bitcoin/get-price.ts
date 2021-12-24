export default function makeGetPrice(bitcoinDA: BitcoinDA) {
  return async function getPrice() {
    return bitcoinDA.getBitcoinPrice();
  };
}
