import AddMessage from "./AddMessage";
import MessageHistory from "./MessageHistory";
import PropTypes from "prop-types";

/*
This component passes a callback function to AddMessage (called "onMessage")
because we will need to add new messages to the message history in BOTH chat windows.
Because BOTH chat windows need access to the messages piece of state, that piece of
state will live in the App.js file. That means that the callback function
will be passed from the App Component all the way down to the AddMessage Component.
*/

const ChatWindow = ({ user, messages, onMessage }) => {
  const handleOnMessage = (message) => {
    onMessage(user.username, message);
  };

  return (
    <div className="chat-window">
      <h2>Super Awesome Chat</h2>
      <div className="name sender">{user.username}</div>
      <MessageHistory messages={messages} user={user} />
      <AddMessage onMessage={handleOnMessage} />
    </div>
  );
};

ChatWindow.propTypes = {
  onMessage: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  messages: PropTypes.array.isRequired,
};

export default ChatWindow;
