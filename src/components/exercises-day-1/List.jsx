import React, { useState } from "react";
// Crea un componente TodoList que permita:

// Escribir una tarea en un input.

// Agregarla a una lista con un botón “Agregar”.

// Eliminar una tarea al hacer clic en un botón “❌” al lado de ella.

export default function List() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function addItem(e) {
    e.preventDefault()
    if(inputValue.trim() === "") return
    const newId = Math.floor(Math.random() * 9999);

    const newItem = { name: inputValue, id: newId };

    setItems([...items, newItem]);
    setInputValue("")
  }

   function deleteItem(itemId) {
    const filteredItems = items.filter(item => item.id !== itemId)

    setItems(filteredItems)
  }
  return (
    <div>
      <form onSubmit={addItem}>
        <label>Item Name</label>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} <button onClick={() => deleteItem(item.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
