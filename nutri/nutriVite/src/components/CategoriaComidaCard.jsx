import { useNavigate } from 'react-router-dom';

export function CategoriaComidaCard({ categoriaComida }) {
    const navigate = useNavigate();

    return (
        <div className='bg-zinc-800 p-3 hover:bg-zinc-700 hover:cursor-pointer'
             onClick={() => navigate(`/categoriaComida/${categoriaComida.id}`)}>
            <h1>{categoriaComida.nombre}</h1>
            <p>{categoriaComida.descripcion}</p>
        </div>
    );
}
