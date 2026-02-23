import { CirclePlus } from "lucide-react";

const TransactionsItem = ({ transaction }) => {

  const deposit = transaction.type === "Deposit";

  const formattedAmount = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "EUR",
  }).format(transaction.amount);

  return (
    <div className="p-2 w-full border-2 border-gray-300 shadow-lg rounded-md bg-gray-100 duration-500 transition-all hover:scale-105">
      <div className="flex justify-around items-center gap-2">
        <CirclePlus size={30} />
        <div className="flex flex-col justify-center">
          <p className={deposit ? "text-green-500" : "text-red-500 text-lg"}>{transaction.bill || transaction.type}</p>
          <p className="text-sm">{transaction.date}</p>
        </div>
        <p className="text-xl">{formattedAmount}</p>
      </div>
    </div>
  );
}

export default TransactionsItem;