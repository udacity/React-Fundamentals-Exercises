import corgi from "./corgi.jpg";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <h2>Like this photo!</h2>
      <img src={corgi} alt="Corgi"></img>
      <p>Amount of likes: </p>
    </div>
  );
};

export default App;
