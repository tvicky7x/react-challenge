import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "./Components/Form/Form";
import List from "./Components/List/List";
import { useState } from "react";
import ModalBox from "./Components/Modal/ModalBox";

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  function submitData(data) {
    if (data.name.trim().length === 0 || data.age.trim().length === 0) {
      console.log("hello");
      setError({ title: "Invalid Input", massage: "Please add valid input." });
      return;
    } else {
      if (Number(data.age) < 1) {
        setError({
          title: "Invalid Age",
          massage: "Please add age above 1 years.",
        });
        return;
      }
    }
    setData((previousData) => {
      return [...previousData, data];
    });
  }

  function closeModal() {
    setError(false);
  }

  return (
    <>
      <div className="container p-3" style={{ maxWidth: "500px" }}>
        <Form submitData={submitData} />
        <div className="card mt-3 p-3">
          <ul className="list-group">
            {data.map((item) => {
              return <List name={item.name} age={item.age} />;
            })}
          </ul>
        </div>
        {error && <ModalBox closeModal={closeModal} error={error} />}
      </div>
    </>
  );
}

export default App;
