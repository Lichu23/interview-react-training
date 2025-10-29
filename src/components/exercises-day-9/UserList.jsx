import { useEffect, useState } from "react";
import UserCard from "./UserCard";

export default function UserList() {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  const [filteredUsers, setFilteredUsers] = useState(users);

  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    async function getUsers() {
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error(`Ocurrio un error:${res}`);
        }
        const data = await res.json();
        setUsers(data);
        setFilteredUsers(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    getUsers();
  }, []);

  useEffect(() => {
    const filterUser = users.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredUsers(filterUser);
  }, [search, users]);

  if (loading) return <p>Cargando usuarios...</p>;

  return (
    <>
      <h1>Mostrando {filteredUsers.length} usuarios</h1>

      <input
        placeholder="Buscar usuario por nombre..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {filteredUsers.length === 0 ? (
        <p>No se encontraron usuarios con ese nombre</p>
      ) : (
        <ul>
          {filteredUsers.map((user) => (
            <UserCard user={user} />
          ))}
        </ul>
      )}
    </>
  );
}
