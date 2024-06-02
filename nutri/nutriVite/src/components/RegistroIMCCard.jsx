import { useNavigate } from 'react-router-dom';

export function RegistroIMCCard({ registroIMC }) {
    const navigate = useNavigate();

    return (
        <div className='bg-zinc-800 p-3 hover:bg-zinc-700 hover:cursor-pointer'
             onClick={() => navigate(`/registroIMC/${registroIMC.id}`)}>
            <h1>{registroIMC.usuario.nombre} - {registroIMC.valor_imc}</h1>
            <p>{new Date(registroIMC.fecha_hora_registro).toLocaleString()}</p>
        </div>
    );
}
