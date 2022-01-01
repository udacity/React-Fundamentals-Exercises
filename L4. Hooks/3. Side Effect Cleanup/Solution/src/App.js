import { useState } from "react";
import ChildComponent from "./ChildComponent";
import "./App.css";

const App = () => {
  const [currentToggle, setCurrentToggle] = useState(true);

  const handleToggle = (event) => {
    event.preventDefault();
    setCurrentToggle(!currentToggle);
  };

  return (
    <div className="container">
      <p>
        If "Toggle" is clicked before the text below turns "green", you'll see
        an error in the console.
      </p>

      <p>(note: refresh the page to start over if green)</p>

      <button onClick={handleToggle}>Toggle</button>

      {currentToggle && <ChildComponent />}
    </div>
  );
};

export default App;
