import { SwapInputFieldProps } from "../models/PropTypes";
import SelectTokenButton from "./SelectTokenButton";

const SwapInputField = ({ className, token, icon }: SwapInputFieldProps) => {
  return (
    <div className={`${className} bg-gray-100 rounded-2xl border border-solid border-white hover:border-gray-400 flex justify-between`}>
      <input type="text" className="bg-transparent px-4 pt-4 pb-8 text-3xl font-medium rounded-2xl w-80 focus-visible:outline-none" placeholder="0.0" />
      {token ?
        <SelectTokenButton token={token} icon={icon} className="bg-gray-50" /> :
        <SelectTokenButton token="Select a token" icon="" className="bg-pink-600 text-white" />
      }
    </div>
  );
};

export default SwapInputField;