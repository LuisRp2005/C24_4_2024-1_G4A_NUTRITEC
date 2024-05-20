import React from 'react';
import '../pages/styles.css';
import { GoogleOAuthProvider } from '@react-oauth/google'; // Asegúrate de que esta importación es correcta
import LoginButton from "../components/LoginButton";

const Login = () => {
  return (
    <div className='container-fluid'>
      <div className="row">
<<<<<<< HEAD
        {/* Columna para la imagen */}
        <div className="col-md-6 d-none d-md-block" style={{ background: 'linear-gradient(135deg,  #c0af72, #f2df9b)', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '2rem' }}>
          <h1 className='logo' style={{ fontWeight: 'bold', fontSize: '3rem', marginBottom: '1rem' }}>
              <span style={{ color: 'green' }}>Nutri</span>
              <span style={{ color: '#141E46' }}>Tec</span>
          </h1>
          <p className='slogan'>
=======
        <div className="col-md-6 d-none d-md-block" style={{ background: 'linear-gradient(135deg, #c0af72, #f2df9b)', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <h1 className='p-4 mt-5' style={{ fontWeight: 'bold', fontSize: '3rem' }}>
            <span style={{ color: 'green' }}>Nutri</span>
            <span style={{ color: '#141E46' }}>Tec</span>
          </h1>
          <p style={{ color: '#FFF', fontSize: '2.5rem', marginTop: '19rem', background: 'linear-gradient(to top, rgba(255, 255, 250, 0), #000000)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: 'bold' }}>
>>>>>>> 0d95963aeda0a8a642626a3a69dc9a2174776dec
            Nutriendo tu Bienestar: “Tu guía personalizada hacia una vida saludable."
          </p>
        </div>

<<<<<<< HEAD
       
        {/* Columna para el formulario */}
        <div className="col-md-6" style={{ height: '100vh', overflowY: 'auto', background: '#f2f2f2', padding: '2rem' }}>
=======
        <div className="col-md-6" style={{ height: '100vh', overflowY: 'auto' }}>
>>>>>>> 0d95963aeda0a8a642626a3a69dc9a2174776dec
          <div className='d-flex flex-column justify-content-center align-items-center h-100'>
            <h1 className='text-center mb-4'>
              <span style={{ color: 'green' }}>Nutri</span>
              <span style={{ color: '#141E46' }}>Tec</span>
            </h1>
            <form className="login-form">
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Correo Electrónico:</label>
                <input type="email" className="form-control" id="email" />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Contraseña:</label>
                <input type="password" className="form-control" id="password" />
              </div>
              <div className='text-center mt-4'>
<<<<<<< HEAD
                  <button type="submit" className="btn btn-primary btn-block">Iniciar Sesión</button>
                  
                  <p className='mt-3'>O también:</p>
=======
                <button type="submit" className="btn btn-primary">Iniciar Sesión</button>
                <p className='mt-3'>O también:</p>
>>>>>>> 0d95963aeda0a8a642626a3a69dc9a2174776dec

                <GoogleOAuthProvider clientId="562434628830-oth6ci1o114k7bfgstmqaq0ardicrk1l.apps.googleusercontent.com">
                  <div className="App">
                    <LoginButton />
                  </div>
                </GoogleOAuthProvider>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
