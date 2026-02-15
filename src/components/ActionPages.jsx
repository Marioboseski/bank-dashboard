import { useState } from "react";

const ActionPage = ({ Icon, title, description, balance, buttonText, color, onSubmit }) => {

  const [amount, setAmount] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = () => {
    if (!amount || amount <= 0) {
      return;
    }
    onSubmit(Number(amount));
    setAmount("");
    setSuccess("Successfully added finances");
    setTimeout(() => {
      setSuccess("");
    }, 2000);
  }

  const formattedBalance = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "EUR",
  }).format(balance);

  return (
    <div className="flex justify-center items-center p-3">
      <div className="flex flex-col justify-around items-center w-full min-h-[calc(100vh-120px)] border-2 border-black/80">
        <div className="flex justify-center items-center gap-2 border-b-2 border-gray-300 p-1">
          {Icon && <Icon size={32} />}
          <p className="text-2xl">{title}</p>
        </div>
        <p className="text-lg">{description}</p>
        <p className="text-xl text-gray-500"> Current balance: {formattedBalance}</p>
        <input type="Number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
          className="border-2 border-gray-500 w-full max-w-72 rounded-md text-xl p-1" />

        <button onClick={handleSubmit} className={`${color === "green"
          ? "border-green-400 bg-green-100 hover:bg-green-300"
          : "border-red-500 bg-red-100 hover:bg-red-300"
          } w-full max-w-52 p-1 rounded-md border-2 `}>{buttonText}</button>
        <p>{success}</p>
      </div>
    </div>
  );
}

export default ActionPage;