import Card from "./Card";

export default function Section({ children }) {
  return (
    <div style={{ padding: 12, border: "1px solid #ddd", borderRadius: 8 }}>
      <Card>{children}</Card>
    </div>
  );
}
