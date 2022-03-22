import { IToken } from "../models/Interfaces";

const frequentlySwappedTokens: IToken[] = [
  {
    address: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
    decimals: 18,
    logoURI: "https://tokens.1inch.io/0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.png",
    name: "Ethereum",
    symbol: "ETH"
  },
  {
    address: "0x6b175474e89094c44da98b954eedeac495271d0f",
    decimals: 18,
    eip2612: true,
    logoURI: "https://tokens.1inch.io/0x6b175474e89094c44da98b954eedeac495271d0f.png",
    name: "Dai Stablecoin",
    symbol: "DAI"
  },
  {
    address: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
    decimals: 6,
    logoURI: "https://tokens.1inch.io/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48.png",
    name: "USD Coin",
    symbol: "USDC"
  },
  {
    address: "0xdac17f958d2ee523a2206206994597c13d831ec7",
    decimals: 6,
    logoURI: "https://tokens.1inch.io/0xdac17f958d2ee523a2206206994597c13d831ec7.png",
    name: "Tether USD",
    symbol: "USDT"
  },
  {
    address: "0xa47c8bf37f92abed4a126bda807a7b7498661acd",
    decimals: 18,
    logoURI: "https://tokens.1inch.io/0xa47c8bf37f92abed4a126bda807a7b7498661acd.png",
    name: "Wrapped UST Token",
    symbol: "UST"
  },
  {
    address: "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
    decimals: 8,
    logoURI: "https://tokens.1inch.io/0x2260fac5e5542a773aa44fbcfedf7c193bc2c599.png",
    name: "Wrapped BTC",
    symbol: "WBTC"
  },
  {
    address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
    decimals: 18,
    logoURI: "https://tokens.1inch.io/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2.png",
    name: "Wrapped Ether",
    symbol: "WETH"
  }
];

export const nullToken: IToken = {
  address: "",
  decimals: 0,
  logoURI: "",
  name: "",
  symbol: ""
}

export default frequentlySwappedTokens;