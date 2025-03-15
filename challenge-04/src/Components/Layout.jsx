import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="mt-16"> {/* Adjust margin to prevent content from overlapping */}
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
