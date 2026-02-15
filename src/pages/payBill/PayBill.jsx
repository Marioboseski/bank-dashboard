import { useState, useContext } from "react";
import { FinanceContext } from "../../context/FinanceContext";
import ActionPage from "../../components/ActionPages";
import { HandCoins } from "lucide-react";

const PayBill = () => {

  const { payBill, balance } = useContext(FinanceContext);

  return (
    <div>
      <ActionPage 
      Icon={HandCoins}
      title={"Pay bill"}
      description={"Pay your bills online"}
      balance={balance}
      buttonText={"Pay bill"}
      color={"red"}
      onSubmit={payBill}
      />
    </div>
  );
}

export default PayBill;