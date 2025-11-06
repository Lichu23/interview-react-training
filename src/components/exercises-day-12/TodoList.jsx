import React, { useState } from "react";

export default function TodoList() {
  const [inputValue, setInputValue] = useState("");
  const initialTodos = [
    { id: 1, text: "Aprender React", completed: false },
    { id: 2, text: "Practicar ejercicios", completed: true },
  ];
  const [tasks, setTasks] = useState(initialTodos);

  function addTask(e) {
    e.preventDefault();
    const newId = Math.floor(Math.random() * 999);

    const newItem = { id: newId, text: inputValue, completed: false };
    setTasks([...tasks, newItem]);
  }
  function deleteTask(itemId) {
    const filter = tasks.filter((item) => item.id !== itemId);
    setTasks(filter);
  }

  function completeTask(taskId) {
    setTasks((prev) =>
      prev.map((item) =>
        item.id === taskId ? { ...item, completed: !item.completed } : item
      )
    );
  }

  return (
    <>
      <form onSubmit={addTask}>
        <label>Todo</label>
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button>Submit</button>
      </form>

      {tasks.length === 0 ? (
        <p>No hay tasks aun</p>
      ) : (
        <ul>
          {tasks.map((item) => (
            <li
              onClick={() => completeTask(item.id)}
              style={{ textDecoration: item.completed ? "line-through" : "" }}
              key={item.id}
            >
              {item.text}{" "}
              <button onClick={() => deleteTask(item.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
