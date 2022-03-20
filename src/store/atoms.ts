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

export const currentSwapAtom = atom({
  key: "currentSwapAtom",
  default: {
    from: {
      name: tokens[0].name,
      symbol: tokens[0].symbol,
      icon: tokens[0].icon,
    },
    to: {
      name: "",
      symbol: "",
      icon: "",
    },
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