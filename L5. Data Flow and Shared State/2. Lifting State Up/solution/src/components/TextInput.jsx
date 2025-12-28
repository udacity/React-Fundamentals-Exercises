export default function TextInput({ value, onChange }) {
  function handleChange(e) {
    onChange(e.target.value);
  }

  return (
    <label style={{ display: "block" }}>
      <div style={{ marginBottom: 6 }}>Message</div>
      <textarea
        value={value}
        onChange={handleChange}
        rows={4}
        placeholder="Type a short message…"
        style={{ width: "100%", padding: 10, borderRadius: 8 }}
      />
    </label>
  );
}
