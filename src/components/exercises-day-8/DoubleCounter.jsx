import React, { useState } from 'react'
// Crea un componente llamado DoubleCounter que:

// Tenga un contador que empiece en 0.

// Muestre el valor actual del contador en pantalla.

// Tenga dos botones:

// Uno que incremente en +1.

// Otro que duplique el valor actual.

// Si el valor del contador supera 20, muestra un texto:

// “Valor alto 🚀”
// debajo del número.

export default function DoubleCounter() {
    const [counter, setCounter] = useState(0)
  
    function Increment() {
        setCounter((prev) => prev + 1)
    }

    function Multiplier() {
        setCounter((prev) => prev * 2)
    }

    function ResetCounter() {
        setCounter(0)
    }
    return (
    <div>
        <h1>Counter: {counter}</h1>
        {counter > 20 ? <p>Valor alto 🚀</p> : ""}
        <button onClick={Increment}>+</button>
        <button onClick={Multiplier}>X</button>
        <button onClick={ResetCounter}>Reset</button>
    </div>
  )
}
