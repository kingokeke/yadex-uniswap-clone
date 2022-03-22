import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useRecoilState } from "recoil";
import { tokensListAtom } from "../../store/atoms";
import { fetchTokensFromServer } from "../../utils/tokenUtils";
import Footer from "./Footer";
import Navbar from "./Navbar";

const App = () => {
  const fetchTokenDelay = 5000;
  const [_, setTokensList] = useRecoilState(tokensListAtom);

  useEffect(() => {
    setTimeout(async (): Promise<void> => {
      try {
        const tokens = await fetchTokensFromServer() as never[];
        setTokensList(tokens);
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