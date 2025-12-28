import { useState } from "react";
import Section from "./components/Section";

export default function App() {
  const [theme, setTheme] = useState("light");

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", padding: 24 }}>
      <h2 style={{ marginTop: 0 }}>Prop Drilling Exercise</h2>

      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        style={{ marginBottom: 16 }}
      >
        Toggle theme
      </button>

      {/*
        TODO:
        Currently, theme is being passed down through components
        that don't actually use it.

        Refactor this so that:
        - Only DeepButton receives the theme prop
        - Section and Card no longer accept or pass theme
        - You do NOT use Context
      */}
      <Section theme={theme} />
    </div>
  );
}
