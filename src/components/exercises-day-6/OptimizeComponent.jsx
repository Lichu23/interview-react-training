import React, { useState } from "react";

// ¿Qué sucede con los renders de los componentes Counter cuando haces clic en uno de los botones?
// (Por ejemplo, si presionas “Increment A”, ¿cuáles Counter se renderizan y por qué?)

// ¿Cómo podrías optimizar este código para que solo se renderice el contador correspondiente cuando cambie su valor?

const Counter = React.memo(({ label }) => {
  console.log("Render:", label);
  return (
    <div>
      <p>{label}</p>
    </div>
  );
});

export default function OptimizeComponent() {
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(0);
  const [countC, setCountC] = useState(0);

  return (
    <div>
    
      <button onClick={() => setCountA((prev) => prev + 1)}>Increment A</button>
      <button onClick={() => setCountB((prev) => prev + 1)}>Increment B</button>
      <button onClick={() => setCountC((prev) => prev + 1)}>Increment C</button>
        <p>C: {countC}</p>
      <Counter label={`A: ${countA}`} />
      <Counter label={`B: ${countB}`} />
    </div>
  );
}
