import React, { Component } from 'react';
import { Ejercicio } from '../service/Ejercicio';
import NavBar from '../components/Navbar';
import axios from 'axios';
import '../pages/styles.css'; // Asegúrate de tener los estilos necesarios
import NutriIA from '../pages/NutriIA'; // Ajusta la ruta según donde esté tu componente NutriIA

class ViewEjercicio extends Component {
    constructor() {
        super();
        this.state = {
            ejercicios: [],
            filtro: 'todos', // Valor por defecto del filtro
            preguntaNutriIA: '', // Guardará la pregunta para NutriIA
            mostrarNutriIA: false, // Para mostrar o no NutriIA según sea necesario
            historialConversacion: [], // Para guardar el historial de conversación
            usuario: {}, // Inicializa usuario como un objeto vacío
            showSuccessAlert: false // Controla la visibilidad de la alerta de éxito
        };
        this.ejercicioService = new Ejercicio();
    }

    componentDidMount() {
        this.fetchEjercicios();
        this.fetchUsuario(); // Llamar a fetchUsuario al montar el componente
    }

    fetchEjercicios = () => {
        this.ejercicioService.getAll()
            .then(data => {
                this.setState({ ejercicios: data });
            })
            .catch(error => {
                console.error('Error al obtener los ejercicios:', error);
            });
    };

