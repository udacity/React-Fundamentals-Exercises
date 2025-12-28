// TODO: Import usePreferences from the context file

export default function Line({ number, text }) {
  // TODO: Read largeText and showLineNumbers from context

  return (
    <p
      style={{
        margin: "6px 0",
        // TODO: Use largeText to control fontSize (e.g. 20 vs 14)
      }}
    >
      {/* TODO: If showLineNumbers is true, render `${number}. ` */}
      {/* TODO: Always render the text */}
    </p>
  );
}
