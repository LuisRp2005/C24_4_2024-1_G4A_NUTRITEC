import React from 'react';
import '../pages/styles.css';

const LoginGoogle = () => {
  window.location.href = "http://localhost:8080/oauth2/authorization/google";
  
}

const Login = () => {
  return (
    <div className='container-fluid'>
      <div className="row">
        <div className="col-md-6 d-none d-md-block" style={{ background: 'linear-gradient(135deg, #c0af72, #f2df9b)', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <h1 className='p-4 mt-5' style={{ fontWeight: 'bold', fontSize: '3rem' }}>
            <span style={{ color: 'green' }}>Nutri</span>
            <span style={{ color: '#141E46' }}>Tec</span>
          </h1>
          <p style={{ color: '#FFF', fontSize: '2.5rem', marginTop: '19rem', background: 'linear-gradient(to top, rgba(255, 255, 250, 0), #000000)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: 'bold' }}>
            Nutriendo tu Bienestar: “Tu guía personalizada hacia una vida saludable."
          </p>
        </div>

        <div className="col-md-6" style={{ height: '100vh', overflowY: 'auto' }}>
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
                <button type="submit" className="btn btn-primary">Iniciar Sesión</button>
                <p className='mt-3'>O también:</p>
                <button 
                    type="button" 
                    onClick={LoginGoogle} 
                    className="btn btn-write" 
                    style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        border: '1px solid #000', // Borde delgado
                        padding: '8px 16px', // Añadir padding para una mejor apariencia
                        borderRadius: '4px' // Redondear bordes opcionalmente
                    }}>
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
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
