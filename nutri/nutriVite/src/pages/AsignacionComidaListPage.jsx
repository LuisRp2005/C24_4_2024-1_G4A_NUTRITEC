import { getAllAsignacionComida } from '../api/asignacionComida'; // Asegúrate de importar la función para obtener todas las asignaciones de comida
import { Link } from 'react-router-dom';

export function AsignacionComidaListPage() {
    const [asignaciones, setAsignaciones] = useState([]);

    useEffect(() => {
        async function fetchAsignaciones() {
            try {
                const response = await getAllAsignacionComida(); // Llama a la función para obtener todas las asignaciones de comida
                setAsignaciones(response.data);
            } catch (error) {
                console.error('Error fetching asignaciones de comida:', error);
            }
        }
        
        fetchAsignaciones();
    }, []);

    return (
        <div>
            <h1>Lista de Asignaciones de Comida</h1>
            <Link to="/asignacionComida-create">Crear Nueva Asignación de Comida</Link>
            <ul>
                {asignaciones.map((asignacion) => (
                    <li key={asignacion.id}>
                        <h2>{asignacion.usuario} - {asignacion.comida}</h2>
                        {/* Aquí puedes agregar más detalles de la asignación de comida si lo deseas */}
                    </li>
                ))}
            </ul>
        </div>
    );
}
