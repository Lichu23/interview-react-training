import React, { useState } from "react";
// Muestra cada producto con:

// Su nombre.
// Un contador que empieza en 0.
// Dos botones: “+” y “−”.

// Cada contador debe ser independiente (incrementar uno no afecta a los demás).

// No se permiten valores negativos (si el contador está en 0, no debe disminuir más).

export default function MultiCounter() {
  const [counts, setCounts] = useState({
    Manzanas: 0,
    Peras: 0,
    Bananas: 0,
  });

  function sumCounter(productName) {
    setCounts((prev) => ({
      ...prev,
      [productName]: prev[productName] + 1,
    }));
  }

  function decCount(productName) {
    setCounts((prev) => ({
      ...prev,
      [productName]: Math.max(prev[productName] - 1, 0),
    }));
  }
  const products = [
    { id: 1, name: "Manzanas" },
    { id: 2, name: "Peras" },
    { id: 3, name: "Bananas" },
  ];

  return (
    <div>
      <h1>MultiCounter</h1>

      <ul>
        {products.map((product) => (
          <li key={product.id}>
            Name:{product.name} Counter:{counts[product.name]}{" "}
            <button onClick={() => sumCounter(product.name)}>+</button>
            <button onClick={() => decCount(product.name)}>-</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
