import { Link } from "react-router-dom";
import { useContext } from "react";
import { FinanceContext } from "../../context/FinanceContext";
import TransactionsItem from "../../components/TransactionsItem";

const Dashboard = () => {

  const { balance, transactions } = useContext(FinanceContext);

  const recentTransactions = transactions.slice(0, 5);

  return (
    <div className="flex flex-col justify-center items-center p-3 gap-3">
      <h3 className="text-3xl">Welcome back, USER</h3>
      <p className="text-gray-400">Here is your financial overview</p>
      <div className="flex flex-col justify-center items-center gap-3 border-2 border-gray-300 rounded-md w-full p-2">
        <p className="text-xl text-gray-400">Your current balance</p>
        <p className="text-2xl">BALANCE {balance}</p>
        <div className="flex p-2">
          <Link to={"/addmoney"} className="bg-blue-600 p-3 rounded-l-md text-xl">Add money</Link>
          <Link to={"/paybill"} className="bg-blue-500 p-3 rounded-r-md text-xl">Pay bill</Link>
        </div>
      </div>
      <p className="text-2xl">Recent transactions</p>
      {recentTransactions.map((recentTransaction) => (
        <TransactionsItem key={recentTransaction.id}
          transaction={recentTransaction} />
      ))}
    </div>
  );
}

export default Dashboard;
