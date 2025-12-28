export default function MessagePreview({ message }) {
  return (
    <div style={{ padding: 12, border: "1px solid #ddd", borderRadius: 8 }}>
      <h3 style={{ marginTop: 0 }}>Preview</h3>
      <p style={{ marginBottom: 0, whiteSpace: "pre-wrap" }}>
        {message ? (
          message
        ) : (
          <span style={{ color: "#777" }}>(Nothing yet)</span>
        )}
      </p>
    </div>
  );
}
