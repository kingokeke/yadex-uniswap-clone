import { atom } from "recoil";

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