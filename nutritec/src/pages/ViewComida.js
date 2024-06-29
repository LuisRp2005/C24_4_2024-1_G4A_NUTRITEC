import React, { Component } from 'react';
import NavBar from '../components/Navbar';
import axios from 'axios';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Comida } from '../service/Comida';
import { CategoriaComida } from '../service/CategoriaComida';
import NutriIA from '../pages/NutriIA';
import '../pages/styles.css';
import { Modal, Button } from 'react-bootstrap';

// Registramos los elementos de Chart.js que vamos a utilizar
ChartJS.register(ArcElement, Tooltip, Legend);

class ViewComida extends Component {
  constructor() {
    super();
    this.state = {
      comidas: [],
      categorias: [],
      filtroCategoria: 'todas',
      usuario: {},
      preguntaNutriIA: '',
      mostrarNutriIA: false,
      historialConversacion: [],
      loadingUsuario: true,
      showSuccessAlert: false,
      showNutritionChartModal: false
    };

    this.comidaService = new Comida();
    this.categoriaService = new CategoriaComida();
  }

  componentDidMount() {
    this.fetchComidas();
    this.fetchCategorias();
    this.fetchUsuario();
  }

  fetchComidas = () => {
    this.comidaService.getAll()
      .then(data => {
        this.setState({ comidas: data });
      })
      .catch(error => {
        console.error('Error al obtener las comidas:', error);
      });
  };

  fetchCategorias = () => {
    this.categoriaService.getAll()
      .then(data => {
        this.setState({ categorias: data });
      })
      .catch(error => {
        console.error('Error al obtener las categorías de comida:', error);
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
          this.setState({ usuario: data, loadingUsuario: false });
        } else {
          console.error('Error: Datos de usuario incompletos o no encontrados.');
          this.setState({ loadingUsuario: false });
        }
      } else {
        console.error('Error al obtener datos del usuario:', response.statusText);
        this.setState({ loadingUsuario: false });
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
      this.setState({ loadingUsuario: false });
    }
  };

  handleChangeFiltroCategoria = (categoriaId) => {
    this.setState({ filtroCategoria: categoriaId });
  };

  handleVerDetalles = (idComida) => {
    console.log(`Ver detalles de la comida ${idComida}`);
  };

  handleAsignarComida = async (idComida) => {
    const { usuario } = this.state;

    if (!usuario || !usuario.IdUsuario) {
      console.error('No se encontró información del usuario logueado o faltan campos requeridos.');
      return;
    }

    // Crear objeto de asignación de comida
    const asignacionComida = {
      comida: { idComida: idComida },
      usuario: { idUsuario: usuario.IdUsuario },
      fechaHoraRegistro: new Date().toISOString()
    };

    try {
      const response = await axios.post('http://localhost:8080/api/asignacion-comidas', asignacionComida, {
        withCredentials: true
      });

      if (response.status === 200) {
        // Mostrar alerta de éxito y luego desaparecer
        this.setState({ showSuccessAlert: true });

        // Ocultar la alerta después de 3 segundos
        setTimeout(() => {
          this.setState({ showSuccessAlert: false });
        }, 3000);

        console.log('Comida asignada exitosamente:', response.data);
        this.fetchComidas(); // Actualizar la lista de comidas después de asignar
      } else {
        console.error('Error al asignar comida:', response.statusText);
      }
    } catch (error) {
      console.error('Error en la solicitud POST:', error);
    }
  };

  handleConsultarIA = (idComida, nombreComida) => {
    const pregunta = `¿Cómo se prepara ${nombreComida}?`;
    const mensajeUsuario = { sender: 'user', text: pregunta };

    this.setState(prevState => ({
      preguntaNutriIA: pregunta,
      mostrarNutriIA: true,
      historialConversacion: [...prevState.historialConversacion, mensajeUsuario]
    }));
  };

  handleCloseNutriIA = () => {
    this.setState({
      mostrarNutriIA: false
    });
  };

