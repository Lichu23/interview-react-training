import React, { useState } from "react";
//{ id: number, title: string, completed: boolean }

export default function TodoApp() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");
  console.log(inputValue);
  const itemsCompleted = items.filter((item) => item.completed === true);
  function addItem() {
    const id = Math.floor(Math.random() * 99999);

    const newItem = { id: id, title: inputValue, completed: false };

    if (inputValue.trim().length === 0) return;
    setItems([...items, newItem]);
    setInputValue("");
  }

  function isCompleted(itemId) {
    setItems((prevState) =>
      prevState.map((item) =>
        item.id === itemId ? { ...item, completed: !item.completed } : item
      )
    );
  }

  return (
    <div>
      <label>Add item</label>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={addItem}>Submit</button>

      {items.length === 0 ? (
        <p>Aun no hay items</p>
      ) : (
        <ul>
          {items.map((item) => (
            <li
              style={{ textDecoration: item.completed ? "line-through" : "" }}
              key={item.id}
              onClick={() => isCompleted(item.id)}
            >
              {item.title}
            </li>
          ))}
        </ul>
      )}
      <p>
        Completed: {itemsCompleted.length} / Total: {items.length}
      </p>
    </div>
  );
}
