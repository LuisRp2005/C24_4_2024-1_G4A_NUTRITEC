import React, { useState, useEffect } from 'react';
import NavBar from '../components/Navbar';
import axios from '../service/axiosConfig';
import '../pages/styles.css';

const Formulario = () => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [talla, setTalla] = useState('');
    const [peso, setPeso] = useState('');
    const [fechaNacimiento, setFechaNacimiento] = useState('');
    const [genero, setGenero] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [correo, setCorreo] = useState('');

    useEffect(() => {
        const storedCorreo = localStorage.getItem('email');
        if (storedCorreo) {
            setCorreo(storedCorreo);
        } else {
            axios.get('/token')
                .then(response => {
                    const usuario = response.data;
                    setCorreo(usuario.email);
                    localStorage.setItem('email', usuario.email); // Guardar el correo en localStorage
                })
                .catch(error => {
                    console.error("Error al obtener los datos del usuario:", error);
                    if (error.response && error.response.status === 401) {
                        // Redirigir a la página de inicio de sesión o renovar el token
                        console.error("Token no válido o expirado. Redirigiendo a la página de inicio de sesión.");
                        // Redirigir al usuario a la página de inicio de sesión
                    }
                });
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
    
        const usuarioData = {
            nombre: nombre,
            apellido: apellido,
            altura: talla,
            peso: peso,
            fechaNacimiento: fechaNacimiento,
            genero: genero,
            contraseña: contraseña,
            correo: correo // incluir el correo en los datos enviados
        };
    
        console.log(usuarioData); 
    
        axios.post('/usuario', usuarioData)
            .then(response => {
                console.log("Datos del usuario guardados:", response.data);
            })
            .catch(error => {
                console.error("Error al guardar los datos del usuario:", error);
            });
    };

    return (
        <div className="green-background"> {/* Clase para el fondo verde */}
            <NavBar />
            <div className="formulario-container">
                <div className="formulario">
                    <h1 className="titulo">¡Registra tus datos!</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="form-row">
                            <div className="form-group col-md">
                                <label htmlFor="nombre">Nombre:</label>
                                <input
                                    type="text"
                                    id="nombre"
                                    value={nombre}
                                    onChange={(e) => setNombre(e.target.value)}
                                    placeholder="Ingrese su nombre"
                                    required
                                    className="form-control"
                                />
                            </div>
                            <div className="form-group col-md">
                                <label htmlFor="apellido">Apellido:</label>
                                <input
                                    type="text"
                                    id="apellido"
                                    value={apellido}
                                    onChange={(e) => setApellido(e.target.value)}
                                    placeholder="Ingrese su apellido"
                                    required
                                    className="form-control"
                                />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md">
                                <label htmlFor="talla">Talla (cm):</label>
                                <input
                                    type="number"
                                    id="talla"
                                    value={talla}
                                    onChange={(e) => setTalla(e.target.value)}
                                    placeholder="Ingrese su talla"
                                    required
                                    className="form-control"
                                />
                            </div>
                            <div className="form-group col-md">
                                <label htmlFor="peso">Peso (kg):</label>
                                <input
                                    type="number"
                                    id="peso"
                                    value={peso}
                                    onChange={(e) => setPeso(e.target.value)}
                                    placeholder="Ingrese su peso"
                                    required
                                    className="form-control"
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="fechaNacimiento">Fecha de Nacimiento:</label>
                            <input
                                type="date"
                                id="fechaNacimiento"
                                value={fechaNacimiento}
                                onChange={(e) => setFechaNacimiento(e.target.value)}
                                placeholder="Ingrese su fecha de nacimiento"
                                required
                                className="form-control"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="genero">Género:</label>
                            <select
                                id="genero"
                                value={genero}
                                onChange={(e) => setGenero(e.target.value)}
                                required
                                className="form-control"
                            >
                                <option value="">Seleccione su género</option>
                                <option value="M">Masculino</option>
                                <option value="F">Femenino</option>
                                <option value="O">Otro</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="contraseña">Contraseña:</label>
                            <input
                                type="password"
                                id="contraseña"
                                value={contraseña}
                                onChange={(e) => setContraseña(e.target.value)}
                                placeholder="Ingrese su contraseña"
                                required
                                className="form-control"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="correo">Correo:</label>
                            <input
                                type="email"
                                id="correo"
                                value={correo}
                                readOnly
                                className="form-control"
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">Guardar Datos</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Formulario;
