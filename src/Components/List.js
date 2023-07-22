import React from "react";

function List(props) {
  return (
    <li className="list-group-item text-capitalize">
      {props.name} (Age - {props.age})
    </li>
  );
}

export default List;
