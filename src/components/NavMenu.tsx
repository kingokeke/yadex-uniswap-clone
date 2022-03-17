import { useState } from "react";
import { NavMenuProps } from "../models/PropTypes";
import links from '../data/MenuLinks';
import { IMenuLink } from "../models/Interfaces";

const NavMenu = ({ className }: NavMenuProps) => {
  const [currentRoute] = useState("swap"); // Temporary value.

  return (
    <div id="menu" className={className}>
      <ul className="flex bg-white rounded-2xl w-fit">
        {links.map((link: IMenuLink) => (
          <li key={link.name} className={`${currentRoute === link.url ? "bg-gray-100 font-bold rounded-xl" : null} m-1`}>
            <a className="px-4 py-1 inline-block" href={link.url}>{link.name}<sup className={`${link.isExternal ? "inline-block" : "hidden"}`}>↗</sup></a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavMenu;