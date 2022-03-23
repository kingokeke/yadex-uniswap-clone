import { TokenListingProps } from "../models/PropTypes";

const TokenListing = ({ token, className }: TokenListingProps) => {
  return (
    <div className={(className ? className + " " : "") + "flex px-6 py-3 cursor-pointer items-center hover:bg-gray-100"}>
      <img src={token.logoURI} alt={token.symbol} className="h-12 w-12" />
      <div className="flex flex-col ml-4">
        <p className="font-medium tracking-wide">{token.symbol}</p>
        <p className="text-xs text-gray-800 font-medium">{token.name}</p>
        <p className="text-xs text-gray-500">{token.address}</p>
      </div>
    </div>
  );
};

export default TokenListing;