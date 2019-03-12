import React, { memo, useContext } from "react";
import DeleteOutlined from "@material-ui/icons/DeleteOutlined";
import {
  ListItem,
  Checkbox,
  IconButton,
  ListItemText,
  ListItemSecondaryAction
} from "@material-ui/core";
import { GroceriesContext } from "../Context";

const GroceriesListItem = memo(props => {
  const { dispatch } = useContext(GroceriesContext);
  console.log(props.item);
  return (
    <ListItem divider={props.devider}>
      <Checkbox
        onClick={props.onCheckBoxToggle}
        checked={props.checked}
        disableRipple
      />
      <ListItemText primary={props.name} />
      <ListItemText primary={props.amount} />
      <ListItemText primary={props.fridge} />
      <ListItemSecondaryAction>
        <IconButton
          arita-label="Delete Groceries"
          onClick={() =>{
            if(props.amount > 1){
               dispatch({ type: "DECREMENT_GROCERIES", payload: props.item })
            }
            else  {
              dispatch({ type: "USEDALL_GROCERIES", payload: props.item })
            }
           
          }
            
          }
        >
          <DeleteOutlined />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
});
export default GroceriesListItem;
