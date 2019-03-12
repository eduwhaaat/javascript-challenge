import React, { useReducer } from "react";
// import useGroceriesReducer from "./reducer/useGroceriesReducer";

// Store Context is the global context that is managed by reducers.
const initialState = {
  groceries: [
    // Initial Data
    { name: "oranges", amount: 5, fridge: "Fridge 1" },
    { name: "apples", amount: 2, fridge: "Fridge 2" },
    { name: "bananas", amount: 3, fridge: "Fridge 1" }
  ]
};

// Reducer is the classical reducer that we know from Redux.
// used by `useReducer`
const useGroceriesReducer = (state, action) => {
  switch (action.type) {
    case "ADD_GROCERIES":
     /* // return current state if empty
     if (!action.payload) {
        return state;
      }
      // return current state if duplicate
      if (state.groceries.includes(action.payload)) {
        return state;
      } */

      return {
        ...state,
        groceries: [...state.groceries, action.payload]
      };
    case "DECREMENT_GROCERIES":
      return {
        ...state,
        groceries: state.groceries.map(item => {
            if (item === action.payload) {
              if (item.amount >1) {
                item.amount = item.amount - 1;
              }              
            }

            return item;
          })
        }

    case "USEDALL_GROCERIES":
      return {
        ...state,
        groceries: state.groceries.filter(t => t !== action.payload)
      };
    case "COMPLETE":
      return {
        ...state,
        groceries: state.groceries.filter(t => t !== action.payload)
      };
    default:
      return state;
  }
};

const GroceriesContext = React.createContext(initialState);

function GroceriesProvider(props) {
  // new
  const [state, dispatch] = useReducer(useGroceriesReducer, initialState);
  return (
    // new
    <GroceriesContext.Provider value={{ state, dispatch }}>
      {props.children}
    </GroceriesContext.Provider>
  );
}
export { GroceriesContext, GroceriesProvider };
