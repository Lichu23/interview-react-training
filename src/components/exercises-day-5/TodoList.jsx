import React, { useState } from "react";

// Desarrollar un componente funcional en React que:

// Liste tareas.

// Permita agregar nuevas tareas.

// Permita marcar/desmarcar tareas como completadas.

// (Bonus) Guarde las tareas en localStorage.

export default function TodoList() {
  const [tareas, setTareas] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function addTarea(e) {
    e.preventDefault();
    if (inputValue.trim() === "") return;

    const newId = new Date();
    const newTask = { name: inputValue, id: newId, completed: false };

    setTareas([...tareas, newTask]);
    setInputValue("");
  }

  function completeTask(tareaId) {
    setTareas((prev) =>
      prev.map((tarea) =>
        tarea.id === tareaId ? { ...tarea, completed: !tarea.completed } : tarea
      )
    );
  }
  return (
    <div>
      <h1>TodoList</h1>
      <form onSubmit={addTarea}>
        <label>Nombre tarea</label>
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button>Submit</button>
      </form>

      <ul>
        {tareas.map((tarea) => (
          <li
            style={{ textDecoration: tarea.completed ? "line-through" : "" }}
            onClick={() => completeTask(tarea.id)}
            key={tarea.id}
          >
            {tarea.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
