import { ToggleProps } from "../models/PropTypes";

const Toggle = ({ className, titleOn, titleOff, isToggled, setToggled }: ToggleProps) => {
  return (
    <div className={(className ? className + " " : "") + "inline-flex p-0.5 bg-white rounded-lg cursor-pointer font-medium border border-gray-300"}>
    </div>
  )
};

export default Toggle;