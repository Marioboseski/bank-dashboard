const financeReducer = (state, action) => {
  switch (action.type) {

    case "ADD_MONEY":
      return {
        ...state,
        balance: state.balance + action.payload,
      };

    case "PAY_BILL":
      return {
        ...state,
        balance: state.balance - action.payload,
      };

    default:
      return state;
  }
};

export default financeReducer;