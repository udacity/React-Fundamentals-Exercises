const Score = ({ numCorrect, numQuestions }) => {
  return (
    <p className="text">
      Your Score: {numCorrect}/{numQuestions}
    </p>
  );
};

export default Score;
