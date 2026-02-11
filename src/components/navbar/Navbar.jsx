import { Link } from "react-router-dom";
import { House } from "lucide-react";
import { Plus } from "lucide-react";
import { CreditCard } from "lucide-react";
import { User } from "lucide-react";

const Navbar = () => {
  return (
    <div className="flex justify-center items-center">
      <nav className="fixed bottom-0 w-full">
        <ul className="flex justify-around items-center ">
          <Link to={"/dashboard"}><House size={33} /></Link>
          <Link to={"/pay"}><Plus size={33} /></Link>
          <Link to={"/transactions"}><CreditCard size={33} /></Link>
          <Link to={"/profile"}><User size={33} /></Link>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;