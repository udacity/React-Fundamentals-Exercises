import React, { useState } from 'react'
import PropTypes from "prop-types";

export const MessageForm = ({ setMessages, messages, user }) => {
    const [singleMessage, setSingleMessage] = useState(
        {
            username: '',
            text: ''
        }
    )

    const handleMessageChange = (e) => {
        setSingleMessage({
            username: user,
            text: e.target.value
        })
    }
    const handleMessageSubmit = (e) => {
        e.preventDefault()
        setMessages([...messages, singleMessage])
    }
    // If the user did not type anything, he/she should not be allowed to submit.
    const isDisabled = () => {
        return singleMessage.text === '' ? true : false;
    };
    return (
        <>
            <form className="input-group" onSubmit={handleMessageSubmit}>
                <input
                    type="text"
                    value={singleMessage.text}
                    onChange={handleMessageChange}
                    className="form-control"
                    placeholder="Enter your message..."
                />
                <div className="input-group-append">
                    <button className="btn submit-button" disabled={isDisabled()}>
                        SEND
                    </button>
                </div>
            </form>
        </>
    )
}
MessageForm.prototype = {
    setMessages: PropTypes.func.isRequired,
    messages: PropTypes.array.isRequired,
    user: PropTypes.string.isRequired
}