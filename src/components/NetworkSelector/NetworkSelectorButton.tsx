import { BsChevronDown } from "react-icons/bs";
import networkTypes from "../../data/NetworkTypes";
import { INetworkType } from "../../models/Interfaces";
import { NetworkSelectorButtonProps } from "../../models/PropTypes";

const NetworkSelectorButton = ({
  activeNetwork,
  setIsOpen,
  delay,
}: NetworkSelectorButtonProps) => (
  <button
    className="flex items-center bg-white rounded-2xl px-3 py-2 mx-1 font-medium"
    onMouseEnter={() => setTimeout(() => setIsOpen(true), delay)}
  >
    {networkTypes
      .filter((network: INetworkType) => network.name === activeNetwork)
      .map((network: INetworkType) => (
        <span key={network.name} className="flex items-center">
          <img src={network.image} alt={network.name} className="h-5 mr-2" />
          {network.name}
          <BsChevronDown className="ml-2 pt-1" />
        </span>
      ))}
  </button>
);

export default NetworkSelectorButton;
