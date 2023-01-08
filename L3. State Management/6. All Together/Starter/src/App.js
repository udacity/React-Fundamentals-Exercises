import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { AddUser } from "./AddUser";
import { UsersList } from "./UsersList";

const App = () => {

  const [users, setUsers] = useState([])
  console.log(users);


  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
      </div>

      <div>
        <AddUser users={users} setUsers={setUsers} />
      </div>
      <div>
        <UsersList users={users} />
      </div>


    </>
  );
};

export default App;
