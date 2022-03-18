import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import { LogoProps } from "../models/PropTypes";

const Logo = ({className}: LogoProps) => (
  <div id="logo" className={className}>
    <Link to="/"><img src={logo} className="h-9" alt="YADEX | Yet Another DEX" /></Link>
  </div>
);

export default Logo;
