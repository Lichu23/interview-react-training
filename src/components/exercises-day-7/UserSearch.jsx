import React, { useEffect, useState } from "react";

export default function UserSearch() {
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [message, setMessage] = useState("");

  const usersData = [
    { id: 1, name: "Juan", country: "Argentina" },
    { id: 2, name: "María", country: "México" },
    { id: 3, name: "Pedro", country: "Chile" },
    { id: 4, name: "Lucía", country: "Perú" },
  ];
  const [filteredUser, setFilteredUsers] = useState(usersData);

  setTimeout(() => {
    setLoading(false);
  }, 2000);

  useEffect(() => {
    const filter = usersData.filter((user) => {
      return user.name.toLowerCase().includes(search.toLowerCase());
    });

    if (search.trim().length > 0 && filter.length === 0) {
      setMessage("No se encontraron parecidos");
    } else {
      setMessage("");
    }

    setFilteredUsers(filter);
  }, [search]);

  if (loading) return <p>Cargando usuarios...</p>;

  return (
    <>
      <h1>UserSearch</h1>

      <label>Search User</label>
      <input value={search} onChange={(e) => setSearch(e.target.value)} />
      {message && <p>{message}</p>}
      <ul>
        {filteredUser.map((user) => (
          <li key={user.id}>{user.name} <span>{user.country }</span></li>
        ))}
      </ul>
    </>
  );
}
