import { useNavigate } from 'react-router-dom';

export function TipoIMCCard({ tipoIMC }) {
    const navigate = useNavigate();

    return (
        <div className=' mt-6 bg-white p-4 rounded-lg shadow-md hover:shadow-lg border border-gray-200'
         onClick={() => navigate(`/tipoimc/${tipoIMC.id}`)}>
            <div className="grid grid-cols-2 gap-4">
            <p className="text-sm text-gray-600"><strong>Tipo:</strong> {tipoIMC.tipo_imc}</p>
            <p className="text-sm text-gray-600"><strong>Descripcion:</strong> {tipoIMC.descripcion_imc}</p>
            </div>
        </div>
    );
}