  getNutritionData = () => {
    const { comidas } = this.state;
    const calories = comidas.map(comida => comida.calorias);

    return {
      labels: comidas.map(comida => comida.nombreComida),
      datasets: [
        {
          data: calories,
          backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#4BC0C0',
            '#9966FF',
            '#FF9F40'
          ],
          hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#4BC0C0',
            '#9966FF',
            '#FF9F40'
          ]
        }
      ]
    };
  };

  toggleNutritionChartModal = () => {
    this.setState(prevState => ({ showNutritionChartModal: !prevState.showNutritionChartModal }));
  };

  render() {
    const { comidas, categorias, filtroCategoria, usuario, preguntaNutriIA, mostrarNutriIA, historialConversacion, loadingUsuario, showSuccessAlert, showNutritionChartModal } = this.state;

    if (loadingUsuario) {
      return <p>Cargando...</p>;
    }

    const comidasFiltradas = comidas.filter(comida => {
      if (filtroCategoria === 'todas') {
        return true;
      } else {
        return comida.categoriaComida.idCategoriaComida === filtroCategoria;
      }
    });

    return (
      <div>
        <NavBar />
        <div className="container-fluid py-5">
          <div className="container">
            <div className="text-center mb-5">
              <h1 className="display-3 mb-0" style={{ color: '#7AC534' }}>¡Bienvenido {usuario.nombre ? usuario.nombre : 'Usuario'}!</h1>
              <p className="lead mb-4">Explora nuestra selección de comidas disponibles para ti</p>
              <button className="btn btn-info" onClick={this.toggleNutritionChartModal}>
                {showNutritionChartModal ? 'Ocultar Gráfico Nutricional' : 'Mostrar Gráfico Nutricional'}
              </button>
            </div>
            <div className="text-center mb-4 pb-3">
              <h6 className="text-primary text-uppercase" style={{ letterSpacing: '5px' }}>Categoría</h6>
              <div className="btn-group" role="group" aria-label="Filtros">
                <button
                  type="button"
                  className={`btn btn-${filtroCategoria === 'todas' ? 'primary' : 'outline-primary'} btn-lg mx-1`}
                  onClick={() => this.handleChangeFiltroCategoria('todas')}
                >
                  Todas
                </button>
                {categorias.map(categoria => (
                  <button
                    key={categoria.idCategoriaComida}
                    type="button"
                    className={`btn btn-${filtroCategoria === categoria.idCategoriaComida ? 'primary' : 'outline-primary'} btn-lg mx-1`}
                    onClick={() => this.handleChangeFiltroCategoria(categoria.idCategoriaComida)}
                  >
                    {categoria.nombreCategoria}
                  </button>
                ))}
              </div>
            </div>
            <div className="row justify-content-center">
              {comidasFiltradas.map(comida => (
                <div key={comida.idComida} className="col-lg-4 col-md-6 mb-4">
                  <div className="card border-0 shadow-sm rounded-3">
                    <img
                      src={`http://127.0.0.1:8000/media/${comida.images}`}
                      className="card-img-top img-fluid rounded-3"
                      alt={comida.nombreComida}
                    />
                    <div className="card-body p-4">
                      <div className="d-flex mb-2">
                        <span className="text-primary text-uppercase text-decoration-none">Categoría</span>
                        <span className="text-primary px-2">||</span>
                        <span className="text-primary text-uppercase text-decoration-none">{comida.categoriaComida.nombreCategoria}</span>
                      </div>
                      <a className="h4 m-0 text-decoration-none" href="">{comida.nombreComida}</a>
                      <hr></hr>
                      <p className='m-0 mt-2'>Calorías: {comida.calorias}</p>
                      <div className="d-grid gap-2 mt-4">
                        <button
                          className="btn btn-primary"
                          onClick={() => this.handleConsultarIA(comida.idComida, comida.nombreComida)}
                        >
                          Consultar con IA
                        </button>
                        <button
                          className="btn btn-success mt-2"
                          onClick={() => this.handleAsignarComida(comida.idComida)}
                        >
                          Asignar Comida
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
          <div className="position-fixed top-0 start-50 translate-middle-x mt-3">
            <div className="alert alert-success alert-dismissible fade show" role="alert">
              ¡Comida asignada exitosamente!
              <button type="button" className="btn-close" onClick={() => this.setState({ showSuccessAlert: false })}></button>
            </div>
          </div>
        )}

        {/* Modal Gráfico Nutricional */}
        <Modal show={showNutritionChartModal} onHide={this.toggleNutritionChartModal}>
          <Modal.Header closeButton>
            <Modal.Title>Gráfico Nutricional</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="comida-nutrition-chart">
              <Doughnut data={this.getNutritionData()} />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.toggleNutritionChartModal}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>

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

export default ViewComida;
