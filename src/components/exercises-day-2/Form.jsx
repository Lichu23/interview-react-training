import React, { useState } from "react";
// Crea un componente LoginForm que tenga un formulario con dos campos controlados:

// Email Password

// 📋 Requisitos:

// Ambos campos deben ser controlados con useState.

// Al enviar el formulario (onSubmit):

// Si algún campo está vacío, mostrar un mensaje de error:
// "Por favor, completa todos los campos."

// Si ambos campos están completos, mostrar en pantalla:
// "Bienvenido, [email]".

// El mensaje de error o éxito debe mostrarse debajo del formulario.

// No es necesario hacer ninguna llamada a API.

// No uses librerías externas (solo React).

export default function Form() {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("false");
  const [error, setError] = useState(false);

  function submitForm(e) {
    e.preventDefault()

    if(inputEmail.trim() === "") {
        setEmailMessage("El campo es obligatorio")
    }
    if(inputPassword.trim() === "") {
        setPasswordMessage("El campo es obligatorio")
    }

    if(error) {
        setError(true)
    }
    setSuccess(true)
    setInputEmail("")
    setInputPassword("")
    setSuccessMessage(`Bienvenido ${inputEmail}`)
    setPasswordMessage("")
  }

  return (
    <div>
      <h1>Form</h1>

      <form onSubmit={submitForm}>
        <label>Email</label>
        <input
          type="email"
          value={inputEmail}
          onChange={(e) => setInputEmail(e.target.value)}
        />
        {emailMessage && <p>{emailMessage}</p>}

        <label>Password</label>
        <input
          type="password"
          value={inputPassword}
          onChange={(e) => setInputPassword(e.target.value)}
        />
        {passwordMessage && <p>{passwordMessage}</p>}

        <button>Submit</button>
      </form>
      {success && <p>{successMessage}</p>}
      {error && <p>Ocurrio un problema al enviar los datos</p>}
    </div>
  );
}
