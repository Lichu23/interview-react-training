// import React from 'react'
// Crea un componente NameFilter que:

import { useEffect, useState } from "react";

// Tenga un input de texto.

// Muestre una lista de nombres filtrados en tiempo real según lo que escriba el usuario.

// Use este arreglo inicial:

// const names = ["Ana", "Luis", "Carlos", "Lucía", "María"];

// El filtro no debe ser sensible a mayúsculas/minúsculas.

// Si no hay coincidencias, muestra el mensaje:

// “No se encontraron resultados 😢”

export default function NameFilter() {
  const names = ["Ana", "Luis", "Carlos", "Lucía", "María"];
  const [inputValue, setInputValue] = useState("");
  const [filteredNames, setFilteredNames] = useState(names);

  useEffect(() => {
    const filterNames = names.filter((name) => {
      return name.toLowerCase().includes(inputValue.toLowerCase());
    });
    setFilteredNames(filterNames);
  }, [inputValue]);

  return (
    <div>
      <label>Search Name</label>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

        {filteredNames.length > 0 ? (
          <ul>
            {filteredNames.map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
        ) : (
          <p>No se encontraron resultados 😢</p>
        )}
    </div>
  );
}
