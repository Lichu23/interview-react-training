import React, { useEffect, useState } from "react";
// Al montarse el componente (useEffect), debe hacer una llamada fetch a la API:

// Mientras los datos se cargan, muestra:

// “Cargando usuarios…”

// Si ocurre un error en la carga, muestra:

// “Error al cargar usuarios 😢”

// Si la carga es exitosa, muestra una lista con:

// Nombre del usuario

// Email del usuario

// Cada usuario debe tener una key única.

export default function UserFetcher() {
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    async function getUsers() {
      try {
        const res = await fetch(url);
        if (!res.ok) {
          setMessage("Error al cargar usuarios 😢");
          return
        }
        const data = await res.json();
        setUsers(data);
      } catch (error) {
        setMessage(`Error al cargar usuarios 😢 `);
        console.log(`Ocurrio un error:${error} `);
      } finally {
        setLoading(false);
      }
    }

    getUsers();
  }, []);

  if (loading) return <p>Cargando usuarios...</p>;

  return (
    <div>
      <h1>UserFetcher</h1>

      {users.length === 0 ? (
        <p>No hay usuarios</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name} <span>{user.email}</span>
            </li>
          ))}
        </ul>
      )}
      {message && <p>{message}</p>}
    </div>
  );
}
