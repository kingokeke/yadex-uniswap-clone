import { BiLinkExternal } from "react-icons/bi";
import { NetworkSelectorListLinkProps } from "../../models/PropTypes";

const NetworkSelectorListLink = ({ link, activeNetwork, networkType }: NetworkSelectorListLinkProps) => {
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

export default NetworkSelectorListLink;
