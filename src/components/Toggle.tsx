import { ToggleProps } from "../models/PropTypes";

const Toggle = ({ className, titleOn, titleOff, isToggled, setToggled }: ToggleProps) => {
  return (
    <div className={(className ? className + " " : "") + "inline-flex p-0.5 bg-white rounded-lg cursor-pointer font-medium border border-gray-300"}>
      <p className={`${isToggled ? "bg-pink-600 hover:bg-pink-500 text-white" : "bg-white"} px-4 py-0.5 text-sm rounded-md`} onClick={() => setToggled(true)}>{ titleOn || "On" }</p>
      <p className={`${isToggled ? "bg-white" : "bg-gray-500 hover:bg-gray-700 text-white"} px-4 py-0.5 my-0 text-sm rounded-md`} onClick={() => setToggled(false)}>{ titleOff || "Off" }</p>
    </div>
  )
};

export default Toggle;