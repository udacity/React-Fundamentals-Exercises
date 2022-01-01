import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Score from "./Score";
import Game from "./Game";

const App = () => {
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [numQuestions, setNumQuestions] = useState(0);

  const handleAnswer = (answerWasCorrect) => {
    if (answerWasCorrect) {
      setCorrectAnswer(correctAnswer + 1);
    }
    setNumQuestions(numQuestions + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">ReactND - Coding Practice</h1>
      </header>
      <div className="game">
        <h2>Mental Math</h2>
        <Game handleAnswer={handleAnswer} />
        <Score numCorrect={correctAnswer} numQuestions={numQuestions} />
      </div>
    </div>
  );
};

export default App;
