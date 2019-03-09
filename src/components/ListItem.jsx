import React from "react";
import DeleteOutlined from "@material-ui/core/icons/DeleteOutlined";
import {
  List,
  ListItem,
  Checkbox,
  IconButton,
  ListItemText,
  ListItemSecondaryAction
} from "@material-ui/core";

const ListItem = memo(props => (
  <ListItem divider={props.devider}>
    <Checkbox
      onClick={props.onCheckBoxToggle}
      checked={props.checked}
      disableRipple
    />
    <ListItemText primary={props.text} />
    <ListItemSecondaryAction>
      <IconButton arita-label="Delete Groceries" onClick={props.onButtonClick}>
        <DeleteOutlined />
      </IconButton>
    </ListItemSecondaryAction>
  </ListItem>
));
export default ListItem;
