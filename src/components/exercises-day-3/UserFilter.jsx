import React, { useEffect, useState } from "react";

export default function UserFilter() {
  const users = ["Ana", "Luis", "Carlos", "Lucía", "María"];
  const [inputValue, setInputValue] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(users);

  useEffect(() => {
    function filterUsers() {
      const filter = users.filter((user) =>
        user.toLowerCase().includes(inputValue.toLowerCase())
      );

      setFilteredUsers(filter);
    }
    filterUsers();
  }, [inputValue]);

  return (
    <div>
      <h1>UserFilter</h1>
      <label>Buscar</label>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      {filteredUsers.length === 0 ? (
        <p>No se encontraron resultados 😢</p>
      ) : (
        <ul>
          {filteredUsers.map((user) => (
            <li key={user}>{user}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
