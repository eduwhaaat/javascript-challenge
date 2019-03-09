import React from "react";
import useFetch from "./useFetch";
export default function DataLoader(props) {
  const data = useFetch("http://localhost:3001/links/");
  return (
    <div>
      <ul>
        {data.map(el => (
          <li key={el.id}>{el.name} {el.amount}</li>
        ))}
      </ul>
    </div>
  );
}