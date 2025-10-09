import React, { useState } from "react";
// Muestra la lista en pantalla usando .map().

// Cuando el usuario haga clic en un elemento:

// El elemento debe marcarse como seleccionado (por ejemplo, con un color diferente o negrita).

// Debe mostrarse debajo de la lista el texto:
// "Seleccionaste: [nombre del framework]".

// Si el usuario vuelve a hacer clic en el mismo elemento, debe deseleccionarse (quedando todo sin selección).

// No se puede usar ninguna librería externa (solo React y CSS inline o classes si querés).

export default function SelectableList() {
  const [message, setMessage] = useState("");
  const [selectedItem, setSelectedItem] = useState("");
  const items = ["React", "Vue", "Angular", "Svelte"];

  function selectItem(item) {
    if (item === selectedItem) {
      setSelectedItem("");
      setMessage(""); // limpia mensaje si deselecciona
    } else {
      setSelectedItem(item);
      setMessage(`Seleccionaste: ${item}`);
    }
  }

  return (
    <div>
      <h1>SelectableList</h1>

      <ul className="">
        {items.map((item) => (
          <li
          style={{color: selectedItem === item ? "blue" : ""}}
            onClick={() => selectItem(item)}
            key={item}
          >
            {item}
          </li>
        ))}
      </ul>

      {selectedItem && message}
    </div>
  );
}
