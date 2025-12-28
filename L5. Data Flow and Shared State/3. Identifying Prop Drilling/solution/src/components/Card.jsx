export default function Card({ children }) {
  return (
    <div style={{ padding: 12, border: "1px solid #ddd", borderRadius: 8 }}>
      {children}
    </div>
  );
}
