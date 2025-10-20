import React, { useEffect, useState } from "react";
// Crea un componente React llamado UserList que:

// Obtenga datos de la API pública:

// https://jsonplaceholder.typicode.com/users

// Muestre una lista con el nombre y el correo de cada usuario.

// Incluya un input para buscar usuarios por nombre.

// Muestre estados de:

// ⏳ Cargando...

// ❌ Error al cargar

// 🫥 No hay resultados (si el filtro no encuentra coincidencias).

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState(users);
  const [search, setSearch] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [cargando, setCargando] = useState(false);
  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    async function getUsers() {
      try {
        setCargando(true);
        const res = await fetch(url);
        if (!res.ok) {
          return setError("Ocurrio un error al obtener los usuarios");
        }
        const data = await res.json();

        setUsers(data);
      } catch (error) {
        setError(error);
        console.log(error);
      } finally {
        setCargando(false);
      }
    }
    getUsers();
  }, []);

  useEffect(() => {
    const filterUsers = users.filter((user) => {
      return user.name.toLowerCase().includes(search.toLowerCase());
    });

    if (filterUsers.length === 0 && search !== "") {
       setMessage("No se encontraron parecidos");
    } else {
        setMessage("")
    }
    setFilteredUsers(filterUsers);
  }, [search, users]);

  if (cargando) return <p>Cargando usuarios...</p>;
  if (!users) return <p>No se encontraron usuarios</p>;
  if (error) return <p>Ocurrio un error al obtener los usuarios</p>;
  return (
    <div>
      <h1>UserList</h1>
      <input value={search} onChange={(e) => setSearch(e.target.value)} />
      {message && <p>{message}</p>}
      {
        <ul>
          {filteredUsers.map((user) => (
            <li key={user.id}>
              {user.name} <span>{user.email}</span>
            </li>
          ))}
        </ul>
      }
    </div>
  );
}
