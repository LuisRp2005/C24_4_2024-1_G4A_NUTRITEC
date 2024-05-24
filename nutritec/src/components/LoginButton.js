import React from 'react';
import { useGoogleLogin } from '@react-oauth/google';

const LoginButton = () => {
  const login = useGoogleLogin({
    onSuccess: async tokenResponse => {
      try {
        const response = await fetch('http://localhost:8080/oauth2/authorization/google', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${tokenResponse.access_token}`
          }
        });
        const data = await response.json();
        console.log('Login success:', data);

      } catch (error) {
        console.error('Login failed:', error);
      }
    }
  });

  return (
    <button onClick={() => login()}>
      Inicia Sesión con Correo de TECSUP
    </button>
  );
};

export default LoginButton;
