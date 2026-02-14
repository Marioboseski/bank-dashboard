const financeReducer = (state, action) => {
  switch (action.type) {

    case "ADD_MONEY":
      return {
        ...state,
        balance: state.balance + action.payload,
        transactions: [
          {
            id: Date.now(),
            type: "deposit",
            amount: action.payload,
            date: new Date().toISOString()
          },
          ...state.transactions
        ]
      };

    case "PAY_BILL":
      return {
        ...state,
        balance: state.balance - action.payload,
        transactions: [
          {
            id: Date.now(),
            type: "expense",
            amount: action.payload,
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