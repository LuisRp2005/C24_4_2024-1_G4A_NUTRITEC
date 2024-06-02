import { useNavigate } from 'react-router-dom';

export function AsignacionEjercicioCard({ asignacionEjercicio }) {
    const navigate = useNavigate();

    return (
        <div className='bg-zinc-800 p-3 hover:bg-zinc-700 hover:cursor-pointer' 
             onClick={() => navigate(`/asignacionejercicio/${asignacionEjercicio.id}`)}>
            <h1>{asignacionEjercicio.usuario.nombre} - {asignacionEjercicio.ejercicio.nombre_ejercicio}</h1>
            <p>{new Date(asignacionEjercicio.fecha_hora_asignacion).toLocaleString()}</p>
        </div>
    );
}
