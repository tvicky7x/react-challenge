import React from "react";

function List(props) {
  return (
    <li className="list-group-item">
      {props.name} AGE - {props.age}
    </li>
  );
}

export default List;
