import React, { useState, useEffect } from 'react';
import '../pages/styles.css';
import NavBar from '../components/Navbar';

const Usuario = () => {
    const [usuario, setUsuario] = useState(null);

    useEffect(() => {
        fetchUsuario();
    }, []);

    const fetchUsuario = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/v1/datos', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    // Aquí podrías incluir el token de autorización si es necesario
                },
                credentials: 'include' // Puede ser necesario incluir dependiendo de tu configuración CORS
            });

            if (response.ok) {
                const data = await response.json();
                setUsuario(data);
            } else {
                console.error('Error al obtener datos del usuario:', response.statusText);
                // Manejar el error adecuadamente (mostrar mensaje al usuario, etc.)
            }
        } catch (error) {
            console.error('Error en la solicitud:', error);
            // Manejar el error adecuadamente (mostrar mensaje al usuario, etc.)
        }
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        let month = (date.getMonth() + 1).toString().padStart(2, '0'); // Month is zero-based
        let day = date.getDate().toString().padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    return (
        <div>
            <NavBar />
            <div className="user-container">
                <h1 className='user-title'>Usuario</h1>
                <div className="user-avatar">
                    <label htmlFor="foto" className="avatar-label">
                        <img src="/img_usuario.png" alt="Avatar" className="avatar-img" />
                    </label>
                </div>
                <form className="user-form">
                    {usuario && (
                        <div className="user-info">
                            <div className="form-group">
                                <label htmlFor="nombre">Nombre:</label>
                                <input type="text" id="nombre" className="form-input" value={usuario.nombre} readOnly />
                            </div>
                            <div className="form-group">
                                <label htmlFor="apellido">Apellido:</label>
                                <input type="text" id="apellido" className="form-input" value={usuario.apellido} readOnly />
                            </div>
                            <div className="form-group">
                                <label htmlFor="correo">Correo:</label>
                                <input type="email" id="correo" className="form-input" value={usuario.correo} readOnly />
                            </div>
                            <div className="form-group">
                                <label htmlFor="fechaNacimiento">Fecha de Nacimiento:</label>
                                <input type="date" id="fechaNacimiento" className="form-input" value={formatDate(usuario.fechaNacimiento)} readOnly />
                            </div>
                            <div className="form-group">
                                <label htmlFor="talla">Talla (cm):</label>
                                <input type="number" id="talla" className="form-input" value={parseFloat(usuario.talla)} readOnly />
                            </div>
                            <div className="form-group">
                                <label htmlFor="peso">Peso (kg):</label>
                                <input type="number" id="peso" className="form-input" value={usuario.peso} readOnly />
                            </div>
                            <div className="form-group">
                                <label htmlFor="imc">IMC:</label>
                                <input type="text" id="imc" className="form-input" value={usuario.imc} readOnly />
                            </div>
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
};

export default Usuario;
