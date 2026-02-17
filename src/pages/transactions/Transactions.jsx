import { useContext } from "react";
import { FinanceContext } from "../../context/FinanceContext";
import TransactionsItem from "../../components/TransactionsItem";

const Transactions = () => {

  const { transactions } = useContext(FinanceContext);

  return (
    <div className="flex flex-col justify-center items-center p-2 gap-3">
      <p className="text-xl">Transactions history</p>
      <div className="flex flex-col justify-center items-center gap-3 w-full max-w-[600px]">
        {transactions.map((allTransactions) => (
          <TransactionsItem key={allTransactions.id} transaction={allTransactions} />
        ))}
      </div>
    </div>
  );
}

export default Transactions;