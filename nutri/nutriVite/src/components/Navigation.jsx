import { Link } from "react-router-dom";

export function Navigations() {
    return (
        <div className="flex justify-between py-3">
            <Link to="/nutritec" className="font-bold text-3x1 mb-4">
                Usuarios
            </Link>
            <button className="bg-indigo-500 px-3 py-2 rounded-lg">
                <Link to="/nutritec-create">Crear nuevo usuario</Link>  
            </button>      

            <Link to="/tipoimc" className="font-bold text-3x1 mb-4">
                Tipo IMC
            </Link>
            <button className="bg-indigo-500 px-3 py-2 rounded-lg">
                <Link to="/tipoimc-create">Crear nuevo Tipo IMC</Link>  
            </button>

            <Link to="/ejercicio" className="font-bold text-3x1 mb-4">
                Ejercicios
            </Link>
            <button className="bg-indigo-500 px-3 py-2 rounded-lg">
                <Link to="/ejercicio-create">Crear nuevo Ejercicio</Link>  
            </button>

            <Link to="/comida" className="font-bold text-3x1 mb-4">
                Comida
            </Link>
            <button className="bg-indigo-500 px-3 py-2 rounded-lg">
                <Link to="/comida-create">Crear nueva Comida</Link>  
            </button>

            <Link to="/asignacionComida" className="font-bold text-3x1 mb-4">
                Asignación de Comida
            </Link>
            <button className="bg-indigo-500 px-3 py-2 rounded-lg">
                <Link to="/asignacionComida-create">Crear nueva Asignación de Comida</Link>  
            </button>

            <Link to="/asignacionEjercicio" className="font-bold text-3x1 mb-4">
                Asignación de Ejercicio
            </Link>
            <button className="bg-indigo-500 px-3 py-2 rounded-lg">
                <Link to="/asignacionEjercicio-create">Crear nueva Asignación de Ejercicio</Link>  
            </button>

            <Link to="/registroIMC" className="font-bold text-3x1 mb-4">
                Registro IMC
            </Link>
            <button className="bg-indigo-500 px-3 py-2 rounded-lg">
                <Link to="/registroIMC-create">Crear nuevo Registro IMC</Link>  
            </button>

            <Link to="/categoriaComida" className="font-bold text-3x1 mb-4">
                Categoría de Comida {/* Agrega el enlace para la lista de categorías de comida */}
            </Link>
        </div>
    );
}
