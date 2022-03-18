import { BigNumber } from "ethers";

export const convertWeiToGwei = (wei: BigNumber): number => {
  const gwei = wei.div(BigNumber.from(1e9)).toNumber();
  return gwei;
};