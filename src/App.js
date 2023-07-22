import "bootstrap/dist/css/bootstrap.min.css";
import Form from "./Components/Form";
import { useState } from "react";
import ListContainer from "./Components/ListContainer";
import List from "./Components/List";
import styles from "./app.module.css";

function App() {
  const [user, setUser] = useState([]);
  function dataProcess(data) {
    setUser([...user, data]);
  }

  return (
    <div>
      <div className={`container text-center ${styles.size}`}>
        <Form onSubmit={dataProcess}></Form>
        <ListContainer>
          {user.length !== 0 &&
            user.map((item) => {
              return <List name={item.name} age={item.age}></List>;
            })}
        </ListContainer>
      </div>
    </div>
  );
}

export default App;
