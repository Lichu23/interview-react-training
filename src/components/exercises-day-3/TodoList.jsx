import React, { useState } from "react";
// Debe haber un input controlado para escribir una nueva tarea.

// Un botón “Agregar” que añada la tarea a una lista (si no está vacía).

// Cada tarea se mostrará en una lista con un botón “❌” al lado para eliminarla.

// Si el input está vacío al intentar agregar, mostrar el mensaje:

// “Por favor, escribe una tarea antes de agregar.”

// Si no hay tareas en la lista, mostrar:

// “No hay tareas aún 💤”

export default function TodoList() {
  const [inputValue, setInputValue] = useState("");
  const [tareas, setTareas] = useState([]);
  const [message, setMessage] = useState("");

  function addTarea(e) {
    e.preventDefault();
    if (inputValue.trim() === "") {
      setMessage("Por favor, escribe una tarea antes de agregar.");
      return;
    }

    const newId = Math.floor(Math.random() * 99999);

    const nuevaTarea = { name: inputValue, id: newId };

    setTareas([...tareas, nuevaTarea]);
    setInputValue("");
    setMessage("");
  }

  function deleteTarea(tareaId) {
     setTareas((prevState) =>
      prevState.filter((tarea) => tarea.id !== tareaId)
    );
  }
  return (
    <div>
      <h1>TodoList</h1>

      <form onSubmit={addTarea}>
        <label>Agregar Tarea</label>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        {message && <p>{message}</p>}
        <button>Agregar</button>
      </form>

      {tareas.length === 0 ? (
        <p>No hay tareas aun</p>
      ) : (
        <ul>
          {tareas.map((tarea) => (
            <li key={tarea.id}>
              {tarea.name}{" "}
              <button onClick={() => deleteTarea(tarea.id)}>❌</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
