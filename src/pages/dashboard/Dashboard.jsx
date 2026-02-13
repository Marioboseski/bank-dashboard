import { Link } from "react-router-dom";
import { useContext } from "react";
import { FinanceContext } from "../../context/FinanceContext";

const Dashboard = () => {

  const { balance } = useContext(FinanceContext);

  return (
    <div className="flex flex-col justify-center items-center gap-2 p-3">
      <h3 className="text-3xl">Welcome back, USER</h3>
      <p className="text-gray-400">Here is your financial overview</p>
      <div className="flex flex-col justify-center items-center gap-2 border rounded-md w-full p-2">
        <p className="text-xl text-gray-400">Your current balance</p>
        <p className="text-xl">BALANCE {balance}</p>
        <div className="">
          <Link to={"/addmoney"} className="bg-blue-600 p-3 rounded-l-md text-xl">Add money</Link>
          <Link to={"/paybill"} className="bg-blue-500 p-3 rounded-r-md text-xl">Pay bill</Link>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
