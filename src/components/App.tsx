import Navbar from "./Navbar";
import { ILink } from "../models/Interfaces";

const App = () => {
  const navMenuLinks: ILink[] = [
    { name: "Swap", url: "swap" },
    { name: "Pool", url: "pool" },
    { name: "Vote", url: "vote" },
    { name: "Charts", url: "charts" },
  ];
  return (
    <div className="h-screen bg-pink-50">
      <Navbar links={navMenuLinks} />
    </div>
  );
}

export default App;