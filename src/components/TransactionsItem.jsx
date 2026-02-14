import { CirclePlus } from "lucide-react";

const TransactionsItem = ({ transaction }) => {
  return (
    <div className="p-2 w-full border-2 border-gray-300 shadow-lg rounded-md bg-gray-100">
      <div className="flex justify-around items-center gap-2">
        <CirclePlus size={30} />
        <div className="flex flex-col justify-center">
          <p className="text-lg">{transaction.type}</p>
          <p className="text-sm">{transaction.date}</p>
        </div>
        <p className="text-xl">{transaction.amount}</p>

      </div>
    </div>
  );
}

export default TransactionsItem;