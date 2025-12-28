export default function MessageStats({ message }) {
  const count = message.length;
  const isValid = count >= 5 && count <= 50;

  return (
    <div style={{ padding: 12, border: "1px solid #ddd", borderRadius: 8 }}>
      <h3 style={{ marginTop: 0 }}>Stats</h3>
      <p style={{ margin: "6px 0" }}>Characters: {count}</p>
      <p style={{ margin: "6px 0" }}>
        Status: {isValid ? "✅ Valid" : "❌ Invalid"}
      </p>
      <p style={{ margin: "6px 0", color: "#666" }}>Valid length: 5–50</p>
    </div>
  );
}
