import { useState } from "react";
import TextInput from "./components/TextInput";
import MessagePreview from "./components/MessagePreview";
import MessageStats from "./components/MessageStats";

export default function App() {
  const [message, setMessage] = useState("");

  function handleClear() {
    setMessage("");
  }

  return (
    <div
      style={{
        fontFamily: "system-ui, sans-serif",
        padding: 24,
        maxWidth: 640,
      }}
    >
      <h2 style={{ marginTop: 0 }}>Lift State Up: Message Composer</h2>

      <TextInput value={message} onChange={setMessage} />

      <div
        style={{
          marginTop: 12,
          display: "flex",
          gap: 12,
          alignItems: "flex-start",
        }}
      >
        <div style={{ flex: 1 }}>
          <MessagePreview message={message} />
        </div>

        <div style={{ width: 220 }}>
          <MessageStats message={message} />
          <button
            onClick={handleClear}
            style={{ marginTop: 12, width: "100%" }}
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}
