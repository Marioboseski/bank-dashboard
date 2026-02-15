import { useState, useContext } from "react";
import { FinanceContext } from "../../context/FinanceContext";
import { Warehouse } from "lucide-react";
import ActionPage from "../../components/ActionPages";

const AddMoney = () => {

  const { addMoney, balance } = useContext(FinanceContext);

  return (
    <ActionPage
      Icon={Warehouse}
      title={"Deposit"}
      description={"Add money to your account balance"}
      balance={balance}
      buttonText={"Add money"}
      color={"green"}
      onSubmit={addMoney} />
  );
}

export default AddMoney;