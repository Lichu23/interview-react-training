import React, { useState } from "react";
// 📝 Enunciado

// Crea un componente en React llamado TodoList que:

// Muestre una lista de tareas.

// Permita agregar nuevas tareas con un input y un botón.

// Permita marcar tareas como completadas (que se vean tachadas o con estilo diferente).

// (Opcional bonus): Guarda la lista en localStorage para que se mantenga tras recargar la página.

export default function TodoList() {
  const [tareas, setTareas] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function addItem(e) {
    e.preventDefault();
    if (inputValue.trim() === "") return;
    const newId = new Date();

    const newTask = { name: inputValue, id: newId, completed: false };

    setTareas([...tareas, newTask]);
    setInputValue("");
  }

  function taskCompleted(tareaId) {
    return setTareas((prev) => prev.map((tarea) => tarea.id === tareaId ? {...tarea, completed: !tarea.completed} : tarea))
  }

  return (
    <div>
      <h1>TodoList</h1>

      <form onSubmit={addItem}>
        <label>Nombre de la Tarea</label>
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button>Submit</button>
      </form>

      <ul>
        {tareas.map((tarea) => (
          <li
            style={{  textDecoration: tarea.completed ? "line-through" : "" } }
            key={tarea.id}
            onClick={() => taskCompleted(tarea.id)}
          >
            {" "}
            {tarea.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
