// @ts-ignore
import { bitcoinDA } from "apiMode";
import makeGetPrice from "./get-price";

const getPrice = makeGetPrice(bitcoinDA);

const bitcoinService = Object.freeze({ getPrice });

export default bitcoinService;
export { getPrice };
