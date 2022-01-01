import logo from "./logo.svg";
import "./App.css";

const users = [{ username: "Amy" }, { username: "John" }];

const messages = [
  { username: "Amy", text: "Hi, Jon!" },
  { username: "Amy", text: "How are you?" },
  { username: "John", text: "Hi, Amy! Good, you?" },
];

const App = () => {
  // If the user did not type anything, he/she should not be allowed to submit.
  const isDisabled = () => {
    return false;
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">ReactND - Coding Practice</h1>
      </header>
      <div className="container">
        <div className="chat-window">
          <h2>Super Awesome Chat</h2>
          <div className="name sender">{users[0].username}</div>

          <ul className="message-list">
            {messages.map((message, index) => (
              <li
                key={index}
                className={
                  message.username === users[0].username
                    ? "message sender"
                    : "message recipient"
                }
              >
                <p>{`${message.username}: ${message.text}`}</p>
              </li>
            ))}
          </ul>

          <div>
            <form className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Enter your message..."
              />
              <div className="input-group-append">
                <button className="btn submit-button" disabled={isDisabled()}>
                  SEND
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="chat-window">
          <h2>Super Awesome Chat</h2>
          <div className="name sender">{users[1].username}</div>
          <ul className="message-list">
            {messages.map((message, index) => (
              <li
                key={index}
                className={
                  message.username === users[1].username
                    ? "message sender"
                    : "message recipient"
                }
              >
                <p>{`${message.username}: ${message.text}`}</p>
              </li>
            ))}
          </ul>

          <div>
            <form className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Enter your message..."
              />
              <div className="input-group-append">
                <button className="btn submit-button" disabled={isDisabled()}>
                  SEND
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
