import { useState } from "react";

const useGroceries = () => {
  const initialGroceriesData = [
    { name: "oranges", amount: 1, fridge: "Fridge 1" },
    { name: "apples", amount: 1, fridge: "Fridge 2" },
    { name: "bananas", amount: 1, fridge: "Fridge 1" }
  ];
  const [groceries, setGroceries] = useState(initialGroceriesData);

  return {
    groceries,
    addGroceries: item => {
      item.id = item.length + 1;
      setGroceries([...groceries, item]);
    },
    checkGroceries: i => {
      setGroceries(
        groceries.map((item, idx) => {
          if (i == idx) {
            item.checked = !item.checked;
          }

          return groceries;
        })
      );
    },
    removeGroceries: i => {
        setGroceries(groceries.filter((item, index) => i !== index))
    }
  };
};
export default useGroceries;