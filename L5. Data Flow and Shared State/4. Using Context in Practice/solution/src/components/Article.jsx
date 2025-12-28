import Line from "./Line";

export default function Article() {
  const lines = [
    "React data flows down through props.",
    "Events flow up through callback props.",
    "Context can reduce prop drilling for shared values.",
    "Use Context intentionally, not everywhere.",
  ];

  return (
    <div>
      {lines.map((text, idx) => (
        <Line key={idx} number={idx + 1} text={text} />
      ))}
    </div>
  );
}
