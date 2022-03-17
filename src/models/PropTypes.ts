import { IMenuLink } from "./Interfaces";

interface BaseProps {
  children?: React.ReactNode;
  className?: string;
}

export interface NavbarProps extends BaseProps {
  links: IMenuLink[];
}

export interface NavMenuProps extends BaseProps {
  links: IMenuLink[]
}

export interface LogoProps extends BaseProps {
}

export interface NetworkSelectProps extends BaseProps {
}
