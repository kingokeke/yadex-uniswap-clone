import { useState } from "react";
import { NetworkSelectProps } from "../../models/PropTypes";
import NetworkSelectButton from "./NetworkSelectButton";
import NetworkSelectCard from "./NetworkSelectCard";

const NetworkSelector = ({className}: NetworkSelectProps) => {
  const hoverDelay = 100;
  const [isOpen, setIsOpen] = useState(false);
  const [activeNetwork, setActiveNetwork] = useState("Ethereum");

  return (
    <div className={className} onMouseLeave={() => setTimeout(() => setIsOpen(false), hoverDelay)}>
      <NetworkSelectButton activeNetwork={activeNetwork} setIsOpen={setIsOpen} delay={hoverDelay}/>
      <NetworkSelectCard isOpen={isOpen} activeNetwork={activeNetwork} setActiveNetwork={setActiveNetwork} setIsOpen={setIsOpen} />
    </div>
  );
};

export default NetworkSelector;
