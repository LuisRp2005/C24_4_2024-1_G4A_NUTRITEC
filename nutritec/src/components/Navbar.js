import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../pages/styles.css';

const NavBar = () => {
    const [userName, setUserName] = useState('');

    useEffect(() => {
        // Realizar una solicitud GET para obtener los datos del usuario autenticado
        const fetchUsuario = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/v1/datos', {
                    headers: {
                        'Content-Type': 'application/json',
                        // Aquí podrías incluir el token de autorización si es necesario
                    },
                    withCredentials: true // Incluye credenciales (cookies) en la solicitud
                });

                if (response.status === 200) {
                    const data = response.data;
                    setUserName(data.nombre); // Actualizar el estado con el nombre del usuario
                } else {
                    console.error('Error al obtener datos del usuario:', response.statusText);
                    // Manejar el error adecuadamente (mostrar mensaje al usuario, etc.)
                }
            } catch (error) {
                console.error('Error en la solicitud:', error);
                // Manejar el error adecuadamente (mostrar mensaje al usuario, etc.)
            }
        };

        fetchUsuario();
    }, []);
    return (
        <div className="container-fluid p-0 nav-bar">
            <nav className="navbar navbar-expand-lg navbar-dark">
                <a href="/home" className="navbar-brand px-lg-4 m-0">
                    <h1 className="m-0 display-4">
                        <span style={{ color: '#7AC534'}}>Nutri</span>
                        <span style={{ color: '#fff'}}>Tec</span>
                    </h1>
                </a>
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                    <div className="navbar-nav ml-auto p-4">
                        <a href="/home" className="nav-item nav-link active">Home</a>
                        <a href="/ViewEjercicio" className="nav-item nav-link">Ejercicios</a>
                        <a href="/viewComida" className="nav-item nav-link">Comida</a>
                        <a href="/NutriIA" className="nav-item nav-link">NutrIA</a>
                        <a href="/viewComidaDesig" className="nav-item nav-link">Comida Designada</a>
                        <a href="/viewEjercicioDesig" className="nav-item nav-link">Ejercicio Designado</a>
                        
                    </div>
                    <div className="nav-item ms-auto px-5">
                        <a href='/Usuario'><button className="btn btn-outline-light">{userName || 'Usuario'}</button></a>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;
