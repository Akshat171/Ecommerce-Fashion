const initialState = {
  quantity: 1,
  totalAmount: 98,
};
const quantityReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREASE_QUANTITY":
      return {
        ...state,
        quantity: state.quantity + 1,
        totalAmount: state.totalAmount + 98,
      };
    case "DECREASE_QUANTITY":
      return {
        ...state,
        quantity: state.quantity > 1 ? state.quantity - 1 : 1,
        totalAmount: state.totalAmount > 98 ? state.totalAmount - 98 : 98,
      };
    default:
      return state;
  }
};

export default quantityReducer;
