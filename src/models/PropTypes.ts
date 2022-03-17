import { IMenuLink } from "./Interfaces";

export interface NavbarProps {
  links: IMenuLink[];
}

export interface NavMenuProps {
  links: IMenuLink[]
  className: string;
}

export interface LogoProps {
  className: string;
}