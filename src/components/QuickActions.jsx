import { NavLink } from "react-router-dom";
import { Plus } from "lucide-react";
import { useState } from "react";

const QuickActions = ({ variant }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {isOpen && (
        <div
          className={`absolute z-50 flex flex-col gap-2 p-3 rounded-lg shadow-md bg-gray-100
          ${variant === "mobile" ? "bottom-14" : "left-16 top-0"}`}
        >
          <NavLink to="/addmoney" onClick={() => setIsOpen(false)}>
            Add money
          </NavLink>
          <NavLink to="/paybill" onClick={() => setIsOpen(false)}>
            Pay bill
          </NavLink>
        </div>
      )}

      <button onClick={() => setIsOpen(prev => !prev)}>
        <Plus size={33} />
      </button>
    </div>
  );
};

export default QuickActions;