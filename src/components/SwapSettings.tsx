import { ChangeEvent, useRef, useState } from "react";
import { FiSettings } from "react-icons/fi";
import { useRecoilState } from "recoil";
import { SwapSettingsProps } from "../models/PropTypes";
import { swapSettingsAtom } from "../store/atoms";
import Toggle from "./Toggle";

const SwapSettings = ({ className }: SwapSettingsProps) => {
  const [showSettings, setShowSettings] = useState(false);
  const [settings, setSettings] = useRecoilState(swapSettingsAtom);
  const { slippageTolerance, transactionDeadline, autoRouterApi, expertMode } = settings;

  const setSlippageTolerance = (event: ChangeEvent<HTMLInputElement>) => {
    setSettings({ ...settings, slippageTolerance });
  };

  return (
    <div className={(className ? className + " " : "") + "flex flex-col items-end"}>
      <FiSettings className="text-xl cursor-pointer focus-visible:outline-none" onClick={() => { setShowSettings(!showSettings); } } />
      <div className={`${showSettings ? "block" : "hidden"} absolute mt-8 p-4 z-20 bg-gray-100 text-gray-500 rounded-lg border border-gray-300 shadow-lg w-80`}>
        <p className="font-medium text-gray-600 mb-2 text-sm">Transaction Settings</p>
        <p className="mt-2 mb-1 text-sm">Slippage Tolerance</p>
        <div className="my-1 flex">
          <button className="mr-2 px-3 py-1 tracking-wide bg-pink-600 text-white rounded-full" onClick={() => setSettings({ ...settings, slippageTolerance: 0.1 })}>Auto</button>
          <div className="flex items-center bg-white px-4 rounded-full border border-gray-300">
            <input type="text" inputMode="numeric" className="w-full border-0 text-right mr-1 focus-visible:outline-none" onChange={setSlippageTolerance}/>
            <span className="">%</span>
          </div>
        </div>
        <p className="mt-2 mb-1 text-sm">Transaction deadline</p>
        <div className="flex my-1 items-center text-gray-900">
          <input type="text" className="mr-2 w-16 rounded-full py-1 px-3 border border-gray-300 text-right focus-visible:outline-none" value={`${transactionDeadline}`} onChange={(event: ChangeEvent<HTMLInputElement>) => setSettings({ ...settings, transactionDeadline: Number(event.target.value) })} />
          <span className="text-sm">minutes</span>
        </div>
        <hr className="my-4" />
        <p className="font-medium text-gray-600 mb-2 text-sm">Interface Settings</p>
        <div className="flex items-center justify-between my-1">
          <p className="text-sm">Auto Router API</p>
          <Toggle titleOff="" titleOn="" isToggled={autoRouterApi} setToggled={(autoRouterApi) => setSettings({ ...settings, autoRouterApi })} />
        </div>
        <div className="flex items-center justify-between my-1">
          <p className="text-sm">Expert Mode</p>
          <Toggle titleOff="" titleOn="" isToggled={expertMode} setToggled={(expertMode) => setSettings({ ...settings, expertMode })} />
        </div>
      </div>
    </div>
  );
};

export default SwapSettings;