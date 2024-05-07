
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
                                <h3 className="text-primary font-weight-medium m-0">* Con ayuda de la IA te ayudaremos a mejorar *</h3>
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
        </div>
    )
}

export default Home;