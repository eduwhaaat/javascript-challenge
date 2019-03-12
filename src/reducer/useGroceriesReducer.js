// Reducer is the classical reducer that we know from Redux.
// used by `useReducer`
const useGroceriesReducer = (state, action) => {
  switch (action.type) {
    case "ADD_GROCERIES":
      return {
        ...state,
        groceries: [...state.groceries, action.payload]
      };
    case "DECREMENT_GROCERIES":
      return {
        ...state,
        groceries: i => {
          state.groceries.map((item, idx) => {
            if (i == idx) {
              if (item.amounts <= 1) {
                return {
                  ...state,
                  groceries: state.groceries.filter(t => t !== action.payload)
                };
              }
              item.amount = item.amount - 1;
            }

            return item;
          });
        }
      };
    case "USED_ALL_GROCERIES":
      return {
        ...state,
        groceries: state.groceries.filter(t => t !== action.payload)
      };
    default:
      return state;
  }
};
export default useGroceriesReducer;
