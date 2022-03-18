import { BsChevronDown } from "react-icons/bs";
import { SelectTokenButtonProps } from "../models/PropTypes";

const SelectTokenButton = ({token, icon, className}: SelectTokenButtonProps) => {
  return (
    <button className={`${className} h-10 mt-3 mr-4 flex items-center rounded-2xl px-3 py-2 font-medium shadow`}>
      <span className="flex items-center">
        {icon && <img src={icon} alt={token} className="h-5 mr-2" />}
        {token}
        <BsChevronDown className="ml-2 pt-1" />
      </span>
    </button>
  );
};

export default SelectTokenButton;