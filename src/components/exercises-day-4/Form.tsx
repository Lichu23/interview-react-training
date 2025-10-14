import React, { useState } from "react";
// Muestre un formulario con los siguientes campos:

// Nombre del solicitante (string)
// Tipo de documento (select: “Escritura”, “Poder”, “Certificado”)
// Fecha (input type="date")
// Monto (number)
// Valide los datos antes de enviar:
// Todos los campos son obligatorios.
// El monto debe ser mayor que 0.
// Al hacer clic en “Registrar”:
// Si hay errores → mostrarlos debajo del campo correspondiente.
// Si todo está correcto → mostrar un mensaje de éxito (por ejemplo: “✅ Documento registrado correctamente”).
// (Opcional) Limpiar el formulario después del envío exitoso.

interface Formulario {
  nombre: string;
  tipo: string;
  fecha: string;
  monto: number | "";
}

export default function Form() {
  const [nombre, setNombre] = useState("");
  const [monto, setMonto] = useState(0);
  const [tipo, setTipo] = useState<
    "Escritura" | "Poder" | "Certificado" | null
  >(null);
  const [fecha, setFecha] = useState<Date | null>(null);
  const [error, setError] = useState({
    errorNombre: "",
    errorTipo: "",
    errorMonto: "",
    errorFecha: "",
  });
  const [success, setSuccess] = useState("");

  function submitForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (nombre.trim() === "") {
      setError((prev) => ({
        ...prev,
        errorNombre: "El nombre es obligatorio",
      }));
      return;
    }
    if (!monto || monto <= 0) {
      setError((prev) => ({
        ...prev,
        errorMonto: "El monto debe ser mayor a 0",
      }));
      return;
    }
    if (!tipo) {
      setError((prev) => ({
        ...prev,
        errorTipo: "Debes seleccionar un tipo",
      }));
      return;
    }
    if (!fecha) {
      setError((prev) => ({
        ...prev,
        errorFecha: "Debes seleccionar una fecha",
      }));
      return;
    }
    setSuccess("✅ Documento registrado correctamente");
    setError((prev) => ({
      ...prev,
      errorTipo: "",
      errorFecha: "",
      errorMonto: "",
      errorNombre: "",
    }));
    setNombre("");
    setMonto(0);
    setTipo(null);
    setFecha(null);
  }
  return (
    <div>
      <h1>Form</h1>

      <form onSubmit={submitForm} action="">
        <label htmlFor="">Nombre</label>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        {error.errorNombre && <p>{error.errorNombre}</p>}
        <label htmlFor="">Tipo de documento</label>
        <select
          onChange={(e) =>
            setTipo((e.target.value as "Escritura" | "Certificado" | "Poder" | null) )
          }
        >
          <option value="">Seleccionar</option>
          <option value="Escritura">Escritura</option>
          <option value="Poder">Poder</option>
          <option value="Certificado">Certificado</option>
        </select>
        {error.errorTipo && <p>{error.errorTipo}</p>}

        <label htmlFor="">Monto</label>
        <input
          type="number"
          value={monto}
          onChange={(e) => setMonto(Number(e.target.value))}
        />
        {error.errorMonto && <p>{error.errorMonto}</p>}

        <label htmlFor="">Fecha</label>
        <input
          type="date"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
        />
        {error.errorFecha && <p>{error.errorFecha}</p>}

        <button>Registrar</button>
      </form>
      {success && <p>{success}</p>}
    </div>
  );
}
