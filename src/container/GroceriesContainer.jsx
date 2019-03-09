import React from "react";
import AddItemForm from "../components/AddItem/AddItemForm";

const GroceriesContainer = props => (
<div className="flex-row">
          <div className="flex-large">
            <h2>Add Groceries</h2>
            <AddItemForm addItem={props.addItem} name="Groceries"/>
          </div>
          <div className="flex-large">
            <h2>View Groceries</h2>
            
           {/*  <FridgeList></FridgeList>
            <FridgeList></FridgeList> */}
          </div>
        </div>

);


export default GroceriesContainer;
