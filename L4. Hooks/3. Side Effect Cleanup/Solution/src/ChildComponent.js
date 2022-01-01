import React, { useState, useEffect } from "react";

function ChildComponent() {
  const [color, setColor] = useState("red");

  // An alternative solution: move `color` state to the parent component
  // and pass down that data as a prop to <ChildComponent />.
  // Since <App /> (in this example) is always mounted to the DOM,
  // no side effect cleanup would be necessary.

  useEffect(() => {
    let unmounted = false;

    setTimeout(() => {
      if (!unmounted) {
        setColor("green");
      }
    }, 3000);

    return () => {
      unmounted = true;
    };
  }, []);

  return <p style={{ color }}>{color}</p>;
}
export default ChildComponent;
