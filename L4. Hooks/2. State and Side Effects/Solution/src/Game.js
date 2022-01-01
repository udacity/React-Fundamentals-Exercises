import { useState, useEffect } from "react";

const Game = (props) => {
  const [value1, setValue1] = useState(null);
  const [value2, setValue2] = useState(null);
  const [value3, setValue3] = useState(null);
  const [proposedAnswer, setProposedAnswer] = useState(null);

  // Calls makeNewQuestion() when the component has been mounted, then sets values
  useEffect(() => {
    let valuesArray = makeNewQuestion();
    setValue1(valuesArray[0]);
    setValue2(valuesArray[1]);
    setValue3(valuesArray[2]);
    setProposedAnswer(valuesArray[3]);
  }, []);

  const makeNewQuestion = () => {
    const value1 = Math.floor(Math.random() * 100);
    const value2 = Math.floor(Math.random() * 100);
    const value3 = Math.floor(Math.random() * 100);

    const proposedAnswer =
      Math.floor(Math.random() * 3) + (value1 + value2 + value3);

    return [value1, value2, value3, proposedAnswer];
  };

  const refresh = (newValuesArray) => {
    setValue1(newValuesArray[0]);
    setValue2(newValuesArray[1]);
    setValue3(newValuesArray[2]);
    setProposedAnswer(newValuesArray[3]);
  };

  const handleAnswer = (event) => {
    const newValuesArray = makeNewQuestion();
    refresh(newValuesArray);
    const answerWasCorrect = evaluateAnswer(event.target.name);
    props.handleAnswer(answerWasCorrect);
  };

  const evaluateAnswer = (givenAnswer) => {
    const corrAnswer = value1 + value2 + value3;

    return (
      (corrAnswer === proposedAnswer && givenAnswer === "true") ||
      (corrAnswer !== proposedAnswer && givenAnswer === "false")
    );
  };

  return (
    <div>
      <div className="equation">
        <p className="text">{`${value1} + ${value2} + ${value3} = ${proposedAnswer}`}</p>
      </div>
      <button onClick={handleAnswer} name="true">
        True
      </button>
      <button name="false" onClick={handleAnswer}>
        False
      </button>
    </div>
  );
};

export default Game;
