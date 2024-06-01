// src/components/EjercicioCard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

export function EjercicioCard({ ejercicio }) {
    const navigate = useNavigate();

    return (
        <div className='bg-zinc-800 p-3 hover:bg-zinc-700 hover:cursor-pointer' 
         onClick={() => navigate(`/ejercicio/${ejercicio.id}`)}>
            <h1>{ejercicio.nombre_ejercicio}</h1>
            <p>{ejercicio.descripcion_ejercicio}</p>
            <p>Dificultad: {ejercicio.nivel_dificultad}</p>
            <p>Tipo IMC: {ejercicio.tipo_imc}</p>
            {ejercicio.images && <img src={ejercicio.images} alt="Ejercicio" />}
        </div>
    );
}
