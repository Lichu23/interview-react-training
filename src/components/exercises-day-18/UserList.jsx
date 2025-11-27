import React, { useEffect, useState } from "react";
// 1. Build a Searchable User List (≈15 minutes)

// Goal: Test state management, filtering, and rendering lists.

// Requirements:

// You’re given a hardcoded array of user objects: { id, name, email }.

// Build a component that:

// Displays the list of users.

// Includes an input field to filter users by name in real time.

// Filtering should be case-insensitive.

// Bonus (if time left): highlight the matching part in bold.
export default function UserList() {
  const [inputValue, setInputValue] = useState("");
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "lichu",
      email: "lichu@correo.com",
    },
    {
      id: 2,
      name: "pepe",
      email: "pepe@correo.com",
    },
    {
      id: 3,
      name: "gonzalo",
      email: "gonzalo@correo.com",
    },
  ]);


  const filteredList = users.filter((user) =>
    user.name.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <>
      <h1>UserList</h1>

      <label htmlFor="search">Search user</label>
      <input
        autoFocus
        id="search"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      {filteredList.length === 0 ? (
        <p>No hay ningun parecido</p>
      ) : (
        <ul>
          {filteredList.map((user) => (
            <li key={user.id}>
              <p>{user.name}</p> {user.email}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
