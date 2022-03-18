import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

const App = () => {
  return (
    <div className="h-screen bg-gradient-to-b from-pink-50">
      <Navbar className="" />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;