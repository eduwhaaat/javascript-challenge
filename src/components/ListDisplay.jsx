import React from "react";
import ListItem from "./ListItem";
import { List, Paper, Grid } from "@material-ui/core";

const ListDisplay = memo(props => (
  <React.Fragment>
    {props.items.length > 0 && (
      <Paper style={{ margin: 16 }}>
        <List style={{ overflow: "scroll" }}>
          {props.items.map((item, i) => (
            <ListItem
              {...item}
              key={i}
              name={item.name}
              handleClick={props.handleClick}
            />
          ))}
        </List>
      </Paper>
    )}
  </React.Fragment>
));

export default ListDisplay;
