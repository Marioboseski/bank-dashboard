import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/navbar/SideBar";

const Layout = () => {
  return (
    <div className="min-h-dvh md:flex">

      <Sidebar />

      <main className="flex-1 pb-16 md:pb">
        <Outlet />
      </main>

      <Navbar />

    </div>

  );
}

export default Layout;