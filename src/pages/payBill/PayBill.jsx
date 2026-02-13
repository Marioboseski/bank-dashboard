import { useState, useContext } from "react";
import { FinanceContext } from "../../context/FinanceContext";

const PayBill = () => {
  const [ amount, setAmount ] = useState("");

  const { payBill } = useContext(FinanceContext);

  const handleSubmit = () => {
    payBill(Number(amount));
    setAmount("");
  }

  return (
    <div>
      <input type="number"
      value={amount}
      onChange={(e) => setAmount(e.target.value)}
      placeholder="Amount" />

      <button onClick={handleSubmit}>Pay bill</button>
    </div>
  );
}

export default PayBill;