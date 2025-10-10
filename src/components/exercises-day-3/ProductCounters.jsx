import React, { useState } from "react";

export default function ProductCounters() {
  const [counts, setCounts] = useState({
    Manzanas: 0,
    Bananas: 0,
    Peras: 0,
  });

  const food = [
    { id: 1, name: "Manzanas" },
    { id: 2, name: "Peras" },
    { id: 3, name: "Bananas" },
  ];

  function addProduct(productName) {
    setCounts((prev) => ({
      ...prev,
      [productName]: prev[productName] + 1,
    }));
  }

  function restProduct(productName) {
    setCounts((prev) => ({
      ...prev,
      [productName]: Math.max(prev[productName] - 1, 0),
    }));
  }

  return (
    <div>
      <h1>Counter</h1>

      {food.length === 0 ? (
        <p>No ha productos aun</p>
      ) : (
        <ul>
          {food.map((product) => (
            <li key={product.id}>
              {product.name} Counter: {counts[product.name]}{" "}
              <button onClick={() => addProduct(product.name)}>+</button>{" "}
              <button onClick={() => restProduct(product.name)}>-</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
