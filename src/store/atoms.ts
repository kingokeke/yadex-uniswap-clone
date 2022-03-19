import { atom } from "recoil";
import tokens from "../data/tokens";

export const ropstenUrlAtom = atom({
  key: "ropstenUrlAtom",
  default: "https://ropsten.infura.io/v3/e85845b198df4a2fb25e9aafd07cc2d8",
});

export const blockHeightAtom = atom({
  key: "blockHeightAtom",
  default: 0,
});

export const gasPriceAtom = atom({
  key: "gasPriceAtom",
  default: 0,
});

export const currentRouteAtom = atom({
  key: "currentRouteAtom",
  default: "",
});

export const walletConnectedAtom = atom({
  key: "walletConnectedAtom",
  default: false,
});

export const tokenSwapFromAtom = atom({
  key: "tokenSwapFromAtom",
  default: tokens[0],
});

export const tokenSwapToAtom = atom({
  key: "tokenSwapToAtom",
  // default: tokens[1],
  default: {
    name: "",
    symbol: "",
    icon: "",
  },
});