import React from "react";

function List(props) {
  return (
    <li className="list-group-item">
      {props.name} (Age - {props.age})
    </li>
  );
}

export default List;
