import { atom } from "recoil";
import tokens, { nullToken } from "../data/frequentlySwappedTokens";

export const infuraKeyAtom = atom({
  key: "infuraKeyAtom",
  default: "e85845b198df4a2fb25e9aafd07cc2d8"
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

export const userAccountAtom = atom({
  key: "userAccountAtom",
  default: {
    connected: false,
    address: "",
    balance: 10
  },
});

export const currentSwapAtom = atom({
  key: "currentSwapAtom",
  default: {
    from: tokens[0],
    to: nullToken,
    amount: 0,
    gasPrice: 0,
    gasLimit: 0,
    total: 0,
    status: "",
  },
});

export const swapSettingsAtom = atom({
  key: "swapSettingsAtom",
  default: {
    slippageTolerance: 0.1,
    transactionDeadline: 30,
    autoRouterApi: true,
    expertMode: false
  }
});

export const tokensListAtom = atom({
  key: "tokensListAtom",
  default: [],
});
