import DeepButton from "./DeepButton";

export default function Card({ theme }) {
  return (
    <div style={{ padding: 12, border: "1px solid #ddd", borderRadius: 8 }}>
      {/*
        TODO:
        Card also does not use theme.
        It only forwards it.

        Refactor so Card does NOT accept theme anymore.
      */}
      <DeepButton theme={theme} />
    </div>
  );
}
