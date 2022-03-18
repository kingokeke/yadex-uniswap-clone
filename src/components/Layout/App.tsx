import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

const App = () => (
  <div className="h-screen bg-gradient-to-b from-pink-50">
    <Navbar/>
    <Outlet />
    <Footer />
  </div>
);

export default App;