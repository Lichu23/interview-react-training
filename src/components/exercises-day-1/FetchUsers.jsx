import React, { use, useEffect, useState } from "react";
// Objetivo: Crear un componente FetchUsers que:

// Al montarse, haga una llamada a la API de usuarios de prueba:
// https://jsonplaceholder.typicode.com/users

// Mientras se cargan los datos, muestre “Cargando usuarios…”.

// Si ocurre un error, muestre “Error al cargar usuarios”.

// Cuando se carguen correctamente, muestre la lista de usuarios con su nombre y email.

// Cada usuario debe tener una clave única (key) para el renderizado.

export default function FetchUsers() {
  const [users, setUsers] = useState([]);

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    async function getUsers() {
      try {
        const res = await fetch(url);
        const data = await res.json();
        if (!res.ok) {
          console.log("Error al cargar usuarios");
        }
        setUsers(data);
        setLoading(false);
      } catch (error) {
        setError("Error al cargar usuarios");
        console.log(`Error: ${error}`);
      } finally {
        setLoading(false);
      }
    }
    getUsers();
  }, []);
  return (
    <div className="w-full">
      <h1>FetchUsers</h1>
      {error && <p>{error}</p>}
      {loading ? (
        <p>Obteniendo usuarios...</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li className=" gap-5" key={user.id}>
              <p>Name: {user.name}</p> <p>Email: {user.email}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
