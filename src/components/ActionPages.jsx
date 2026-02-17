import { useState } from "react";

const ActionPage = ({ Icon, title, description, balance, buttonText, color, successMessage, successColor, onSubmit }) => {

  const [amount, setAmount] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!amount || amount <= 0) {
      return;
    }

    const result = onSubmit(Number(amount));
    if (!result) {
      setError("Not enough funds");
      setTimeout(() => {
        setError("");
      }, 2000);
      return;
    }

    setAmount("");
    setSuccess(successMessage);
    setTimeout(() => {
      setSuccess("");
    }, 2000);
  }

  const formattedBalance = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "EUR",
  }).format(balance);

  return (
    <div className="container">
      <div className="flex justify-center items-center p-3 shadow-2xl md:rounded-md ">
        <div className="flex flex-col justify-around items-center w-full min-h-[calc(100vh-120px)] border-2 border-black/85 rounded-md">
          <div className="flex justify-center items-center gap-2 border-b-2 border-gray-300 p-1">
            {Icon && <Icon size={32} />}
            <p className="text-2xl">{title}</p>
          </div>
          <p className="text-lg">{description}</p>
          <p className="text-xl text-gray-500"> Current balance: {formattedBalance}</p>
          <div className="flex flex-col justify-center items-center gap-2">
            <input type="Number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount"
              className="border-2 border-gray-500 w-full max-w-72 rounded-md text-xl p-1" />

            {success && (
              <p className={`${successColor}`}>{success}</p>
            )}

            {error && (
              <p className="text-red-500">{error}</p>
            )}
          </div>

          <button onClick={handleSubmit} className={`${color === "green"
            ? "border-green-400 bg-green-100 hover:bg-green-300"
            : "border-red-500 bg-red-100 hover:bg-red-300"
            } w-full max-w-52 p-1 rounded-md border-2 `}>{buttonText}</button>
        </div>
      </div>
    </div>
  );
}

export default ActionPage;