    fetchUsuario = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/v1/datos', {
                withCredentials: true
            });

            if (response.status === 200) {
                const data = response.data;
                if (data && data.IdUsuario) {
                    this.setState({ usuario: data });
                } else {
                    console.error('Error: Datos de usuario incompletos o no encontrados.');
                }
            } else {
                console.error('Error al obtener datos del usuario:', response.statusText);
            }
        } catch (error) {
            console.error('Error en la solicitud:', error);
        }
    };

    handleChangeFiltro = (filtro) => {
        this.setState({ filtro });
    };

    handleConsultarIA = (id, nombreEjercicio) => {
        const pregunta = `¿Cómo se realiza correctamente ${nombreEjercicio}?`;
        const mensajeUsuario = { sender: 'user', text: pregunta };

        this.setState(prevState => ({
            preguntaNutriIA: pregunta,
            mostrarNutriIA: true,
            historialConversacion: [...prevState.historialConversacion, mensajeUsuario]
        }));
    };

    handleAsignarEjercicio = async (id) => {
        const { usuario } = this.state;

        if (!usuario || !usuario.IdUsuario) {
            console.error('No se encontró información del usuario logueado o faltan campos requeridos.');
            return;
        }

        const asignacionEjercicio = {
            ejercicio: { id },
            usuario: { idUsuario: usuario.IdUsuario },
            fechaHoraAsignacion: new Date().toISOString()
        };

        try {
            const response = await axios.post('http://localhost:8080/api/asignacion-ejercicios', asignacionEjercicio, {
                withCredentials: true
            });

            if (response.status === 200) {
                this.setState({ showSuccessAlert: true });

                setTimeout(() => {
                    this.setState({ showSuccessAlert: false });
                }, 3000);

                console.log('Ejercicio asignado exitosamente:', response.data);
                this.fetchAsignaciones(); // Llama a la función para actualizar la lista de asignaciones
            } else {
                console.error('Error al asignar ejercicio:', response.statusText);
            }
        } catch (error) {
            console.error('Error en la solicitud POST:', error);
        }
    };

    fetchAsignaciones = () => {
        // Aquí implementa la lógica para actualizar las asignaciones después de asignar un ejercicio
        console.log('Actualizando asignaciones...');
        // Por ejemplo, podrías llamar a fetchEjercicios nuevamente para obtener los ejercicios actualizados
        this.fetchEjercicios();
    };

    handleCloseNutriIA = () => {
        this.setState({
            mostrarNutriIA: false
        });
    };

    render() {
        const { ejercicios, filtro, preguntaNutriIA, usuario, mostrarNutriIA, historialConversacion, showSuccessAlert } = this.state;

        const ejerciciosFiltrados = ejercicios.filter(ejercicio => {
            if (filtro === 'todos') {
                return true;
            } else {
                return ejercicio.nivel === filtro;
            }
        });

        return (
            <div>
                <NavBar />
                <div className="container-fluid py-5">
                    <div className="text-center mb-5">
                        <h1 className="display-3 mb-0" style={{ color: '#7AC534' }}>¡Bienvenido {usuario && usuario.nombre ? usuario.nombre : 'Usuario'}!</h1>
                        <p className="lead mb-4">Explora nuestra selección de Ejercicios disponibles para ti</p>
                    </div>
                    <div className="container pt-5 pb-3">
                        <div className="text-center mb-3 pb-3">
                            <h6 className="text-primary text-uppercase" style={{ letterSpacing: '5px' }}>Rutina</h6>
                            <h1>Ejercicios</h1>
                            <div className="btn-group" role="group" aria-label="Filtros">
                                <button
                                    type="button"
                                    className={`btn btn-${filtro === 'todos' ? 'primary' : 'outline-primary'} btn-lg mx-1`}
                                    onClick={() => this.handleChangeFiltro('todos')}
                                >
                                    Todos
                                </button>
                                <button
                                    type="button"
                                    className={`btn btn-${filtro === 'moderado' ? 'primary' : 'outline-primary'} btn-lg mx-1`}
                                    onClick={() => this.handleChangeFiltro('moderado')}
                                >
                                    Moderado
                                </button>
                                <button
                                    type="button"
                                    className={`btn btn-${filtro === 'alta' ? 'primary' : 'outline-primary'} btn-lg mx-1`}
                                    onClick={() => this.handleChangeFiltro('alta')}
                                >
                                    Alta
                                </button>
                                <button
                                    type="button"
                                    className={`btn btn-${filtro === 'baja' ? 'primary' : 'outline-primary'} btn-lg mx-1`}
                                    onClick={() => this.handleChangeFiltro('baja')}
                                >
                                    Baja
                                </button>
                            </div>
                        </div>
                        <div className="row pb-3">
                            {ejerciciosFiltrados.map(ejercicio => (
                                <div key={ejercicio.id} className="col-lg-4 col-md-6 mb-4 pb-2">
                                    <div className="blog-item">
                                        <div className="position-relative">
                                            <img
                                                className="img-fluid"
                                                src={`http://127.0.0.1:8000/media/${ejercicio.images}`}
                                                alt=""
                                                style={{ height: '300px', objectFit: 'cover' }}
                                            />
                                            <div className="blog-date">
                                                <h6 className="font-weight-bold mb-n1">Nro</h6>
                                                <h6 className="font-weight-bold mb-n1">{ejercicio.id}</h6>
                                            </div>
                                        </div>
                                        <div className="bg-white p-4">
                                            <div className="d-flex mb-2">
                                                <span className="text-primary text-uppercase text-decoration-none">Nivel</span>
                                                <span className="text-primary px-2">||</span>
                                                <span className="text-primary text-uppercase text-decoration-none">{ejercicio.nivel}</span>
                                            </div>
                                            <a className="h4 m-0 text-decoration-none" href="">{ejercicio.nombre}</a>
                                            <hr></hr>
                                            <p className='m-0 mt-2 '>{ejercicio.descripcion}</p>
                                            <div className="d-grid gap-2">
                                                <button
                                                    className="btn btn-primary mt-3"
                                                    onClick={() => this.handleConsultarIA(ejercicio.id, ejercicio.nombre)}
                                                >
                                                    Consultar con IA
                                                </button>
                                                <button
                                                    className="btn btn-success mt-2"
                                                    onClick={() => this.handleAsignarEjercicio(ejercicio.id)}
                                                >
                                                    Asignar Ejercicio
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Alerta de éxito */}
                {showSuccessAlert && (
                    <div className="alert alert-success alert-dismissible fade show position-fixed bottom-0 end-0 m-3" role="alert">
                        Ejercicio asignado exitosamente.
                        <button type="button" className="btn-close" aria-label="Close" onClick={() => this.setState({ showSuccessAlert: false })}></button>
                    </div>
                )}

                {/* Modal NutriIA */}
                {mostrarNutriIA && (
                    <div className="modal-bg" onClick={this.handleCloseNutriIA}>
                        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                            <NutriIA preguntaInicial={preguntaNutriIA} historialConversacion={historialConversacion} />
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default ViewEjercicio;
