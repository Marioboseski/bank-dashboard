import { NavLink } from "react-router-dom";
import { House, CreditCard, User } from "lucide-react";
import QuickActions from "../QuickActions";

const Sidebar = () => {
  return (
    <aside className="hidden md:flex md:w-32 md:flex-col md:items-center md:justify-evenly md:border-r md:border-gray-300 ">
      
      <NavLink to="/dashboard">
        <House size={28} />
      </NavLink>

      <NavLink to="/transactions">
        <CreditCard size={28} />
      </NavLink>

      <NavLink to="/profile">
        <User size={28} />
      </NavLink>
      
      <QuickActions variant={"desktop"}/>
    </aside>
  );
};

export default Sidebar;