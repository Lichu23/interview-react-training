import React, { useEffect, useState } from "react";

export default function UserList() {
  const initialUsers = [
    { id: 1, name: "Ana", age: 25 },
    { id: 2, name: "Carlos", age: 32 },
    { id: 3, name: "Bea", age: 29 },
    { id: 4, name: "David", age: 22 },
  ];
  const [search, setSearch] = useState("");

  const [users, setUsers] = useState(initialUsers);
  const [filteredUsers, setFilteredUsers] = useState(users);
  const [selectValue, setSelectValue] = useState("A-Z");
  console.log(selectValue);

  useEffect(() => {
    let usersCopy = [...users];

    if (selectValue === "A-Z") {
      usersCopy.sort((a, b) => a.name.localeCompare(b.name));
    } else if (selectValue === "Age asc") {
      usersCopy.sort((a, b) => a.age - b.age);
    } else if (selectValue === "Age dsc") {
      usersCopy.sort((a, b) => b.age - a.age);
    }

    setFilteredUsers(usersCopy);
  }, [selectValue, users]);

  useEffect(() => {
    const filterUsers = users.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );

    setFilteredUsers(filterUsers);
  }, [search, users]);

  return (
    <>
      <label>Search user</label>
      <input value={search} onChange={(e) => setSearch(e.target.value)} />

      <select onChange={(e) => setSelectValue(e.target.value)}>
        <option value="A-Z">A-Z</option>
        <option value="Age asc">Age asc</option>
        <option value="Age dsc">Age dsc</option>
      </select>

      {filteredUsers.length === 0 ? (
        <p>No se encontraron usuarios</p>
      ) : (
        <ul>
          {filteredUsers.map((user) => (
            <li key={user.id}>
              {user.name} {user.age}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
