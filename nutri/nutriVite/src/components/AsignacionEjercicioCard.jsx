import React from 'react';
import { useNavigate } from 'react-router-dom';

export function AsignacionEjercicioCard({ asignacionEjercicio, usuario, ejercicio }) {
    const navigate = useNavigate();

    return (
        <div className="bg-gray-200 p-4 rounded-lg shadow-md cursor-pointer">
            <div onClick={() => navigate(`/asignacion-ejercicio/${asignacionEjercicio.id_asignacion_ejercicio}`)}>
                <h2 className="text-xl font-semibold text-black">
                    {usuario ? `${usuario.nombre} ${usuario.apellido}` : 'Usuario Desconocido'} - {ejercicio ? ejercicio.nombre_ejercicio : 'Ejercicio Desconocido'}
                </h2>
                <p className="text-black">Fecha de Asignación: {new Date(asignacionEjercicio.fecha_hora_asignacion).toLocaleString()}</p>
            </div>
            <button
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 mt-2"
                onClick={() => navigate(`/asignacion-ejercicio/${asignacionEjercicio.id_asignacion_ejercicio}`)}
            >
                Ver detalle
            </button>
        </div>
    );
}
