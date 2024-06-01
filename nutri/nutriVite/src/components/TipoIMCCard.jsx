import { useNavigate } from 'react-router-dom';

export function TipoIMCCard({ tipoIMC }) {
    const navigate = useNavigate();

    return (
        <div className='bg-zinc-800 p-3 hover:bg-zinc-700 hover:cursor-pointer' 
         onClick={() => navigate(`/tipoimc/${tipoIMC.id}`)}>
            <h1>{tipoIMC.tipo_imc}</h1>
            <p>{tipoIMC.descripcion_imc}</p>
        </div>
    );
}
