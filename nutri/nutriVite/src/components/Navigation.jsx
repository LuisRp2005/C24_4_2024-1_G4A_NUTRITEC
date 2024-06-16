import { Link } from "react-router-dom";

export function Navigations() {
    return (
        <div>
            <h1 className="text-center p-4">Administrador</h1>
            <div className="options-container">
                {/* Usuarios */}
                <div className="option-card">
                    <div className="option-title">
                        <Link to="/nutritec" className="font-bold text-xl mb-2">Usuarios</Link>
                    </div>
                    <div className="option-button">
                        <button>
                            <Link to="/nutritec-create">Crear nuevo Usuario</Link>
                        </button>
                    </div>
                </div>

                {/* Tipo IMC */}
                <div className="option-card">
                    <div className="option-title">
                        <Link to="/tipoimc" className="font-bold text-xl mb-2">Tipo IMC</Link>
                    </div>
                    <div className="option-button">
                        <button>
                            <Link to="/tipoimc-create">Crear nuevo Tipo IMC</Link>
                        </button>
                    </div>
                </div>

                {/* Ejercicios */}
                <div className="option-card">
                    <div className="option-title">
                        <Link to="/ejercicio" className="font-bold text-xl mb-2">Ejercicios</Link>
                    </div>
                    <div className="option-button">
                        <button>
                            <Link to="/ejercicio-create">Crear nuevo Ejercicio</Link>
                        </button>
                    </div>
                </div>

                {/* Comida */}
                <div className="option-card">
                    <div className="option-title">
                        <Link to="/comida" className="font-bold text-xl mb-2">Comida</Link>
                    </div>
                    <div className="option-button">
                        <button>
                            <Link to="/comida-create">Crear nueva Comida</Link>
                        </button>
                    </div>
                </div>

                {/* Asignación de Comida */}
                <div className="option-card">
                    <div className="option-title">
                        <Link to="/asignacionComida" className="font-bold text-xl mb-2">Asignación de Comida</Link>
                    </div>
                    <div className="option-button">
                        <button>
                            <Link to="/asignacionComida-create">Crear nueva Asignación de Comida</Link>
                        </button>
                    </div>
                </div>

                {/* Asignación de Ejercicio */}
                <div className="option-card">
                    <div className="option-title">
                        <Link to="/asignacionEjercicio" className="font-bold text-xl mb-2">Asignación de Ejercicio</Link>
                    </div>
                    <div className="option-button">
                        <button>
                            <Link to="/asignacionEjercicio-create">Crear nueva Asignación de Ejercicio</Link>
                        </button>
                    </div>
                </div>

                {/* Registro IMC */}
                <div className="option-card">
                    <div className="option-title">
                        <Link to="/registroIMC" className="font-bold text-xl mb-2">Registro IMC</Link>
                    </div>
                    <div className="option-button">
                        <button>
                            <Link to="/registroIMC-create">Crear nuevo Registro IMC</Link>
                        </button>
                    </div>
                </div>

                {/* Categoría de Comida */}
                <div className="option-card">
                    <div className="option-title">
                        <Link to="/categoriaComida" className="font-bold text-xl mb-2">Categoría de Comida</Link>
                    </div>
                    <div className="option-button">
                        <button>
                            <Link to="/categoriaComida-create">Crear nuevo Categoria de comida</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
