import React from 'react';
import { useNavigate } from 'react-router-dom';

export function EjercicioCard({ ejercicio }) {
    const navigate = useNavigate();

    return (
        <div className=' mt-6 bg-white p-4 rounded-lg shadow-md hover:shadow-lg border border-gray-200'
             onClick={() => navigate(`/ejercicio/${ejercicio.id}`)}>
            <div className="grid grid-cols-2 gap-4">
                <p className="text-sm text-gray-600"><strong>Nombre de Ejercicio:</strong> {ejercicio.nombre_ejercicio}</p>
                <p className="text-sm text-gray-600"><strong>Descripcion:</strong> {ejercicio.descripcion_ejercicio}</p>
                <p className="text-sm text-gray-600"><strong>Nivel de dificultad:</strong> {ejercicio.nivel_dificultad}</p>
                <p className="text-sm text-gray-600"><strong>Tipo de IMC:</strong> {ejercicio.tipo_imc}</p>
                {ejercicio.images && <img src={ejercicio.images} alt="Ejercicio"/>}

            </div>
        </div>
    );
}
