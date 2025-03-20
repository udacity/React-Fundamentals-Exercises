import logo from "./logo.svg";
import "./App.css";
import ChatWindow from "./ChatWindow";
import { useState } from "react";

const users = [{ username: "Amy" }, { username: "John" }];

const App = () => {
  // `messages` is an array of objects (e.g., { usermame: 'Amy', text: 'a' })
  const [messages, setMessages] = useState([]);

  const onMessage = (username, message) => {
    const newMessage = {
      username: username,
      text: message,
    };

    setMessages(messages.concat([newMessage]));
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">ReactND - Coding Practice</h1>
      </header>
      <div className="container">
        {users.map((user) => (
          <ChatWindow
            key={user.username}
            user={user}
            messages={messages}
            onMessage={onMessage}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
