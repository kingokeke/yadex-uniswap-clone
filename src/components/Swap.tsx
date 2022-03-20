import { FaArrowDown } from "react-icons/fa";
import SwapInputField from "./SwapInputField";
import { useRecoilState } from "recoil";
import { currentRouteAtom, walletConnectedAtom, currentSwapAtom } from "../store/atoms";
import { useEffect } from "react";
import SwapSettings from "./SwapSettings";
import { json } from "stream/consumers";

const Swap = () => {
  const [_, setCurrentRoute] = useRecoilState(currentRouteAtom);
  const [walletConnected, setWalletConnected] = useRecoilState(walletConnectedAtom);
  const [currentSwap, setCurrentSwap] = useRecoilState(currentSwapAtom);

  const swapButtonText = (
    !walletConnected ? "Connect Wallet" : "Swap"
  );

  const switchTokens = () => {
    const temp = currentSwap.from;
    setCurrentSwap({...currentSwap, from: currentSwap.to, to: temp});
  };

  useEffect(() => {
    setCurrentRoute("swap");
  }, []);

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
          <button className="w-full flex justify-center bg-pink-100 hover:bg-pink-200 py-3 mt-2 rounded-2xl text-pink-500 font-medium text-lg">{swapButtonText}</button>
        </div>
      </div>
    </div>
  );
};

export default Swap;