import { INetworkType } from "../models/Interfaces";
import ethereumIcon from "../assets/images/ethereum.svg";
import polygonIcon from "../assets/images/polygon.svg";
import optimismIcon from "../assets/images/optimism.svg";
import arbitrumIcon from "../assets/images/arbitrum.svg";

const networkTypes: INetworkType[] = [
  {
    name: "Ethereum", image: ethereumIcon, links: [
      { name: "Etherscan", url: "https://www.etherscan.io" }
    ]
  },
  {
    name: "Polygon", image: polygonIcon, links: [
      { name: "Polygonscan", url: "https://www.polygonscan.com" },
      { name: "Polygon Bridge", url: "" }
    ]
  },
  {
    name: "Optimism", image: optimismIcon, links: [
      { name: "Optimistic Gateway", url: "https://gateway.optimism.io/?chainId=1" },
      { name: "Optimistic Etherscan", url: "https://optimistic.etherscan.io/" },
      { name: "Help Center", url: "https://help.uniswap.org/en/collections/3137778-uniswap-on-optimistic-ethereum-o%CE%BE" },
    ]
  },
  {
    name: "Arbitrum", image: arbitrumIcon, links: [
      { name: "Arbitrum Bridge", url: "https://bridge.arbitrum.io/" },
      { name: "Arbiscan", url: "https://arbiscan.io/" },
      { name: "Help Center", url: "https://help.uniswap.org/en/collections/3137787-uniswap-on-arbitrum" },
    ]
  },
];

export default networkTypes;