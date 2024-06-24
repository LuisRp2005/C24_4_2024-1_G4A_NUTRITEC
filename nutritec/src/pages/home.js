import React from 'react';
import '../pages/styles.css';
import NavBar from '../components/Navbar';


const Home = () => {
    return (
        <div>
            <NavBar />
            <div className="container-fluid p-0 mb-5">
                <div id="blog-carousel" className="carousel slide overlay-bottom" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="w-100" src='/carrusel2.jpg' alt="Image" />
                            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <h3 className="text-success font-weight-medium m-0">* Con ayuda de la IA te ayudaremos a mejorar *</h3>
                                <h1 className="display-1 text-white">NutriTec</h1>
                                <h3 className="text-white m-0">* Con ayuda de la IA te ayudaremos a mejorar *</h3>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="w-100" src="/carrusel2.jpg" alt="Image" />
                            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <h2 className="text-primary font-weight-medium m-0">We Have Been Serving</h2>
                                <h1 className="display-1 text-white m-0">NutriTec</h1>
                                <h2 className="text-white m-0">* SINCE 1950 *</h2>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#blog-carousel" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#blog-carousel" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div className="container-fluid py-5">
                <div className="container pt-5 pb-3">
                    <div className="text-center mb-3 pb-3">
                        <h6 className="text-primary text-uppercase" style={{ letterSpacing: '5px' }}>Services</h6>
                        <h1>Servicios de NutriTec</h1>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="service-item bg-white text-center mb-2 py-5 px-4">
                                <i className="fa fa-2x fa-route mx-auto mb-4"></i>
                                <h4 className="mb-2">Ejercicios</h4>
                                <p className="m-0">Justo sit justo eos amet tempor amet clita amet ipsum eos elitr. Amet lorem est amet labore</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="service-item bg-white text-center mb-2 py-5 px-4">
                                <i className="fa fa-2x fa-ticket-alt mx-auto mb-4"></i>
                                <h4 className="mb-2">Comida</h4>
                                <p className="m-0">Justo sit justo eos amet tempor amet clita amet ipsum eos elitr. Amet lorem est amet labore</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="service-item bg-white text-center mb-2 py-5 px-4">
                                <i className="fa fa-2x fa-hotel mx-auto mb-4"></i>
                                <h4 className="mb-2">Nutri IA</h4>
                                <p className="m-0">Justo sit justo eos amet tempor amet clita amet ipsum eos elitr. Amet lorem est amet labore</p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr></hr>
                <div className="card mb-5 text-center" style={{ maxWidth: '540px' }}>
                <div className="row">
                    <div className="col-md-4">
                    <img src="/movil.jpg" className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8 d-flex align-items-center">
                    <div className="card-body mx-auto">
                        <h3 className="card-title">Descarga nuestra App Movil !!!</h3>
                        <p className="card-text">Ahora tambien nos puedes poder usar en nuestra app movil</p>
                        <p className="card-text"><small className="text-body-secondary">Ya esta disponible !!!</small></p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Home;