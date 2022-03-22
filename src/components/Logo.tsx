import logo from "../assets/images/logo.svg";
import { LogoProps } from "../models/PropTypes";

const Logo = ({className}: LogoProps) => (
  <div id="logo" className={className}>
    <a href="/"><img src={logo} className="h-9" alt="YADEX | Yet Another DEX" /></a>
  </div>
);

export default Logo;
