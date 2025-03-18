import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="my-16"> {/* Adjust margin to prevent content from overlapping */}
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
