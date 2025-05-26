import { Outlet } from "react-router-dom";
import Navbar from "../global/Navbar";
import Footer from "../global/Footer";

function Hero() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 px-4 pt-16 pb-16 overflow-auto">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Hero;
