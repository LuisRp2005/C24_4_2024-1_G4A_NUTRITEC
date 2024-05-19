import React from 'react';
import '../pages/styles.css';
import NavBar from '../components/Navbar';

const Usuario = () => {
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
                    
                    <div className="user-info">
                        <div className="form-group">
                            <label htmlFor="nombre">Nombre:</label>
                            <input type="text" id="nombre" className="form-input" value="Luis Deyvid" readOnly />
                        </div>
                        <div className="form-group">
                            <label htmlFor="apellido">Apellido:</label>
                            <input type="text" id="apellido" className="form-input" value="Rivera Pazzara" readOnly />
                        </div>
                        <div className="form-group">
                            <label htmlFor="correo">Correo:</label>
                            <input type="email" id="correo" className="form-input" value="luis123@gmail.com" readOnly />
                        </div>
                        <div className="form-group">
                            <label htmlFor="fechaNacimiento">Fecha de Nacimiento:</label>
                            <input type="date" id="fechaNacimiento" className="form-input" value="2005-10-02" readOnly />
                        </div>
                        <div className="form-group">
                            <label htmlFor="talla">Talla (cm):</label>
                            <input type="number" id="talla" className="form-input" value="170" readOnly />
                        </div>
                        <div className="form-group">
                            <label htmlFor="peso">Peso (kg):</label>
                            <input type="number" id="peso" className="form-input" value="50" readOnly />
                        </div>
                        <div className="form-group">
                            <label htmlFor="imc">IMC:</label>
                            <input type="text" id="imc" className="form-input" value="27.2" readOnly />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Usuario;


