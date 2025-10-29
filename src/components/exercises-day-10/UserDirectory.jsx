import React, { useEffect, useState } from "react";

export default function UserDirectory() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setloading] = useState(true);
  const [error, setError] = useState("");
  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    async function getUsers() {
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error("Ocurrio un error al obtener los datos");
        }
        const data = await res.json();
        setUsers(data);
        setFilteredUsers(data);
      } catch (error) {
        setError(error.message);
        console.log(error);
      } finally {
        setloading(false);
      }
    }
    getUsers();
  }, []);

  useEffect(() => {

    if(search.trim() === "") {
        setFilteredUsers(users)
        return
    }

    const filter = users.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );

    setFilteredUsers(filter);
  }, [search, users]);

  if (loading) return <p>Cargando usuarios...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <label>Search User</label>
      <input value={search} onChange={(e) => setSearch(e.target.value)} />

      {filteredUsers.length === 0 ? (
        <p>No se encontraron coincidencias</p>
      ) : (
        <ul>
          {filteredUsers.map((user) => (
            <li key={user.id}>
              {user.name} {user.city} {user.email}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
