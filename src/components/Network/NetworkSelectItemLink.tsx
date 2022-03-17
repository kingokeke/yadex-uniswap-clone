import { BiLinkExternal } from "react-icons/bi";
import { NetworkItemLinkProps } from "../../models/PropTypes";

const NetworkSelectItemLink = ({ link, activeNetwork, networkType }: NetworkItemLinkProps) => {
  return (
    <a
      href={link.url}
      target="_blank"
      className={`${activeNetwork === networkType.name ? "flex" : "hidden"} hover:underline text-gray-500 text-sm mt-2 tracking-wide flex justify-between items-center`}
    >
      <span>{link.name}</span>
      <span>
        <BiLinkExternal className="" />
      </span>
    </a>
  );
};

export default NetworkSelectItemLink;
