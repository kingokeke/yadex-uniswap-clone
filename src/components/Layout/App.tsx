import { useEffect } from "react";
import { useMoralis } from "react-moralis";
import { Outlet } from "react-router-dom";
import { useRecoilState } from "recoil";
import { IToken } from "../../models/Interfaces";
import { IGetSupportedTokensDTO } from "../../models/Moralis/dex-plugin";
import { tokensListAtom } from "../../store/atoms";
import { sortTokens } from "../../utils/tokenUtils";
import Footer from "./Footer";
import Navbar from "./Navbar";

const App = () => {
  const fetchTokenDelay = 1000;
  const { Moralis } = useMoralis();
  const [_, setTokensList] = useRecoilState(tokensListAtom);

  useEffect(() => {
    setTimeout(async (): Promise<void> => {
      try {
        const requestBody: IGetSupportedTokensDTO = { chain: "eth" };
        const { tokens } = await Moralis.Plugins.oneInch.getSupportedTokens(requestBody);
        const tokensList = Object.values<IToken>(tokens).sort((a: IToken, b: IToken) => sortTokens(a, b)) as never[];
        setTokensList(tokensList);
      } catch (error) {
        console.log("App Component", error);
      }
    }, fetchTokenDelay);
  }, []);

  return (
    <div className="h-screen bg-gradient-to-b from-pink-50">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;