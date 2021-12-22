import React from 'react';

/*
This can be a Stateless Functional Component because this component just renders
the props that are passed to it. It's a good practice to make components that
are solely concerned with a component's presentation as opposed to a component's
logic (presentational components) into stateless functional components.
*/
const Score = props => {
  return (
    <p className="text">
      Your Score: {props.numCorrect}/{props.numQuestions}
    </p>
  );
};

export default Score;
