export default function StepInput({ step, onStepChange }) {
  function handleChange(e) {
    const raw = e.target.value;
    const parsed = Number(raw);

    if (!Number.isFinite(parsed)) return;
    onStepChange(Math.max(1, parsed));
  }

  return (
    <label style={{ display: "flex", gap: 8, alignItems: "center" }}>
      <span>Step:</span>
      <input
        type="number"
        min="1"
        value={step}
        onChange={handleChange}
        style={{ width: 80, padding: 6 }}
      />
    </label>
  );
}
