import React from "react";

const ListContainer = props => (
  <ListDisplay
    items={props.items}
    handleClick={item => {
      setItems(items.slice().filter(i => i !== item));
    }}
  />
);

export default ListContainer;

/* 
import React from "react";
const Container = props => {

};

export default Container;
 */
