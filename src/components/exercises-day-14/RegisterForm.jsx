import React, { useState } from "react";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [fieldError, setFieldError] = useState({
    emailError: "",
    passwordError: "",
    nameError: "",
  });

  function submitForm(e) {
    e.preventDefault();

    if (
      name.trim().length === 0 ||
      password.trim().length === 0 ||
      email.trim().length === 0
    ) {
      return setError("Todos los campos son obligatorios");
    }

    if (password.length < 6) {
      return setFieldError((prevState) => ({
        ...prevState,
        passwordError: "La contraseña debee tener almenos 6 caracteres",
      }));
    }

    if (!email.includes("@")) {
      return setFieldError((prevState) => ({
        ...prevState,
        emailError: "El email debe incluir @",
      }));
    }

    setFieldError({
      emailError: "",
      passwordError: "",
    });

    setSuccess(true);
    setError("");
    setEmail("");
    setPassword("");
    setTimeout(() => {
      setSuccess(false);

      setName("");
    }, 1000);
  }

  return (
    <>
      <div>RegisterForm</div>

      <form onSubmit={submitForm}>
        <label>Name</label>
        <input
          autoFocus
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label>Email</label>
        <input
          type="email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        {fieldError.emailError && (
          <p style={{ color: fieldError.emailError ? "red" : "" }}>
            {fieldError.emailError}
          </p>
        )}

        <label>Password</label>
        <input
          type="password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        {fieldError.passwordError && (
          <p style={{ color: fieldError.passwordError ? "red" : "" }}>
            {fieldError.passwordError}
          </p>
        )}

        <button>Submit</button>
      </form>
      {error && <p style={{ color: error ? "red" : "" }}>{error}</p>}
      {success && (
        <p style={{ color: success ? "green" : "" }}>
          Registro exitoso. ¡Bienvenido, {name}!
        </p>
      )}
    </>
  );
}
