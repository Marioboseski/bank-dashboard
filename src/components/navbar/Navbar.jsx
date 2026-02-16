import { Link } from "react-router-dom";
import { House } from "lucide-react";
import { Plus } from "lucide-react";
import { CreditCard } from "lucide-react";
import { User } from "lucide-react";
import { useState } from "react";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  }

  return (
    <div className="flex justify-center items-cente">
      {isOpen && (
        <div className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}>
        </div>
      )}
      <nav className="fixed bottom-0 w-full z-50 bg-white p-3">
        <ul className="flex justify-around items-center ">
          <li><Link to={"/dashboard"}><House size={33} /></Link></li>
          <li><Link to={"/transactions"}><CreditCard size={33} /></Link></li>
          <li> <Link to={"/profile"}><User size={33} /></Link></li>
          <li className="flex justify-center items-center relative">
            {isOpen && (
              <div className="flex flex-col gap-2 bottom-4 p-3 mb-4 absolute bg-gray-300 border-2 border-gray-300 rounded-lg z-50">
                <Link to={"/addmoney"} onClick={() => setIsOpen(false)}>Add money</Link>
                <Link to={"/paybill"} onClick={() => setIsOpen(false)}>Pay bill</Link>
              </div>
            )}
            <button onClick={toggleMenu}><Plus size={33} /></button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;