import React from "react";
import FridgeList from "../components/FridgeList";

const FridgeListContainer = props => (
  <div>
    <h2>My Groceries - {props.name}</h2>
    <FridgeList name={props.name} groceries={props.groceries} />
    </div>
);

export default FridgeListContainer;

/* 
import React from "react";
const Container = props => {

};

export default Container;
 */
