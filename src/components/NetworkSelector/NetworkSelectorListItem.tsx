import { NetworkSelectorListLink } from ".";
import { ILink } from "../../models/Interfaces";
import { NetworkSelectorListItemProps } from "../../models/PropTypes";

const NetworkSelectorListItem = ({
  networkType,
  activeNetwork,
  setActiveNetwork,
  setIsOpen,
}: NetworkSelectorListItemProps) => (
    <div
      key={networkType.name}
      className={(activeNetwork === networkType.name ? "p-4 bg-gray-100 rounded-xl" + " ": "") + "py-2 my-2 cursor-pointer w-64 first:mt-0 last:mb-0"}
      onClick={() => { setActiveNetwork(networkType.name); setIsOpen(false); }}
    >
      <div className="font-medium flex justify-between items-center">
        <span>
          <img src={networkType.image} alt={networkType.name} className="inline-block h-5 mr-2"/>{networkType.name}
        </span>
        {activeNetwork === networkType.name && (
          <span className="bg-green-700 w-2 h-2 inline-block rounded-full mr-0.5"></span>
        )}
      </div>
      {networkType.links.length > 0 &&
        networkType.links.map((link: ILink) => (
          <NetworkSelectorListLink key={link.name} link={link} activeNetwork={activeNetwork} networkType={networkType}/>
        ))}
    </div>
  );

export default NetworkSelectorListItem;
