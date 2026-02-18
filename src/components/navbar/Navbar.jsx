import { NavLink } from "react-router-dom";
import { House } from "lucide-react";
import { Plus } from "lucide-react";
import { CreditCard } from "lucide-react";
import { User } from "lucide-react";
import { useState } from "react";
import QuickActions from "../QuickActions";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  }

  return (
    <div>
      {isOpen && (
        <div className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}>
        </div>
      )}
      <nav className="flex justify-around items-center fixed bottom-0 w-full bg-white p-3 z-50 md:hidden ">
        <NavLink to={"/dashboard"}><House size={33} /></NavLink>
        <NavLink to={"/transactions"}><CreditCard size={33} /></NavLink>
        <NavLink to={"/profile"}><User size={33} /></NavLink>
        <QuickActions variant={"mobile"}/>
      </nav>
    </div>
  );
}

export default Navbar;