import React, { useEffect, useState } from "react";

export default function SearchUsers() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState(users);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [inputValue, setInputValue] = useState("");

  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    async function getUsers() {
      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error("Error al cargar usuarios");
        const data = await res.json();
        setUsers(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    getUsers();
  }, []);

  useEffect(() => {
    const filter = users.filter((user) => {
      return user.name.toLowerCase().includes(inputValue.toLowerCase());
    });

    setFilteredUsers(filter);
  }, [inputValue, users]);

  if (loading) return <p>Obteniendo usuarios...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>SearchUsers</h1>
      <label htmlFor="search">Buscar Usuario</label>
      <input
        id="search"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      {filteredUsers.length === 0 ? (
        <p>No se encontraron resultados 😢</p>
      ) : (
        <ul>
          {filteredUsers.map((user) => (
            <li key={user.id}>
              {user.name} {user.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
