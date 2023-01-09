import React from 'react'
import PropTypes from "prop-types";

export const Message = ({ message, user, }) => {
    return (
        <>
            <li
                className={
                    message.username === user
                        ? "message sender"
                        : "message recipient"
                }
            >
                <p>{`${message.username}: ${message.text}`}</p>
            </li>


        </>
    )
}
Message.propTypes = {
    message: PropTypes.object.isRequired,
    user: PropTypes.string.isRequired
}
