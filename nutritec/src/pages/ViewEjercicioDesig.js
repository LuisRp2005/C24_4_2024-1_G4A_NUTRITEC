import React, { Component } from 'react';
import axios from 'axios';
import NavBar from '../components/Navbar';
import '../pages/tarjetas.css'; // Asegúrate de importar el archivo CSS

class ViewEjercicioDesig extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usuario: null,
            asignacionesEjercicio: [],
            loading: true,
            error: null
        };
    }

    componentDidMount() {
        this.fetchUserData();
    }

    fetchUserData = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/v1/datos', {
                withCredentials: true
            });

            const usuario = response.data;
            this.setState({ usuario });

            // Después de obtener el usuario, buscar las asignaciones de ejercicio
            this.fetchAsignacionesEjercicio(usuario.nombre);
        } catch (error) {
            console.error('Error al obtener los datos del usuario:', error);
            this.setState({
                error: 'Error al obtener los datos del usuario',
                loading: false
            });
        }
    };

    fetchAsignacionesEjercicio = async (nombreUsuario) => {
        try {
            const response = await axios.get('http://localhost:8080/api/asignacion-ejercicios');

            // Filtrar las asignaciones por el nombre de usuario
            const asignacionesFiltradas = response.data.filter(asignacion => asignacion.usuario.nombre === nombreUsuario);

            this.setState({
                asignacionesEjercicio: asignacionesFiltradas,
                loading: false
            });
        } catch (error) {
            console.error('Error al obtener las asignaciones de ejercicio:', error);
            this.setState({
                error: 'Error al obtener las asignaciones de ejercicio',
                loading: false
            });
        }
    };

    handleEliminarAsignacion = async (idAsignacion) => {
        try {
            if (!idAsignacion) {
                console.error('ID de asignación no válido:', idAsignacion);
                return;
            }

            await axios.delete(`http://localhost:8080/api/asignacion-ejercicios/${idAsignacion}`);

            // Actualizar la lista de asignaciones después de eliminar
            this.fetchAsignacionesEjercicio(this.state.usuario.nombre);
        } catch (error) {
            console.error('Error al eliminar la asignación de ejercicio:', error);
            // Manejar el error según sea necesario
        }
    };

    render() {
        const { usuario, asignacionesEjercicio, loading, error } = this.state;

        return (
            <div>
                <NavBar />
                <div className="comida-background"></div>
                <div className="comida-container">
                    <h1 className="comida-title">
                        {usuario ? `${usuario.nombre} !! ESTOS SON TUS EJERCICIOS DESIGNADOS` : 'Cargando...'}
                    </h1>
                    {loading ? (
                        <p className="comida-loading">Cargando...</p>
                    ) : error ? (
                        <p className="comida-error">Error: {error}</p>
                    ) : (
                        <div className="comida-row">
                            {asignacionesEjercicio.length > 0 ? (
                                asignacionesEjercicio.map(asignacion => (
                                    <div key={asignacion.idAsignacionEjercicio} className="comida-col">
                                        <div className="comida-card">
                                            <img 
                                                src={`http://127.0.0.1:8000/media/${asignacion.ejercicio.images}`} 
                                                className="comida-card-img" 
                                                alt={asignacion.ejercicio.nombre} 
                                            />
                                            <div className="comida-card-body">
                                                <h5 className="comida-card-title">{asignacion.ejercicio.nombre}</h5>
                                                <p className="comida-card-text"><strong>Nivel:</strong> {asignacion.ejercicio.nivel}</p>
                                                <p className="comida-card-text"><strong>Descripción:</strong> {asignacion.ejercicio.descripcion}</p>
                                                <button
                                                    className="comida-btn-eliminar"
                                                    onClick={() => this.handleEliminarAsignacion(asignacion.idAsignacionEjercicio)}
                                                >
                                                    Eliminar
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p className="comida-empty">No se encontraron asignaciones de ejercicio para este usuario.</p>
                            )}
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default ViewEjercicioDesig;
