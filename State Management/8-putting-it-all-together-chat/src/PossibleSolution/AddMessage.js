import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMessage extends Component {
  state = {
    message: '',
  };

  handleInputChange = event => {
    const { value } = event.target;

    this.setState(() => ({
      message: value,
    }));
  };

  handleSubmit = event => {
    event.preventDefault();

    //Call the callback function that was passed to this component from ChatWindow
    this.props.onMessage(this.state.message);
  };

  isDisabled = () => {
    const { message } = this.state;
    return message === '';
  };

  render() {
    const { message } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit} className="input-group">
          <input
            type="text"
            className="form-control"
            value={message}
            placeholder="Enter your message..."
            onChange={this.handleInputChange}
          />
          <div className="input-group-append">
            <button className="btn submit-button" disabled={this.isDisabled()}>
              SEND
            </button>
          </div>
        </form>
      </div>
    );
  }
}

AddMessage.propTypes = {
  onMessage: PropTypes.func.isRequired,
};

export default AddMessage;
