import { useState } from "react";
import Section from "./components/Section";
import DeepButton from "./components/DeepButton";

export default function App() {
  const [theme, setTheme] = useState("light");

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", padding: 24 }}>
      <h2 style={{ marginTop: 0 }}>Prop Drilling (Refactor)</h2>

      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        style={{ marginBottom: 16 }}
      >
        Toggle theme
      </button>

      <Section>
        <DeepButton theme={theme} />
      </Section>
    </div>
  );
}
