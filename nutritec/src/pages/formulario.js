import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate en lugar de useHistory
import NavBar from '../components/Navbar';
import axios from '../service/axiosConfig';
import '../pages/styles.css';
import Token from '../components/Token';
import TokenService from '../service/TokenService';

const Formulario = ({ initialEmail }) => {
    const navigate = useNavigate(); // Utiliza useNavigate para navegación

    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [talla, setTalla] = useState('');
    const [peso, setPeso] = useState('');
    const [fechaNacimiento, setFechaNacimiento] = useState('');
    const [genero, setGenero] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [correo, setCorreo] = useState(initialEmail || '');

    useEffect(() => {
        TokenService.getToken()
            .then((response) => {
                if (response && response.email) {
                    setCorreo(response.email);
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const usuarioData = {
            nombre,
            apellido,
            altura: talla,
            peso,
            fechaNacimiento,
            genero,
            contraseña,
            correo
        };

        console.log(usuarioData);

        try {
            const response = await axios.post('/usuario', usuarioData);
            console.log("Datos del usuario guardados:", response.data);

            // Redirige a '/home' después de guardar exitosamente
            navigate('/home');
        } catch (error) {
            console.error("Error al guardar los datos del usuario:", error);
        }
    };

    return (
        <div className="green-background">
            <NavBar />
            <div className="formulario-container">
                <div className="formulario">
                    <h1 className="titulo">¡Registra tus datos!</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
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
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
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
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
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
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
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
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="fechaNacimiento">F. Nacimiento:</label>
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
                            </div>
                            <div className="col-md-6">
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
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="correo">Correo:</label>
                            <input
                                type="email"
                                id="correo"
                                value={correo}
                                onChange={(e) => setCorreo(e.target.value)}
                                className="form-control"
                            />
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
                        
                        <button type="submit" className="btn btn-primary">Guardar Datos</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

const FormularioWithToken = () => (
    <Token>
        {({ email }) => <Formulario initialEmail={email} />}
    </Token>
);

export default FormularioWithToken;
