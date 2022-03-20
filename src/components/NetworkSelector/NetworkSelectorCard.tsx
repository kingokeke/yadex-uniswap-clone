import { NetworkSelectorListItem } from ".";
import networkTypes from "../../data/NetworkTypes";
import { INetworkType } from "../../models/Interfaces";
import { NetworkSelectorCardProps } from "../../models/PropTypes";

const NetworkSelectorCard = ({
  isOpen,
  setIsOpen,
  activeNetwork,
  setActiveNetwork,
}: NetworkSelectorCardProps) => {
  return (
    <div className={`${isOpen ? "block" : "hidden"} absolute pt-3 mx-1`}>
      <div className="bg-white rounded-2xl p-4 shadow-lg z-10">
        <p className="text-gray-600 mb-3">Select a network</p>
          {networkTypes.map((networkType: INetworkType) => (
            <NetworkSelectorListItem
              key={networkType.name}
              networkType={networkType}
              activeNetwork={activeNetwork}
              setActiveNetwork={setActiveNetwork}
              setIsOpen={setIsOpen}
            />
          ))}
      </div>
    </div>
  );
};

export default NetworkSelectorCard;
