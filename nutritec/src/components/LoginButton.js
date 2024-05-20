import React from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';

const LoginButton = () => {
  const navigate = useNavigate();

  const login = useGoogleLogin({
    onSuccess: async tokenResponse => {
      const response = await fetch('http://localhost:8080/login/oauth2/code/google', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ token: tokenResponse.access_token })
      });

      const sessionCookie = response.headers.get('Set-Cookie');
      console.log('Session Cookie:', sessionCookie);

      if (response.ok) {
        // Redirigir al usuario a la página de inicio en el frontend
        navigate('/home');
      } else {
        console.error('Error during login:', await response.text());
      }
    },
    onError: error => console.error('Login Failed:', error)
  });

  return (
    <button onClick={() => login()}>
      Inicia Sesión con Correo de TECSUP
    </button>
  );
};

export default LoginButton;

