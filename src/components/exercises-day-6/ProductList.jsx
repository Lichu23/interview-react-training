import React, { useEffect, useState } from "react";
// Este componente debe:

// Mostrar todos los productos en una lista (nombre y precio).

// Tener un input numérico que permita al usuario escribir un precio mínimo.

// Al cambiar ese valor, se deben mostrar solo los productos cuyo precio sea mayor o igual al valor ingresado.

// No necesitas estilos, pero asegúrate de que el renderizado sea claro.

export default function ProductList() {
  const products = [
    { id: 1, name: "Laptop", price: 1200 },
    { id: 2, name: "Mouse", price: 25 },
    { id: 3, name: "Keyboard", price: 75 },
    { id: 4, name: "Monitor", price: 300 },
  ];

  const [filteredProducts, setFilteredProducts] = useState(products);
  const [inputValue, setinputValue] = useState("");

  useEffect(() => {
    const filter = products.filter((product) => {
      return product.price >= inputValue;
    });


    setFilteredProducts(filter);
  }, [inputValue, products]);

  return (
    <div>
      <h1>ProductList</h1>

      <label>Min Price</label>
      <input
        value={inputValue}
        onChange={(e) => setinputValue(e.target.value)}
        type="number"
      />
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            {product.name} <span>${product.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
