import { SwapInputFieldProps } from "../models/PropTypes";
import SelectTokenButton from "./SelectTokenButton";

const SwapInputField = ({ className, token }: SwapInputFieldProps) => {
  return (
    <div className={(className ? className + " " : "") + "bg-gray-100 rounded-2xl border border-solid border-white hover:border-gray-400 flex justify-between"}>
      <input type="text" className="bg-transparent px-4 pt-4 pb-8  w-72 text-3xl font-medium rounded-2xl focus-visible:outline-none" placeholder="0.0" />
      {token.symbol ?
        <SelectTokenButton token={token} className="bg-gray-50" /> :
        <SelectTokenButton token={{ name: "", symbol: "Select a token", icon: "" }} className="bg-pink-600 text-white" />
      }
    </div>
  );
};

export default SwapInputField;