import React, { useState } from "react";

export default function TaskList() {
  const [tareas, setTareas] = useState([
    { id: 1, name: "Hola", checked: false },
    { id: 2, name: "Hola 2", checked: false },
    { id: 3, name: "Hola3", checked: false },
  ]);

  const [inputValue, setInputValue] = useState("");

  function addTarea(e) {
    e.preventDefault();

    if (inputValue.trim() === "") return;

    const newId = new Date();

    const newTarea = { id: newId, name: inputValue, checked: false };

    setTareas([...tareas, newTarea]);
    setInputValue("");
  }

  function checkedTask(tareaId) {
    setTareas((prevTareas) =>
      prevTareas.map((tarea) =>
        tarea.id === tareaId ? { ...tarea, checked: !tarea.checked } : tarea
      )
    );
  }

  const pendingTasks = tareas.filter((tarea) => tarea.checked === false)
  return (
    <div>
      <h1>TaskList</h1>
      <p>Hay {pendingTasks.length} tareas pendientes</p>
      <form onSubmit={addTarea}>
        <label>Nombre tare</label>
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button>Agregar</button>
      </form>
      <ul>
        {tareas.map((tarea) => (
          <li
            onClick={() => checkedTask(tarea.id)}
            style={{ textDecoration: tarea.checked ? "line-through" : "" }}
            key={tarea.id}
          >
            {tarea.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
