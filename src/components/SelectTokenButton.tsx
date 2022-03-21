import { BsChevronDown } from "react-icons/bs";
import { SelectTokenButtonProps } from "../models/PropTypes";
import TokenBadge from "./TokenBadge";

const SelectTokenButton = ({token, className, launchModal}: SelectTokenButtonProps) => {
  return (
    <button className={(className ? className + " " : "") + "h-10 mt-3 mr-4 flex items-center rounded-2xl px-3 py-2 font-medium shadow text-lg max-w-xs"} onClick={launchModal}>
      <span className="flex items-center">
        <TokenBadge token={ token }/>
        <BsChevronDown className="ml-2 pt-1" />
      </span>
    </button>
  );
};

export default SelectTokenButton;