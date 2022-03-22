import { TokenBadgeProps } from "../models/PropTypes";

const TokenBadge = ({token, className}: TokenBadgeProps) => {
  return (
    <span className={(className ? className + " " : "") + "flex items-center"}>
      {token.logoURI && <img src={token.logoURI} alt={token.name} className="h-5 mr-2" />}
      {token.symbol}
    </span>
  );
};

export default TokenBadge;