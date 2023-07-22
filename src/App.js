import "bootstrap/dist/css/bootstrap.min.css";
import Form from "./Components/Form";
import { useState } from "react";
import ListContainer from "./Components/ListContainer";
import List from "./Components/List";
import styles from "./app.module.css";
import Modal from "./Components/Modal";

function App() {
  const [user, setUser] = useState([]);
  const [Error, setError] = useState(false);
  const [MassageIndex, setMassageIndex] = useState(0);
  function closeModal() {
    setError(false);
  }
  function dataProcess(data) {
    if (data.name.trim() === "" || data.age === "") {
      setMassageIndex(0);
      setError(true);
      return;
    }
    if (Number(data.age) < 1) {
      setMassageIndex(1);
      setError(true);
      return;
    }
    data.id = Math.floor(Math.random() * 1000000).toString(36);
    setUser([...user, data]);
  }

  return (
    <>
      <div className={`container text-center ${styles.size}`}>
        <Form onSubmit={dataProcess}></Form>
        {user.length !== 0 && (
          <ListContainer>
            {user.map((item) => {
              return (
                <List name={item.name} age={item.age} key={item.id}></List>
              );
            })}
          </ListContainer>
        )}
      </div>
      {Error && (
        <Modal onClick={closeModal} MassageIndex={MassageIndex}></Modal>
      )}
    </>
  );
}

export default App;
