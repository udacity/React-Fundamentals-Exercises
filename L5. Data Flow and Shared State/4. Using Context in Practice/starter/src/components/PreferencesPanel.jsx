// TODO: Import usePreferences from the context file

export default function PreferencesPanel() {
  // TODO: Read values/functions from context:
  // largeText, showLineNumbers, toggleLargeText, toggleLineNumbers

  return (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
      {/* TODO: Wire this button to toggleLargeText */}
      <button>Large Text: {/* TODO: show ON/OFF based on largeText */}</button>

      {/* TODO: Wire this button to toggleLineNumbers */}
      <button>
        Line Numbers: {/* TODO: show ON/OFF based on showLineNumbers */}
      </button>
    </div>
  );
}
