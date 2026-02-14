import { useContext } from "react";
import { FinanceContext } from "../../context/FinanceContext";
import TransactionsItem from "../../components/TransactionsItem";

const Transactions = () => {

  const { transactions } = useContext(FinanceContext);

  return (
    <div className="flex flex-col p-2 gap-3">
      <p className="text-xl">Transactions history</p>
      {transactions.map((allTransactions) => (
        <TransactionsItem key={allTransactions.id} transaction={allTransactions}/>
      ))}
    </div>
  );
}

export default Transactions;