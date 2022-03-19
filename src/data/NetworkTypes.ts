import { INetworkType } from "../models/Interfaces";
import icons from "../assets/images/icons";

const networkTypes: INetworkType[] = [
  {
    name: "Ethereum", image: icons.ethereum, links: [
      { name: "Etherscan", url: "https://www.etherscan.io" }
    ]
  },
  {
    name: "Polygon", image: icons.polygon, links: [
      { name: "Polygon Bridge", url: "https://wallet.polygon.technology/bridge" },
      { name: "Polygonscan", url: "https://www.polygonscan.com" },
    ]
  },
  {
    name: "Optimism", image: icons.optimism, links: [
      { name: "Optimistic Gateway", url: "https://gateway.optimism.io/?chainId=1" },
      { name: "Optimistic Etherscan", url: "https://optimistic.etherscan.io/" },
      { name: "Help Center", url: "https://help.uniswap.org/en/collections/3137778-uniswap-on-optimistic-ethereum-o%CE%BE" },
    ]
  },
  {
    name: "Arbitrum", image: icons.arbitrum, links: [
      { name: "Arbitrum Bridge", url: "https://bridge.arbitrum.io/" },
      { name: "Arbiscan", url: "https://arbiscan.io/" },
      { name: "Help Center", url: "https://help.uniswap.org/en/collections/3137787-uniswap-on-arbitrum" },
    ]
  },
];

export default networkTypes;