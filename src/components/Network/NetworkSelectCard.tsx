import networkTypes from "../../data/NetworkTypes";
import { INetworkType } from "../../models/Interfaces";
import { NetworkSelectCardProps } from "../../models/PropTypes";
import NetworkSelectItem from "./NetworkItem";

const NetworkSelectCard = ({
  isOpen,
  setIsOpen,
  activeNetwork,
  setActiveNetwork,
}: NetworkSelectCardProps) => {
  return (
    <div className={`${isOpen ? "block" : "hidden"} absolute pt-3 mx-1`}>
      <div className="bg-white rounded-2xl p-4">
        <p className="text-gray-600 mb-3">Select a network</p>
          {networkTypes.map((networkType: INetworkType) => (
            <NetworkSelectItem
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

export default NetworkSelectCard;
