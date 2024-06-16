import React from 'react';
import { useNavigate } from 'react-router-dom';

export function ComidaCard({ comida }) {
    const navigate = useNavigate();

    return (
        <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg cursor-pointer">
            <div className="grid grid-cols-2 gap-4">
                <p className="text-sm text-gray-600"><strong>Nombre:</strong> {comida.nombre_comida}</p>
                <p className="text-sm text-gray-600"><strong>Calorias:</strong> {comida.calorias}</p>
                <p className="text-sm text-gray-600"><strong>Categoria:</strong> {comida.categoria}</p>
                {comida.images && <img src={comida.images} alt="Comida"/>}
            
                {/* Aquí puedes agregar más detalles de la comida si lo deseas */}
                <button
                    className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                    onClick={() => navigate(`/comida/${comida.id_comida}`)}
                >
                    Ver detalles
                </button>
            </div>
        </div>
    );
}
