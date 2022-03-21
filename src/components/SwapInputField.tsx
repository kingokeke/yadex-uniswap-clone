import { useState } from "react";
import { SwapInputFieldProps } from "../models/PropTypes";
import SelectTokenButton from "./SelectTokenButton";
import SelectTokenModal from "./SelectTokenModal";

const SwapInputField = ({ className, token }: SwapInputFieldProps) => {
  const [showModal, setShowModal] = useState(false)
  return (
    <div className={(className ? className + " " : "") + "bg-gray-100 rounded-2xl border border-solid border-white hover:border-gray-400 flex justify-between"}>
      <input type="text" className="bg-transparent px-4 pt-4 pb-8  w-72 text-3xl font-medium rounded-2xl focus-visible:outline-none" placeholder="0.0" />
      <SelectTokenButton token={token.symbol ? token : { name: "", symbol: "Select a token", icon: "" }} className={token.symbol ? "bg-gray-50" : "bg-pink-600 text-white"} launchModal={() => setShowModal(true)} />
      <SelectTokenModal className={showModal ? "block" : "hidden"} closeModal={() => setShowModal(false)}/>
    </div>
  );
};

export default SwapInputField;