import Card from "./Card";

export default function Section({ theme }) {
  return (
    <div style={{ padding: 12, border: "1px solid #ddd", borderRadius: 8 }}>
      {/*
        TODO:
        Section does not use theme.
        It only passes it down.

        Refactor so Section does NOT accept theme anymore.
      */}
      <Card theme={theme} />
    </div>
  );
}
