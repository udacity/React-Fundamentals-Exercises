import CounterControls from "./components/CounterControls";
import CounterDisplay from "./components/CounterDisplay";
import StepInput from "./components/StepInput";

export default function App() {
  return (
    <div style={{ padding: 24 }}>
      <h2>Data Flow Counter</h2>

      <CounterDisplay />

      <StepInput />

      <CounterControls />
    </div>
  );
}
