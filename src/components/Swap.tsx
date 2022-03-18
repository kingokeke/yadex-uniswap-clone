import { FaArrowDown } from "react-icons/fa";
import SwapInputField from "./SwapInputField";
import ethereumIcon from "../assets/images/ethereum.svg";
import polygonIcon from "../assets/images/polygon.svg";
import { FiSettings } from "react-icons/fi";
import { useRecoilState } from "recoil";
import { currentRouteAtom } from "../store/atoms";
import { useEffect } from "react";

const Swap = () => {
  const [_, setCurrentRoute] = useRecoilState(currentRouteAtom);

  useEffect(() => {
    setCurrentRoute("swap");
  }, []);

  return (
    <div className="flex justify-center mt-20">
      <div className="p-2 bg-white rounded-2xl w-[480px] shadow-lg">
        <div className="flex justify-between items-center px-3 mt-2 mb-4">
          <p className="font-medium text-l">Swap</p>
          <FiSettings className="text-xl cursor-pointer" />
        </div>
        <SwapInputField token="ETH" icon={ethereumIcon} className="" />
        <div className="flex justify-center -mt-4 -mb-4">
          <div className="flex justify-center items-center w-9 h-9 bg-gray-100 border-white border-4 rounded-xl cursor-pointer z-20">
            <FaArrowDown/>
          </div>
        </div>
        <SwapInputField token="MATIC" icon={polygonIcon} className="" />
        <div className="">
          <button className="w-full flex justify-center bg-pink-100 hover:bg-pink-200 py-3 mt-2 rounded-2xl text-pink-500 font-medium text-lg">Connect Wallet</button>
        </div>
      </div>
    </div>
  );
};

export default Swap;