import logo from "./logo.svg";
import "./App.css";
import { ChatWindow } from "./ChatWindow";
import { useState } from "react";


const users = [{ username: "Amy" }, { username: "John" }];
const App = () => {
  const [messages, setMessages] = useState([
    { username: "Amy", text: "Hi, Jon!" },
    { username: "Amy", text: "How are you?" },
    { username: "John", text: "Hi, Amy! Good, you?" },
  ])


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">ReactND - Coding Practice</h1>
      </header>
      <div className="container">
        {users.map((user, index) => {
          return (<ChatWindow key={index} setMessages={setMessages} user={user} messages={messages} />)
        })}
      </div>
    </div>
  );
};

export default App;
