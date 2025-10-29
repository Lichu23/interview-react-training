import React, { useEffect, useState } from "react";

export default function SearchUser() {
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState(users);
  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    async function getUsers() {
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error("Ocurrio un error al obtener los usuarios");
        }
        const data = await res.json();
        setUsers(data);
        setFilteredUsers(data);
        setError("");
      } catch (error) {
        console.log(error);
        setError(`Ocurrio un error al obtener los usuarios: ${error.message}`);
      } finally {
        setLoading(false);
      }
    }
    getUsers();
  }, []);

  useEffect(() => {
    const filter = users.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredUsers(filter);
  }, [search, users]);

  if (loading) return <p>Cargando usuarios...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <input value={search} onChange={(e) => setSearch(e.target.value)} />

      {filteredUsers.length === 0 ? (
        <p>No se encontraron parecidos</p>
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
