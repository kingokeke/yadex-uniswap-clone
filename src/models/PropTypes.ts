import { SWAP_DIRECTION } from "./Enums";
import { ILink, INetworkType, ISwapTokenParams, IToken } from "./Interfaces";

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
export interface TokenBadgeProps extends BaseProps {
  token: IToken;
}
export interface TokenListingProps extends BaseProps {
  token: IToken;
}

export interface ModalContainerProps extends BaseProps {
  width?: string;
 }

export interface ModalHeaderProps extends BaseProps {
  title: string;
  closeModal: () => void;
}

export interface ModalBodyProps extends BaseProps { }

export interface ModalFooterProps extends BaseProps { }

export interface SelectTokenModalProps extends BaseProps {
  direction: SWAP_DIRECTION;
  selectToken: (params: ISwapTokenParams) => void;
  closeModal: () => void;
}

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
  launchModal: () => void;
}

export interface SwapInputFieldProps extends BaseProps {
  token: IToken;
  direction: SWAP_DIRECTION;
  setSwapParams: (params: ISwapTokenParams) => void;
}

export interface SwapSettingsProps extends BaseProps {}

export interface ToggleProps extends BaseProps {
  isToggled: boolean;
  setToggled: (isToggled: boolean) => void;
  titleOn: string;
  titleOff: string;
}