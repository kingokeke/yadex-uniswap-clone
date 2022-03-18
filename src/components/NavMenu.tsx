import { useState } from "react";
import { NavMenuProps } from "../models/PropTypes";
import links from '../data/MenuLinks';
import { IMenuLink } from "../models/Interfaces";
import { Link } from "react-router-dom";

const NavMenu = ({ className }: NavMenuProps) => {
  const [currentRoute] = useState("swap"); // Temporary value.

  return (
    <div id="menu" className={className}>
      <ul className="flex bg-white rounded-2xl w-fit">
        {links.map((link: IMenuLink) => (
            {link.isExternal ?
              <a href={link.url} className="px-4 py-1 inline-block" target="_blank">{link.name}<sup className={`${link.isExternal ? "inline-block" : "hidden"}`}>↗</sup></a> :
              <Link to={link.url} className="px-4 py-1 inline-block">{link.name}</Link>
            }
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavMenu;