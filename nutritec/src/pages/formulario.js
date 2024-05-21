import React, { useState } from 'react';
import NavBar from '../components/Navbar';
import '../pages/styles.css';

const Formulario = () => {
    const [talla, setTalla] = useState('');
    const [peso, setPeso] = useState('');
    const [fechaNacimiento, setFechaNacimiento] = useState('');
    const [genero, setGenero] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Talla:", talla);
        console.log("Peso:", peso);
        console.log("Fecha de Nacimiento:", fechaNacimiento);
        console.log("Género:", genero);
    }

    return (
        <div className="green-background"> {/* Clase para el fondo verde */}
            <NavBar />
            <div className="formulario-container">
                <div className="formulario">
                    <h1 className="titulo">¡Registra tus datos!</h1>
                    <form onSubmit={handleSubmit}>
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
                        </div><div className="form-group col-md">
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
                               
                                <option value="masculino">Masculino</option>
                                <option value="femenino">Femenino</option>

                            </select>
                        </div>
                        <button type="submit" className="btn btn-primary btn-block">Enviar</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Formulario;
