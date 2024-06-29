import React, { Component } from 'react';
import NavBar from '../components/Navbar';
import axios from 'axios';
import '../pages/tarjetas.css'; // Asegúrate de importar el archivo CSS

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
            const response = await axios.get('http://localhost:8080/api/asignacion-comidas', {
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

            this.fetchComidasDesignadas();
        } catch (error) {
            console.error('Error al eliminar la comida designada:', error);
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
                <div className="comida-background"></div>
                <div className="comida-container">
                    <h1 className="comida-title">
                        {usuario ? `${usuario.nombre} !! ESTAS SON TUS COMIDAS DESIGNADAS` : 'Cargando...'}
                    </h1>
                    {loading ? (
                        <p className="comida-loading">Cargando...</p>
                    ) : error ? (
                        <p className="comida-error">Error: {error}</p>
                    ) : (
                        <div className="comida-row">
                            {comidasUsuario.length > 0 ? (
                                comidasUsuario.map(comida => (
                                    <div key={comida.idAsignacionComida} className="comida-col">
                                        <div className="comida-card">
                                            <img 
                                                src={`http://127.0.0.1:8000/media/${comida.comida.images}`} 
                                                className="comida-card-img" 
                                                alt={comida.comida.nombreComida} 
                                            />
                                            <div className="comida-card-body">
                                                <h5 className="comida-card-title">{comida.comida.nombreComida}</h5>
                                                <p className="comida-card-text"><strong>Calorías:</strong> {comida.comida.calorias}</p>
                                                <p className="comida-card-text"><strong>Fecha de Registro:</strong> {comida.fechaHoraRegistro}</p>
                                                <button
                                                    className="comida-btn-eliminar"
                                                    onClick={() => this.handleEliminarComida(comida.idAsignacionComida)}
                                                >
                                                    Eliminar
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p className="comida-empty">No se encontraron comidas designadas para este usuario.</p>
                            )}
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default ViewComidaDesig;
