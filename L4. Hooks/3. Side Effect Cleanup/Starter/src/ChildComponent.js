import React, { useState, useEffect } from "react";

function ChildComponent() {
  const [color, setColor] = useState("red");

  useEffect(() => {
    setTimeout(() => setColor("green"), 3000);
  });

  return <p style={{ color }}>{color}</p>;
}
export default ChildComponent;
