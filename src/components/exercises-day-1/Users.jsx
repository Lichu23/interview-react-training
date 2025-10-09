import React, { useEffect, useState } from "react";

export default function Users() {
  const [loading, setLoading] = useState(false);

  const users = [
    { id: 1, name: "Juan" },
    { id: 2, name: "Sofía" },
  ];

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      <h1>Users</h1>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
