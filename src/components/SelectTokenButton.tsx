import { BsChevronDown } from "react-icons/bs";
import { SelectTokenButtonProps } from "../models/PropTypes";

const SelectTokenButton = ({token, className}: SelectTokenButtonProps) => {
  return (
    <button className={(className ? className + " " : "") + "h-10 mt-3 mr-4 flex items-center rounded-2xl px-3 py-2 font-medium shadow text-lg max-w-xs"} onClick={launchModal}>
      <span className="flex items-center">
        {token.icon && <img src={token.icon} alt={token.name} className="h-5 mr-2" />}
        {token.symbol}
        <BsChevronDown className="ml-2 pt-1" />
      </span>
    </button>
  );
};

export default SelectTokenButton;