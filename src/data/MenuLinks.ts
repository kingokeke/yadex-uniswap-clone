import { IMenuLink } from "../models/Interfaces";

const navMenuLinks: IMenuLink[] = [
  { name: "Swap", url: "swap", isExternal: false },
  { name: "Pool", url: "pool", isExternal: false },
  { name: "Vote", url: "vote", isExternal: false },
  { name: "Charts", url: "https://info.uniswap.org/#/", isExternal: true },
];

export default navMenuLinks;