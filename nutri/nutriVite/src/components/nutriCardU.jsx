import { useNavigate } from 'react-router-dom';

export function NutriCard({ nutri }) {
    const navigate = useNavigate();

    return (
        <div>
            <div className=' mt-6 bg-white p-4 rounded-lg shadow-md hover:shadow-lg border border-gray-200'>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">{nutri.nombre} {nutri.apellido}</h2>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <p className="text-sm text-gray-600"><strong>Correo:</strong> {nutri.correo}</p>
                        <p className="text-sm text-gray-600"><strong>Rol:</strong> {nutri.rol}</p>
                        <p className="text-sm text-gray-600"><strong>Fecha de nacimiento:</strong> {nutri.fecha_nacimiento}</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-600"><strong>Altura:</strong> {nutri.altura}</p>
                        <p className="text-sm text-gray-600"><strong>Peso:</strong> {nutri.peso}</p>
                        <p className="text-sm text-gray-600"><strong>Género:</strong> {nutri.genero}</p>
                    </div>
                </div>
                <button onClick={() => navigate(`/nutritec/${nutri.id_usuario}`)} className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Ver perfil
                </button>
            </div>
        </div>
    );
}
