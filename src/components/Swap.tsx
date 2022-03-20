import { FaArrowDown } from "react-icons/fa";
import SwapInputField from "./SwapInputField";
import { useRecoilState } from "recoil";
import { currentRouteAtom, tokenSwapFromAtom, tokenSwapToAtom, walletConnectedAtom } from "../store/atoms";
import { useEffect } from "react";
import SwapSettings from "./SwapSettings";

const Swap = () => {
  const [_, setCurrentRoute] = useRecoilState(currentRouteAtom);
  const [walletConnected, setWalletConnected] = useRecoilState(walletConnectedAtom);
  const [tokenSwapFrom, setTokenSwapFrom] = useRecoilState(tokenSwapFromAtom);
  const [tokenSwapTo, setTokenSwapTo] = useRecoilState(tokenSwapToAtom);

  const swapButtonText = (
    !walletConnected ? "Connect Wallet" : "Swap"
  );

  const switchTokens = () => {
    const temp = tokenSwapFrom;
    setTokenSwapFrom(tokenSwapTo);
    setTokenSwapTo(temp);
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
        <SwapInputField token={tokenSwapFrom} className="" />
        <div className="flex justify-center -mt-4 -mb-4">
          <div className="flex justify-center items-center w-9 h-9 bg-gray-100 border-white border-4 rounded-xl cursor-pointer z-10" onClick={switchTokens}>
            <FaArrowDown />
          </div>
        </div>
        <SwapInputField token={tokenSwapTo} className="" />
        <div className="">
          <button className="w-full flex justify-center bg-pink-100 hover:bg-pink-200 py-3 mt-2 rounded-2xl text-pink-500 font-medium text-lg">{swapButtonText}</button>
        </div>
      </div>
    </div>
  );
};

export default Swap;