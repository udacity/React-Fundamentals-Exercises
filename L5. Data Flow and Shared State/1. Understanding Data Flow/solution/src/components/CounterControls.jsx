export default function CounterControls({ onIncrement, onDecrement, onReset }) {
  return (
    <div style={{ display: "flex", gap: 8 }}>
      <button onClick={onDecrement}>- Step</button>
      <button onClick={onIncrement}>+ Step</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
}
