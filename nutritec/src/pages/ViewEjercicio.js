import React, { Component } from 'react';
import { Ejercicio } from '../service/Ejercicio';
import NavBar from '../components/Navbar';
import '../pages/styles.css'; // Asegúrate de importar tu archivo de estilos CSS

class ViewEjercicio extends Component { 
    constructor() {
        super();
        this.state = {
            ejercicios: [] 
        };
        this.ejercicioService = new Ejercicio(); 
    }

    componentDidMount() {
        // Obtener los ejercicios al montar el componente
        this.ejercicioService.getAll().then(data => {
            this.setState({ ejercicios: data });
        }).catch(error => {
            console.error('Error al obtener los ejercicios:', error);
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
                                <img className="w-100" src='/view_ejercicios.jpg' alt="Image" />
                                <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                    <h1 className="display-1 text-white">Ejercicios</h1>
                                    <h3 className="text-white m-0">* Ejercicios que hacen mejorar tu calidad de vida y a lograr tus objetivos*</h3>
                                </div>
                            </div>
                        </div>  
                    </div>
                </div>
                <div className="container-fluid py-5">
                    <div className="container pt-5 pb-3">
                        <div className="text-center mb-3 pb-3">
                            <h6 className="text-primary text-uppercase" style={{ letterSpacing: '5px' }}>Rutina</h6>
                            <h1>Ejercicios</h1>
                        </div>
                        <div className="row pb-3">
                            {this.state.ejercicios.map(ejercicio => (
                                <div key={ejercicio.id} className="col-lg-4 col-md-6 mb-4 pb-2">
                                    <div className="blog-item">
                                        <div className="position-relative">
                                            <img className="img-fluid w-100" src="/img_referencial.jpg" alt="" />
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

export default ViewEjercicio;
