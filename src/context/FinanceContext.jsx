import { createContext, useReducer } from "react";
import financeReducer from "./financeReducer";

export const FinanceContext = createContext();

const initialState = {
  balance: 0,
  transactions: []
};

export const FinanceProvider = ({ children }) => {

  const [state, dispatch] = useReducer(financeReducer, initialState);

  const addMoney = (amount) => {
    dispatch({ type: "ADD_MONEY", payload: amount });
    return true;
  };

  const payBill = (amount, bill) => {
    if(state.balance < amount) {
      return false;
    }
    dispatch({ type: "PAY_BILL", payload:{ amount, bill }});
    return true;
  };

  return (
    <FinanceContext.Provider value={{ balance: state.balance, transactions: state.transactions, addMoney, payBill }}>
      {children}
    </FinanceContext.Provider>
  );
};