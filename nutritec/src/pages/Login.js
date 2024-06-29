import React from 'react';
import '../pages/login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAppleAlt, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

const LoginGoogle = () => {
  // Function to redirect to Google login
  window.location.href = "http://localhost:8080/oauth2/authorization/google";
}

const Login = () => {
  return (
    <section className="section">
      <div className='contenedor'>
        <form action="#">
        <h1 className='title text-center'>
          NutriTec<FontAwesomeIcon icon={faAppleAlt} style={{ fontSize: '3rem', marginRight: '50px', color: '#068827' }} className='mx-3'> </FontAwesomeIcon>
        </h1>
          <div className='input-contenedor'>
            <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: '1.2rem', marginRight: '10px', color: '#015805' }} />
            <input className='input' type='email' id='email' name='email' placeholder='Tu correo electrónico' />

          </div>

          <div className='input-contenedor'>
            <FontAwesomeIcon icon={faLock} style={{ fontSize: '1.2rem', marginRight: '10px', color: '#015805' }} />
            <input className='input' type='password' id='password' name='password' placeholder='Tu contraseña' />
          </div>

          <div className='olvidar'>
            <label className='label'>
              <a href="#">Olvidé la Contraseña</a>
            </label>
          </div>

          <button className='button'>Acceder</button>

          <button 
            type="button" 
            onClick={LoginGoogle} 
            className="google-button">
            <img 
              src="google.jpg" 
              alt="Google Logo" 
              style={{ 
                width: '20px', 
                height: '20px', 
                marginRight: '8px' 
              }} 
              />
              Iniciar Sesión con Google
          </button>

          <div className='registrar'>
            <p>No tengo cuenta <a href='#'>Crear una</a></p>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Login;
