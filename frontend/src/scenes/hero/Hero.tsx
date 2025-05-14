import { Outlet } from "react-router-dom";
import Navbar from "../global/Navbar";
import Footer from "../global/Footer";

function Hero() {
  return (
    <>
      <Navbar />
      <main className="flex-grow p-4 mt-16 mb-20">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Hero;
