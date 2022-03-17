import { useState } from "react";
import { NetworkSelectorButton, NetworkSelectorCard } from ".";
import { NetworkSelectorProps } from "../../models/PropTypes";

const NetworkSelector = ({className}: NetworkSelectorProps) => {
  const hoverDelay = 100;
  const [isOpen, setIsOpen] = useState(false);
  const [activeNetwork, setActiveNetwork] = useState("Ethereum");

  return (
    <div className={className} onMouseLeave={() => setTimeout(() => setIsOpen(false), hoverDelay)}>
      <NetworkSelectorButton activeNetwork={activeNetwork} setIsOpen={setIsOpen} delay={hoverDelay}/>
      <NetworkSelectorCard isOpen={isOpen} activeNetwork={activeNetwork} setActiveNetwork={setActiveNetwork} setIsOpen={setIsOpen} />
    </div>
  );
};

export default NetworkSelector;
