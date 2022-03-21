import { FaEllipsisH } from "react-icons/fa";
import { NavbarExtrasProps } from "../models/PropTypes";

const NavbarExtras = ({ className}: NavbarExtrasProps) => (
  <button className={(className ? className + " " : "") + "p-2 bg-white px-4 py-2 ml-1 rounded-2xl"}><FaEllipsisH /></button>
);

export default NavbarExtras;