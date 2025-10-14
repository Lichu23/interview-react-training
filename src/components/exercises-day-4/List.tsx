import { useState } from "react";
import { Estado, Solicitud } from "./types";
import { solicitudesMock } from "./data";

export default function App() {
  const [solicitudes, setSolicitudes] = useState<Solicitud[]>(solicitudesMock);
  const [filtro, setFiltro] = useState<Estado | "todos">("todos");

  // 👇 TU CÓDIGO IRÁ AQUÍ
  const solicitudesFiltradas = solicitudes.filter((soli) => {
    if (filtro === "todos") return true
    return soli.estado === filtro;
  });

  function changeState(soliId: number) {
    setSolicitudes((prev) =>
      prev.map((soli) => {
        if (soli.id === soliId) {
          let nuevoEstado: typeof soli.estado;

          if (soli.estado === "pendiente") nuevoEstado = "en_proceso";
          else if (soli.estado === "en_proceso") nuevoEstado = "finalizada";
          else nuevoEstado = "pendiente";

          return { ...soli, estado: nuevoEstado };
        }

        return soli;
      })
    );
  }

  return (
    <div className="p-4 max-w-lg mx-auto">
      <h1 className="text-xl font-bold mb-4">Solicitudes Notariales</h1>

      <select
        value={filtro}
        onChange={(e) => setFiltro(e.target.value as Estado | "todos")}
        className="border p-1 mb-3"
      >
        <option value="todos">Todas</option>
        <option value="pendiente">Pendientes</option>
        <option value="en_proceso">En proceso</option>
        <option value="finalizada">Finalizadas</option>
      </select>

      <p className="text-sm mb-2">
        {solicitudesFiltradas.length} solicitudes encontradas
      </p>

      <ul className="border rounded p-2">
        {solicitudesFiltradas.map((s) => (
          <li
            key={s.id}
            className="border-b last:border-none py-1 flex justify-between items-center"
          >
            <span>
              <b>{s.nombre}</b> — {s.tipo} ({s.estado})
            </span>
            <button
              className="text-blue-600 text-sm"
              onClick={() => {
                changeState(s.id);
              }}
            >
              Cambiar estado
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
