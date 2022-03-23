import { useEffect } from "react";
import { FaArrowDown } from "react-icons/fa";
import { useRecoilState } from "recoil";
import { IToken } from "../models/Interfaces";
import { currentRouteAtom, currentSwapAtom, userAccountAtom } from "../store/atoms";
import SwapInputField from "../components/SwapInputField";
import SwapSettings from "../components/SwapSettings";

const Swap = () => {
  const [_, setCurrentRoute] = useRecoilState(currentRouteAtom);
  const [userAccount, __] = useRecoilState(userAccountAtom);
  const [currentSwap, setCurrentSwap] = useRecoilState(currentSwapAtom);

  const switchTokens = () => {
    const temp = currentSwap.from;
    setCurrentSwap({ ...currentSwap, from: currentSwap.to, to: temp });
  };

  useEffect(() => {
    setCurrentRoute("swap");
  }, []);

  const setInputFieldValue = (token: IToken, direction: "from" | "to", amount: number): void => {
    if (direction === "from") {
      setCurrentSwap({ ...currentSwap, from: token, amount });
    } else {
      setCurrentSwap({ ...currentSwap, to: token, amount });
    }
  };

  return (
    <div className="flex justify-center mt-20">
      <div className="p-2 bg-white rounded-2xl shadow-lg">
        <div className="flex justify-between items-center px-3 mt-2 mb-4">
          <p className="font-medium text-l">Swap</p>
          <SwapSettings />
        </div>
        <SwapInputField token={currentSwap.from} className="" />
        <div className="flex justify-center -mt-4 -mb-4">
          <div className="flex justify-center items-center w-9 h-9 bg-gray-100 border-white border-4 rounded-xl cursor-pointer z-10" onClick={switchTokens}>
            <FaArrowDown />
          </div>
        </div>
        <SwapInputField token={currentSwap.to} className="" />
        <div className="">
          <button className="w-full flex justify-center bg-pink-100 hover:bg-pink-200 py-3 mt-2 rounded-2xl text-pink-500 font-medium text-lg">{userAccount.connected ? "Swap" : "Connect Wallet"}</button>
        </div>
      </div>
    </div>
  );
};

export default Swap;