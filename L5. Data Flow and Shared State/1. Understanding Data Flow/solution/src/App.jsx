import { useState } from "react";
import CounterControls from "./components/CounterControls";
import CounterDisplay from "./components/CounterDisplay";
import StepInput from "./components/StepInput";

export default function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  function handleIncrement() {
    setCount((c) => c + step);
  }

  function handleDecrement() {
    setCount((c) => Math.max(0, c - step));
  }

  function handleReset() {
    setCount(0);
  }

  function handleStepChange(nextStep) {
    setStep(nextStep);
  }

  const nextValue = count + step;

  return (
    <div
      style={{
        fontFamily: "system-ui, sans-serif",
        padding: 24,
        maxWidth: 480,
      }}
    >
      <h2 style={{ marginTop: 0 }}>Data Flow Counter</h2>

      <CounterDisplay count={count} />

      <div style={{ marginTop: 12 }}>
        <StepInput step={step} onStepChange={handleStepChange} />
      </div>

      <p style={{ marginTop: 12, color: "#555" }}>Next value: {nextValue}</p>

      <div style={{ marginTop: 12 }}>
        <CounterControls
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onReset={handleReset}
        />
      </div>
    </div>
  );
}
