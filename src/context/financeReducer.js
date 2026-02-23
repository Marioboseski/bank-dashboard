const financeReducer = (state, action) => {
  switch (action.type) {

    case "ADD_MONEY":
      return {
        ...state,
        balance: state.balance + action.payload,
        transactions: [
          {
            id: Date.now(),
            type: "Deposit",
            amount: action.payload,
            date: new Date().toISOString()
          },
          ...state.transactions
        ]
      };

    case "PAY_BILL":
      return {
        ...state,
        balance: state.balance - action.payload.amount,
        transactions: [
          {
            id: Date.now(),
            type: "Expense",
            amount: action.payload.amount,
            bill: action.payload.bill,
            date: new Date().toISOString()
          },
          ...state.transactions
        ]
      };

    default:
      return state;
  }
};

export default financeReducer;