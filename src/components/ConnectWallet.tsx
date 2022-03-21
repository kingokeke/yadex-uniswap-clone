import { ConnectWalletProps } from "../models/PropTypes";

const ConnectWallet = ({className}: ConnectWalletProps) => (
  <button className={(className ? className + " " : "") + "bg-pink-100 text-pink-600 font-semibold rounded-2xl px-4 py-1 mx-1 border-2 border-white"}>Connect Wallet</button>
);

export default ConnectWallet;