import { useNavigate } from 'react-router-dom';

export function AsignacionComidaCard({ asignacionComida }) {
    const navigate = useNavigate();

    return (
        <div className='bg-zinc-800 p-3 hover:bg-zinc-700 hover:cursor-pointer'
             onClick={() => navigate(`/asignacionComida/${asignacionComida.id}`)}>
            <h1>{asignacionComida.usuario.nombre} - {asignacionComida.comida.nombre}</h1>
            <p>{new Date(asignacionComida.fecha_hora_asignacion).toLocaleString()}</p>
        </div>
    );
}
