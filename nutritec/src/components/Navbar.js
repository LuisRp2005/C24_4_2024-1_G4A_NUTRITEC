import React from 'react';
import '../pages/styles.css';

const NavBar = () => {
    return (
        <div className="container-fluid p-0 nav-bar">
            <nav className="navbar navbar-expand-lg bg-none navbar-dark" style={{ background: 'linear-gradient(to bottom, rgb(0, 0, 0), rgb(0,0,0 ))' }}>
            <a href="/home" className="navbar-brand px-lg-4 m-0">
                <h1 className="m-0 display-4">
                    <span style={{ color: '#7AC534'}}>Nutri</span>
                    <span style={{ color: 'white'}}>Tec</span>
                </h1>
            </a>
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                    <div className="navbar-nav ml-auto p-4">
                        <a href="/home" className="nav-item nav-link active">Home</a>
                        <a href="/ViewEjercicio" className="nav-item nav-link">Ejercicios</a>
                        <a href="service.html" className="nav-item nav-link">Service</a>
                        <a href="menu.html" className="nav-item nav-link">Menu</a>
                        <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Pages</a>
                            <div className="dropdown-menu text-capitalize">
                                <a href="reservation.html" className="dropdown-item">Reservation</a>
                                <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                            </div>
                        </div>
                        <a href="contact.html" className="nav-item nav-link">Contact</a>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;

