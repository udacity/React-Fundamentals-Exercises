import { usePreferences } from "../context/PreferencesContext";

export default function Line({ number, text }) {
  const { largeText, showLineNumbers } = usePreferences();

  return (
    <p style={{ margin: "6px 0", fontSize: largeText ? 20 : 14 }}>
      {showLineNumbers ? `${number}. ` : ""}
      {text}
    </p>
  );
}
