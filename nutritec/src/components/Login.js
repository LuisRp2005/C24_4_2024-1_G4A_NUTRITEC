import React from 'react';
import './styles.css';
import GoogleLogin from 'react-google-login';

const Login = () => {

  const RespuestaGoogle = (response) => {
    console.log(response)
  }

  return (
    <div className='container-fluid'>
      <div className="row">
        {/* Columna para la imagen */}
        <div className="col-md-6 d-none d-md-block" style={{ background: '#FFF5E0', height: '100vh' }}>
          <div className=' flex-column'>
            <h2 className='p-5'>
              <span style={{ color: 'green' }}>Nutri</span>
              <span style={{ color: '#141E46' }}>Tec</span>
            </h2>
            
          </div>
            <div className='mt-5 p-5 login-description'>
                <h1 className='mt-5'>Nutriendo tu Bienestar: “Tu guía personalizada hacia una vida saludable."</h1>
            </div>
        </div>
       
        {/* Columna para el formulario */}
        <div className="col-md-6" style={{ height: '100vh', overflowY: 'auto' }}>
          <div className='d-flex flex-column justify-content-center align-items-center h-100'>
            <h1 className='text-center mt-5'>
              <span style={{ color: 'green' }}>Nutri</span>
              <span style={{ color: '#141E46' }}>Tec</span>
            </h1>
            <form className="border-left p-5">
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Correo Electrónico</label>
                <input type="email" className="form-control" id="email" />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Contraseña</label>
                <input type="password" className="form-control" id="password" />
              </div>
              <div className='text-center mt-4'>
                  <button type="submit" className="btn btn-primary">Iniciar Sesión</button>
                  
                  <p className='mt-3'>O también:</p>

                 <GoogleLogin
                  clientId="562434628830-oth6ci1o114k7bfgstmqaq0ardicrk1l.apps.googleusercontent.com"
                  buttonText='Inicia Sesión con Correo de TECSUP'
                  onSuccess={RespuestaGoogle}
                  onFailure={RespuestaGoogle}
                  cookiePolicy={'single_host_origin'}
                  isSignedIn={true}
                 />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

