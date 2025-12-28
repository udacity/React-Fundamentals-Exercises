import { usePreferences } from "../context/PreferencesContext";

export default function PreferencesPanel() {
  const { largeText, showLineNumbers, toggleLargeText, toggleLineNumbers } =
    usePreferences();

  return (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
      <button onClick={toggleLargeText}>
        Large Text: {largeText ? "ON" : "OFF"}
      </button>
      <button onClick={toggleLineNumbers}>
        Line Numbers: {showLineNumbers ? "ON" : "OFF"}
      </button>
    </div>
  );
}
