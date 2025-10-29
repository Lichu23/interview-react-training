import React from "react";

export default function UserCard({ user }) {
  return (
    <li style={{marginBottom:5, border:"1px solid"}} key={user.id}>
        <div>
            Nombre:{user.name}
            Email:{user.email}
            Ciudad:{user.city}
        </div>
    </li>
  );
}
