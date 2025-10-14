export type Estado = "pendiente" | "en_proceso" | "finalizada";

export interface Solicitud {
  id: number;
  nombre: string;
  tipo: string;
  estado: Estado;
}
