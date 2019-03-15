import React, { memo, useContext } from "react";
import GroceriesListItem from "./GroceriesListItem";
import { List, Paper } from "@material-ui/core";
import { GroceriesContext } from "../Context";


const ShoppingList = memo(props => {
  // new
  const { state } = useContext(GroceriesContext);

  return (
    <React.Fragment>
      {state.groceries.length > 0 && (
        <Paper style={{ margin: 16 }}>
          <List style={{ overflow: "scroll" }}>
            {state.groceries.map((item, i) => (
              <GroceriesListItem
                {...item}
                item={item}
                key={i}
                name={item.name}
                handleClick={props.handleClick}
              />
            ))}
          </List>
        </Paper>
      )}
    </React.Fragment>
  );
});

export default ShoppingList;
