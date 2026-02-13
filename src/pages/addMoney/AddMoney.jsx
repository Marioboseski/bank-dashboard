import { useState, useContext } from "react";
import { FinanceContext } from "../../context/FinanceContext";

const AddMoney = () => {

  const {  addMoney } = useContext(FinanceContext);
  const [ amount, setAmount ] = useState("");

  const handleSubmit = () => {
    addMoney(Number(amount));
    setAmount("");
  }

  return (
    <div>
      <h3>Deposit</h3>
      <input type="number"
      value={amount}
      onChange={(e) => setAmount(e.target.value)}
      placeholder="Enter amount"/>
      <button onClick={handleSubmit}>Add money</button>
    </div>
  );
}

export default AddMoney;