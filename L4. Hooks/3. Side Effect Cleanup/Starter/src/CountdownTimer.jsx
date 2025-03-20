import React, { useState, useEffect } from 'react';

function CountdownTimer({ startTime }) {
  const [timeLeft, setTimeLeft] = useState(startTime);
  
  useEffect(() => {
    console.log('Timer started');
    setTimeLeft(startTime);
    
    // TODO: This creates a memory leak! Fix it by implementing proper cleanup.
    const intervalId = setInterval(() => {
      console.log('Tick!');
      setTimeLeft(prevTime => {
        if (prevTime <= 1) {
          console.log('Timer complete!');
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);
    
    // TODO: Add cleanup function here
    
  }, [startTime]);
  
  return (
    <div className="timer">
      <h2>Time Remaining</h2>
      <div className="time-display">{timeLeft}</div>
      <p>The timer will count down to zero.</p>
      
      <div className="implementation-check">
        {timeLeft === 0 ? (
          <p className="complete">Countdown complete!</p>
        ) : (
          <p className="counting">Counting down...</p>
        )}
      </div>
    </div>
  );
}

export default CountdownTimer;