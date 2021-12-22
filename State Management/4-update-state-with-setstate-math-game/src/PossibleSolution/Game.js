import React, { Component } from 'react';

class Game extends Component {
  /*
  The constructor is a "special method for creating and initializing an object."
  (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes).
  Whenever an object is created with a `class`, the constructor is the first
  thing that runs.
  */
  constructor(props) {
    super(props);
    const valuesArray = this.makeNewQuestion();
    this.state = {
      value1: valuesArray[0],
      value2: valuesArray[1],
      value3: valuesArray[2],
      proposedAnswer: valuesArray[3],
    };
  }

  makeNewQuestion = () => {
    const value1 = Math.floor(Math.random() * 100);
    const value2 = Math.floor(Math.random() * 100);
    const value3 = Math.floor(Math.random() * 100);
    const proposedAnswer = Math.floor(Math.random() * 3) + (value1 + value2 + value3);
    return [value1, value2, value3, proposedAnswer];
  };

  updateState = newValuesArray => {
    this.setState(currState => ({
      value1: newValuesArray[0],
      value2: newValuesArray[1],
      value3: newValuesArray[2],
      proposedAnswer: newValuesArray[3],
    }));
  };

  handleAnswer = event => {
    const newValuesArray = this.makeNewQuestion();
    this.updateState(newValuesArray);
    const answerWasCorrect = this.evaluateAnswer(event.target.name);
    this.props.handleAnswer(answerWasCorrect);
  };

  evaluateAnswer(givenAnswer) {
    const { value1, value2, value3, proposedAnswer } = this.state;
    const corrAnswer = value1 + value2 + value3;

    return (
      (corrAnswer === proposedAnswer && givenAnswer === 'true') ||
      (corrAnswer !== proposedAnswer && givenAnswer === 'false')
    );
  }

  /*
  The render method gets called automatically every time the state inside
  of the component changes and anytime the component's props change
  (more accurately, anytime React perceives that those props have changed,
  regardless of whether they are actually different (e.g. binding `this` inside
  of the render method causes React to think that the props are different).
  */
  render() {
    const { value1, value2, value3, proposedAnswer } = this.state;
    return (
      // without this '(', JS will automatically put a ';' after 'return.'
      <div>
        <div className="equation">
          <p className="text">{`${value1} + ${value2} + ${value3} = ${proposedAnswer}`}</p>
        </div>
        <button onClick={this.handleAnswer} name="true">
          True
        </button>
        <button name="false" onClick={this.handleAnswer}>
          False
        </button>
      </div>
    );
  }
}

export default Game;
