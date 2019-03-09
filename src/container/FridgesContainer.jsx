import React from "react";
import FridgeList from "../components/FridgeList";
import FridgeListContainer from "./FridgeListContainer";

const FridgesContainer = props => (
  <div className="flex-large">
    <FridgeListContainer name="Fridge 1" groceries={props.groceries} />
    <FridgeListContainer name="Fridge 2" groceries={props.groceries} />
  </div>
);

export default FridgesContainer;

/* 
import React from "react";
const Container = props => {

};

export default Container;
 */
