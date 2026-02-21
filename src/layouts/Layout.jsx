import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/navbar/SideBar";

const Layout = () => {
  return (
    <div className="h-dvh overflow-hidden md:flex">

      <Sidebar />

      <main className="flex-1 pb-16 overflow-y-auto md:pb">
        <Outlet />
      </main>

      <Navbar />

    </div>

  );
}

export default Layout;