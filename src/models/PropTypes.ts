import { ILink, INetworkType, IToken } from "./Interfaces";

interface BaseProps {
  children?: React.ReactNode;
  className?: string;
}

export interface NavbarProps extends BaseProps {}

export interface NavMenuProps extends BaseProps {}

export interface LogoProps extends BaseProps {}

export interface NetworkSelectorProps extends BaseProps {}

export interface ConnectWalletProps extends BaseProps {}

export interface NavbarExtrasProps extends BaseProps { }

export interface NetworkSelectorCardProps extends BaseProps {
  isOpen: boolean;
  activeNetwork: string;
  setIsOpen: (isOpen: boolean) => void;
  setActiveNetwork: (network: string) => void;
}

export interface NetworkSelectorListItemProps extends BaseProps {
  networkType: INetworkType;
  activeNetwork: string;
  setIsOpen: (isOpen: boolean) => void;
  setActiveNetwork: (network: string) => void;
}

export interface NetworkSelectorListLinkProps extends BaseProps {
  link: ILink;
  networkType: INetworkType;
  activeNetwork: string;
}

export interface NetworkSelectorButtonProps extends BaseProps {
  delay: number;
  activeNetwork: string;
  setIsOpen: (isOpen: boolean) => void;
}

export interface SelectTokenButtonProps extends BaseProps {
  token: IToken;
}

export interface SwapInputFieldProps extends BaseProps {
  token: IToken;
}
