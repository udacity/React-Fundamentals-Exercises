import React from 'react'
import { Message } from './Message'
import { MessageForm } from './MessageForm.js'
import PropTypes from "prop-types";

export const ChatWindow = ({ setMessages, messages, user }) => {
    return (
        <>
            <div className="chat-window">
                <h2>Super Awesome Chat</h2>
                <div className="name sender">{user.username}</div>
                <ul className="message-list">
                    {messages.map((message, index) => (
                        <Message key={index} user={user.username} message={message} index={index} />
                    ))}
                </ul>

                <div>
                    <MessageForm setMessages={setMessages} messages={messages} user={user.username} />
                </div>
            </div>
        </>
    )
}
ChatWindow.propTypes = {
    user: PropTypes.object.isRequired,
    messages: PropTypes.array.isRequired,
    setMessages: PropTypes.func.isRequired
}