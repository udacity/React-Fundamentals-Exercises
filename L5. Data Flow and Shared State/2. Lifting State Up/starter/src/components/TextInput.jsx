export default function TextInput() {
  return (
    <label style={{ display: "block" }}>
      <div style={{ marginBottom: 6 }}>Message</div>
      <textarea
        rows={4}
        placeholder="Type a short message…"
        style={{ width: "100%", padding: 10, borderRadius: 8 }}
      />
    </label>
  );
}
