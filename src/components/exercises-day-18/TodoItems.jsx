import React, { useEffect, useState } from "react";
// 3. Fetch and Display Todo Items (≈15 minutes)

// Goal: Test basic API usage, async handling, error states.

// Requirements:

// Use the public JSONPlaceholder endpoint:
// https://jsonplaceholder.typicode.com/todos?_limit=5

// On mount, fetch the data.

// Display each todo:

// title

// completion status (✔ or ✘)

// Add:

// Loading state

// Error state (show an error message if fetch fails)

// What it evaluates:
// useEffect, async data fetching, conditional rendering.
export default function TodoItems() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const url = "https://jsonplaceholder.typicode.com/todos?_limit=5";

  useEffect(() => {
    async function getTodos() {
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error("Hubo un error al obtener la data");
        }
        const data = await res.json();
        setTodos(data);
      } catch (error) {
        setError(`Ocurrio un error al obtener los datos: ${error.message}`);
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    getTodos();
  }, []);

  if(error) return <p>{error}</p>
  if(loading) return <p>Loading...</p>
  return (
    <>
      <h1>Todo List</h1>

      {todos.length === 0 ? (
        <p>Aun no existe ningun todo</p>
      ) : (
        <ul>
          {todos.map((todo) => (
            <li
              style={{
                textDecoration: todo.completed === true ? "line-through" : "",
              }}
              key={todo.id}
            >
              {todo.title} <span>{todo.completed ? "✔" : "✘"}</span>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
