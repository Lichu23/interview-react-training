import React, { useState } from "react";

export default function Count() {
  const [count, setCount] = useState(0);
  const [error, setError] = useState("");

  function sumCount() {
    setCount((prevState) => prevState + 1);
    setError("");
  }

  function substractCount() {
    if (count <= 0) return setError("No puedes restar mas que 0");
    setCount((prevState) => prevState - 1);
    setError("");
  }
  return (
    <div>
      <h1>Count:{count}</h1>
      {error && <p>{error}</p>}
      <button onClick={sumCount}>+</button>
      <button onClick={substractCount}>-</button>
    </div>
  );
}
