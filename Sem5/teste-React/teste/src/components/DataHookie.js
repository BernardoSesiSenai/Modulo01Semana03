import React from "react";
import { useState } from "react";

const DataHookie = () => {
    let nota = 10;
    const [number, setNumber] = useState(10);
    return (
        <div>
            SIMULAR MUDANÇA DE NOTA DE ALUNO
            <h1>Nota: {nota}</h1>
            <button onClick={() => (nota = 15)}> MUDAR NOTA </button>
            <h1>Nota: {number}</h1>
            <button onClick={() => setNumber(5)}> MUDAR NOTA </button>
        </div>
    )
}

export default DataHookie;