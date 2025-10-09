import React, { useState } from 'react'
// Muestre un botón con el texto “Mostrar información”.

// Al hacer clic, alterna entre:

// Mostrar un párrafo: "Esta es la información secreta 👀".

// Y ocultarlo nuevamente cambiando el texto del botón a “Ocultar información”.
// 📋 Requisitos técnicos

// Usa useState para manejar si la información está visible o no.

// Muestra el texto del botón de acuerdo con el estado.

// No necesitas estilos ni librerías externas.

export default function ToggleInfo() {

    const [isVisible, setIsVisible] = useState(false)
    console.log(isVisible)
    function showText() {
        setIsVisible((prevState) => !prevState)
    }

  return (
    <div>
        {isVisible ? <h1>Esta es la información secreta 👀</h1> : ""}
        <button onClick={showText}>{isVisible ? "Ocultar informacion" :"Mostrar información"}</button>
    </div>
  )
}
