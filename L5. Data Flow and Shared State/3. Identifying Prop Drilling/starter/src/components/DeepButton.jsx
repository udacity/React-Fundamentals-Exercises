export default function DeepButton({ theme }) {
  const styles =
    theme === "dark"
      ? { background: "#111", color: "#fff", padding: 10, borderRadius: 8 }
      : { background: "#eee", color: "#111", padding: 10, borderRadius: 8 };

  return <button style={styles}>Theme: {theme}</button>;
}
