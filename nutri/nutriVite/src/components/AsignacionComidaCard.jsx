import React from 'react';
import { useNavigate } from 'react-router-dom';

export function AsignacionComidaCard({ asignacionComida, usuario, comida }) {
    const navigate = useNavigate();

    return (
        <div className="bg-gray-200 p-4 rounded-lg shadow-md cursor-pointer">
            <div onClick={() => navigate(`/asignacionComida/${asignacionComida.id_asignacion_comida}`)}>
                <h2 className="text-xl font-semibold text-black">{usuario ? usuario.nombre : 'Usuario Desconocido'} - {comida ? comida.nombre_comida : 'Comida Desconocida'}</h2>
                <p className="text-black">Fecha de Asignación: {new Date(asignacionComida.fecha_hora_registro).toLocaleString()}</p>
            </div>
            <button
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 mt-2"
                onClick={() => navigate(`/asignacionComida/${asignacionComida.id_asignacion_comida}`)}
            >
                Ver detalle
            </button>
        </div>
    );
}
