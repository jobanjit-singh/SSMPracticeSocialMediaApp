import React, { useEffect, useState } from "react";

export default function LandingPage() {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  useEffect(() => {
    if (counter % 2 == 0) {
      alert("even");
    }
    console.log("Done");
    return () => {};
  }, [counter, counter2]);

  return (
    <div>
      <p>{counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <hr />
      <p>{counter2}</p>
      <button onClick={() => setCounter2(counter2 + 1)}>Increment 2</button>
    </div>
  );
}
