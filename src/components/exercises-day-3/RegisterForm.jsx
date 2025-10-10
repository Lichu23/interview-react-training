// import React from 'react'
// El formulario debe tener los siguientes inputs controlados:Nombre
// Email
// Contraseña

import { useState } from "react";

// Al hacer clic en “Registrarse”:

// Si algún campo está vacío → mostrar el mensaje:

// “Por favor, completa todos los campos.”

// Si todos los campos están completos → mostrar debajo del formulario:

// “Registro exitoso 🎉 Bienvenido, [nombre]!”

// Limpia los campos del formulario después de un registro exitoso.

// (Opcional) Si querés ir un paso más allá:

// Validá que el email tenga formato válido (includes("@")).

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");

  function submitForm(e) {
    e.preventDefault();
    if (name.trim() === "" || email.trim() === "" || password.trim() === "") {
      setError(true);
      return;
    }

    setMessage(`“Registro exitoso 🎉 Bienvenido, ${name}!`);
    setName("");
    setEmail("");
    setPassword("");
    setError(false);
  }

  return (
    <div>
      <h1>RegisterForm</h1>

      <form onSubmit={submitForm}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button>Registrarse</button>
      </form>
      {message && <p>{message}</p>}
      {error && <p>Todos los campos son obligatorios</p>}
    </div>
  );
}
