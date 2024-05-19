import React, { Component } from 'react';
import { Comida } from '../service/Comida';
import NavBar from '../components/Navbar';
import '../pages/styles.css';

class ViewComida extends Component {
    constructor() {
        super();
        this.state = {
            comidas: [] 
        };
        this.comidaService = new Comida(); 
    }

    componentDidMount() {
        this.comidaService.getAll().then(data => {
            this.setState({ comidas: data });
        }).catch(error => {
            console.error('Error al obtener las comidas:', error);
        });
    }

    render() {
        return (
            <div>
                <NavBar />
                <div className="container-fluid p-0 mb-5">
                    <div id="blog-carousel" className="carousel slide overlay-bottom" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="w-100" src='/carrusel1.jpg' alt="Image" />
                                <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                    <h1 className="display-1 text-white">Comidas</h1>
                                    <h3 className="text-white m-0">* Comidas que te ayudarán a llegar a tu requerimiento deseado *</h3>
                                </div>
                            </div>
                        </div>  
                    </div>
                </div>
                <div className="container-fluid py-5">
                    <div className="container pt-5 pb-3">
                        <div className="text-center mb-3 pb-3">
                            <h6 className="text-primary text-uppercase" style={{ letterSpacing: '5px' }}>Comida</h6>
                            <h1>Platillos Para Una Dieta Saludable</h1>
                        </div>
                        <div className="row pb-3">
                            {this.state.comidas.map(comida => (
                                <div key={comida.idComida} className="col-lg-4 col-md-6 mb-4 pb-2">
                                    <div className="blog-item">
                                        <div className="position-relative">
                                            <img className="img-fluid w-100" src="/img_referencial2.jpg" alt="" />
                                            <div className="blog-date">
                                                <h6 className="font-weight-bold mb-n1">Nro</h6>
                                                <h6 className="font-weight-bold mb-n1">{comida.idComida}</h6>
                                            </div>
                                        </div>
                                        <div className="bg-white p-4">
                                            <div className="d-flex mb-2">
                                                <span className="text-primary text-uppercase text-decoration-none">Categoria</span>
                                                <span className="text-primary px-2">||</span>
                                                <span className="text-primary text-uppercase text-decoration-none">{comida.categoriaComida.nombreCategoria}</span>
                                            </div>
                                            <a className="h4 m-0 text-decoration-none" href="">{comida.nombreComida}</a>
                                            <hr />
                                            <p className='m-0 mt-2'>Calorias: {comida.calorias}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ViewComida;
