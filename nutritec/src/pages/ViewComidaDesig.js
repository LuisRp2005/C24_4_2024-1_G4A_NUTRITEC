import React, { Component } from 'react';
import NavBar from '../components/Navbar';
import axios from 'axios';

class ViewComidaDesig extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usuario: null,
            comidasDesignadas: [],
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

            this.setState({
                usuario: response.data,
                loading: false
            });

            this.fetchComidasDesignadas();
        } catch (error) {
            console.error('Error al obtener los datos del usuario:', error);
            this.setState({
                error: 'Error al obtener los datos del usuario',
                loading: false
            });
        }
    };

    fetchComidasDesignadas = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/api/asignacion-comidas`, {
                withCredentials: true
            });

            this.setState({
                comidasDesignadas: response.data,
                loading: false
            });
        } catch (error) {
            console.error('Error al obtener las comidas designadas:', error);
            this.setState({
                error: 'Error al obtener las comidas designadas',
                loading: false
            });
        }
    };

    handleEliminarComida = async (idComida) => {
        try {
            await axios.delete(`http://localhost:8080/api/asignacion-comidas/${idComida}`, {
                withCredentials: true
            });

            // Actualizar la lista de comidas designadas después de eliminar
            this.fetchComidasDesignadas();
        } catch (error) {
            console.error('Error al eliminar la comida designada:', error);
            // Manejar el error según sea necesario
        }
    };

    render() {
        const { usuario, comidasDesignadas, loading, error } = this.state;

        let comidasUsuario = [];
        if (usuario) {
            comidasUsuario = comidasDesignadas.filter(comida => comida.usuario.nombre === usuario.nombre);
        }

        return (
            <div>
                <NavBar />
                <div className="container">
                    <h1 className="mt-4 mb-4">Tus Comidas Designadas</h1>
                    {loading ? (
                        <p>Cargando...</p>
                    ) : error ? (
                        <p className="text-danger">Error: {error}</p>
                    ) : (
                        <div>
                            {comidasUsuario.length > 0 ? (
                                <ul className="list-group">
                                    {comidasUsuario.map(comida => (
                                        <li key={comida.idAsignacionComida} className="list-group-item mb-3">
                                            <div>
                                                <h4 className="mb-1">{comida.comida.nombreComida}</h4>
                                                <p className="mb-1"><strong>Calorias de la comida:</strong> {comida.comida.calorias}</p>
                                                <p className="mb-1"><strong>Fecha de Registro:</strong> {comida.fechaHoraRegistro}</p>
                                            </div>
                                            <button
                                                className="btn btn-danger btn-sm float-right"
                                                onClick={() => this.handleEliminarComida(comida.idAsignacionComida)}
                                            >
                                                Eliminar
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p>No se encontraron comidas designadas para este usuario.</p>
                            )}
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default ViewComidaDesig;
