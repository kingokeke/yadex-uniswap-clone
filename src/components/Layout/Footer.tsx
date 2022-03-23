import { ethers } from "ethers";
import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { infuraKeyAtom, blockHeightAtom, gasPriceAtom } from "../../store/atoms";
import { convertWeiToGwei } from "../../utils";

const Footer = () => {
  const infuraKey = useRecoilValue(infuraKeyAtom);
  const [height, setHeight] = useRecoilState(blockHeightAtom);
  const [gasPrice, setGasPrice] = useRecoilState(gasPriceAtom);

  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        const provider = new ethers.providers.InfuraProvider("ropsten", infuraKey);
        const [latestBlockNumber, latestGasPrice] = await Promise.all([provider.getBlockNumber(), provider.getGasPrice()]);
        setHeight(latestBlockNumber);
        setGasPrice(convertWeiToGwei(latestGasPrice));
      } catch (err) {
        console.log("Footer Component:", err);
      }
    }, 30000);
    return () => clearInterval(interval);
  }, [height, gasPrice]);

  return (
    <div className="flex justify-end absolute bottom-0 left-0 right-0 pb-4 px-4">
      {height !== 0 &&
        <p className="text-xs text-gray-600 font-medium">
          {gasPrice} gwei<span className="text-[10px] mx-2">●</span>
          <span className="text-green-500 font-normal">{height}</span>
        </p>}
    </div>
  );
};

export default Footer;
