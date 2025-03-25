import React, { useState } from 'react';
import CountdownTimer from './CountdownTimer';
import './App.css';

function App() {
  const [showTimer, setShowTimer] = useState(true);
  const [startTime, setStartTime] = useState(10);
  
  return (
    <div className="App">
      <h1>Countdown Timer</h1>
      
      <div className="controls">
        <div>
          <label>Starting seconds: </label>
          <input 
            type="number" 
            min="1" 
            max="60" 
            value={startTime} 
            onChange={(e) => setStartTime(parseInt(e.target.value))}
          />
        </div>
        
        <button onClick={() => setShowTimer(!showTimer)}>
          {showTimer ? 'Hide Timer' : 'Show Timer'}
        </button>
      </div>
      
      {showTimer && <CountdownTimer startTime={startTime} />}
      
      <div className="instructions">
        <h3>Exercise Instructions:</h3>
        <p>The current implementation has a memory leak. If you click "Hide Timer" while the countdown is running, the timer continues in the background.</p>
        <p>Your task: Implement proper cleanup in the CountdownTimer component to stop the interval when the component is unmounted.</p>
        <p>Check the console for messages that will tell you if your implementation is correct.</p>
      </div>
    </div>
  );
}

export default App;