import React, { Component } from 'react';
import axios from 'axios';
import NavBar from '../components/Navbar';

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
                <NavBar/>
                <div className="container">
                    <h1 className="mt-4 mb-4">Tus Asignaciones de Ejercicio</h1>
                    {loading ? (
                        <p className="text-center">Cargando...</p>
                    ) : error ? (
                        <p className="text-danger">Error: {error}</p>
                    ) : (
                        <div>
                            {asignacionesEjercicio.length > 0 ? (
                                <ul className="list-group">
                                    {asignacionesEjercicio.map(asignacion => (
                                        <li key={asignacion.idAsignacionEjercicio} className="list-group-item mb-3">
                                            <div>
                                                <h4 className="mb-1">{asignacion.ejercicio.nombre}</h4>
                                                <p className="mb-1"><strong>Nivel:</strong> {asignacion.ejercicio.nivel}</p>
                                                <p className="mb-1"><strong>Descripción:</strong> {asignacion.ejercicio.descripcion}</p>
                                            </div>
                                            <button
                                                className="btn btn-danger btn-sm float-right"
                                                onClick={() => this.handleEliminarAsignacion(asignacion.idAsignacionEjercicio)}
                                            >
                                                Eliminar
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p>No se encontraron asignaciones de ejercicio para este usuario.</p>
                            )}
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default ViewEjercicioDesig;
