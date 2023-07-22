import React from "react";

function ListContainer(props) {
  return (
    <div className="card card-body mt-3 p-0">
      <ul className="list-group">{props.children}</ul>
    </div>
  );
}

export default ListContainer;
