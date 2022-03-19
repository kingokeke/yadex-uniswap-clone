export interface ILink {
  name: string;
  url: string;
}

export interface IMenuLink extends ILink {
  isExternal: boolean;
}

export interface INetworkType {
  name: string;
  image: string;
  links: ILink[];
}

export interface IToken {
  name: string;
  symbol: string;
  icon: string;
}