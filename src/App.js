import React, { useState } from "react";
// import logo from "./logo.svg";
import "./App.css";
import GroceriesContainer from "./container/GroceriesContainer";

//React Hooks - only functional components

const App = () => {
  const initialGroceriesData = [
    { name: "oranges", amount: 1, fridge: "Fridge 1" },
    { name: "apples", amount: 1, fridge: "Fridge 2" },
    { name: "bananas", amount: 1, fridge: "Fridge 1" },
  ];
  const [groceries, setGroceries] = useState(initialGroceriesData);

  const addItem = item => {
    item.id = item.length + 1;
     setGroceries([...groceries, item]);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Shopping App</h1>
        <GroceriesContainer addItem={addItem} groceries={groceries} />
      </div>

      {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header> */}
      
    </div>
  );
};

/* 
const InputText = props => {
  const [value, setValue] = useState("");
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        props.handleSubmit(value);
        setValue("");
      }}
    >
      <input
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <input
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
}; */

export default App;
