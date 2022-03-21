import { NavbarProps } from "../../models/PropTypes";
import ConnectWallet from "../ConnectWallet";
import Logo from "../Logo";
import NavbarExtras from "../NavbarExtras";
import NavMenu from "../NavMenu";
import NetworkSelector from "../NetworkSelector";

const Navbar = ({ className }: NavbarProps) => (
  <nav className={(className ? className + " " : "") + "flex justify-between items-center pt-3 mx-4"}>
    <Logo className="flex basis-1/3" />
    <NavMenu className="flex justify-center basis-1/3" />
    <div className="flex justify-end basis-1/3">
      <NetworkSelector className="" />
      <ConnectWallet className="" />
      <NavbarExtras className="" />
    </div>
  </nav>
);

export default Navbar;
