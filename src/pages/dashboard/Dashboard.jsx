import { Link } from "react-router-dom";
import { useContext } from "react";
import { FinanceContext } from "../../context/FinanceContext";
import { UserContext } from "../../context/UserContext";
import TransactionsItem from "../../components/TransactionsItem";

const Dashboard = () => {

  const { balance, transactions } = useContext(FinanceContext);
  const { user } = useContext(UserContext);
  const recentTransactions = transactions.slice(0, 5);

  const formattedBalance = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "EUR",
  }).format(balance);

  return (
    <div className="container">
      <div className="flex flex-col justify-center items-center text-center p-3 gap-3">
        <h3 className="text-3xl">Welcome back, {user?.name}</h3>
        <p className="text-gray-400">Here is your financial overview</p>
        <div className="flex flex-col justify-center items-center gap-3 border-2 border-gray-300 rounded-md w-full max-w-[600px] min-h-56 p-2">
          <p className="text-xl text-gray-400">Your current balance</p>
          <p className="text-2xl">BALANCE {formattedBalance}</p>
          <div className="flex p-2">
            <Link to={"/addmoney"} className="bg-blue-600 p-3 rounded-l-md text-xl transition-all duration-200 hover:scale-105">Add money</Link>
            <Link to={"/paybill"} className="bg-blue-500 p-3 rounded-r-md text-xl transition-all duration-200 hover:scale-105">Pay bill</Link>
          </div>
        </div>
        <p className="text-2xl">Recent transactions</p>
        <div className="flex flex-col justify-center items-center gap-3 w-full max-w-[600px]">
          {recentTransactions.map((recentTransaction) => (
            <TransactionsItem key={recentTransaction.id}
              transaction={recentTransaction} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
