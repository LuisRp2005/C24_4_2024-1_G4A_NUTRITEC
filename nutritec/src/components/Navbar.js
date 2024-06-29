import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../pages/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAlt, faBrain } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
    const [userName, setUserName] = useState('');

    useEffect(() => {
        const fetchUsuario = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/v1/datos', {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    withCredentials: true,
                });

                if (response.status === 200) {
                    const data = response.data;
                    setUserName(data.nombre);
                } else {
                    console.error('Error al obtener datos del usuario:', response.statusText);
                }
            } catch (error) {
                console.error('Error en la solicitud:', error);
            }
        };

        fetchUsuario();
    }, []);

    const handleLogout = () => {
        // Eliminar el token de autenticación (si está almacenado en localStorage)
        localStorage.removeItem('authToken');
        // O eliminar la cookie de autenticación
        document.cookie = 'authToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        // Redirigir al usuario a la página de inicio de sesión
        window.location.href = '/';
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/home">
                    <h1 className="m-0 display-4">
                        <span style={{ color: '#7AC534'}}>Nutri</span>
                        <span style={{ color: '#fff'}}>Tec</span>
                    </h1>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/ViewEjercicio">Ejercicios</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/viewComida">Comida</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/NutriIA" style={{ color: '#7AC534', fontWeight: 'bold' }}>
                                NutrIA <FontAwesomeIcon icon={faBrain} className='ml-1' />
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/viewComidaDesig">Comida Designada</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/viewEjercicioDesig">Ejercicio Designado</a>
                        </li>
                    </ul>
                    <div className="nav-item dropdown ms-auto px-3 bg-white btn">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            {userName || 'Usuario'}<FontAwesomeIcon icon={faUserAlt} className='mx-2'/>
                        </a>
                        <ul className="dropdown-menu dropdown-menu-end bg-white" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" href="/Usuario">Perfil</a></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><button className="dropdown-item" onClick={handleLogout}>Cerrar sesión</button></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
