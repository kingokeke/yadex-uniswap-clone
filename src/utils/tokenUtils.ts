import { IToken } from "../models/Interfaces";
import { MORALIS_CHAIN } from "../models/Moralis/core";
import { IGetSupportedTokensDTO } from "../models/Moralis/dex-plugin";
import { getSupportedTokens } from "./moralis-dex-plugin";

export const fetchTokens = async (): Promise<IToken[]> => {
  const requestBody: IGetSupportedTokensDTO = { chain: MORALIS_CHAIN.ETH };
  const { tokens } = await getSupportedTokens(requestBody);
  return Object.values<IToken>(tokens).sort((a: IToken, b: IToken) => sortTokens(a, b));
};

export const sortTokens = (a: IToken, b: IToken): number => {
  if (a.symbol < b.symbol) return -1;
  if (a.symbol > b.symbol) return 1;
  return 0;
};
