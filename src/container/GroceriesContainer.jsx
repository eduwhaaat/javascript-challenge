import React from "react";
import ListContainer from "./ListContainer";
import AddItem from "../components/AddItem/AddItem";

const GroceriesContainer = props => (
  <React.Fragment>
    <AddItem name="Groceries" />
    <ListContainer />
  </React.Fragment>
);

export default GroceriesContainer;
