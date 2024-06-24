import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginAdmin = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            alert('Por favor ingrese correo electrónico y contraseña');
            return;
        }

        try {
            const response = await axios.get('http://127.0.0.1:8000/nutritec/Usuario/');
            
            const usuario = response.data.find(user => user.correo === email && user.contraseña === password);

            if (usuario && usuario.rol === 1) {
                // Inicio de sesión exitoso para usuario con rol 1
                navigate('/navigations'); // Redirige a la página de navegación principal
            } else {
                // Usuario no autorizado o con rol diferente a 1
                alert('Usuario no autorizado');
            }
        } catch (error) {
            console.error('Error al iniciar sesión:', error);
            alert('Error al iniciar sesión. Verifique sus credenciales.');
        }
    };

    return (
        <div className="container h-screen flex justify-center items-center">
            <form className="login-form w-full max-w-md p-8 bg-gray-900 rounded-lg" onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="email" className="text-white">Correo Electrónico:</label>
                    <input
                        type="email"
                        className="form-input bg-black text-white w-full mt-2 p-2 rounded-lg"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="text-white">Contraseña:</label>
                    <input
                        type="password"
                        className="form-input bg-black text-white w-full mt-2 p-2 rounded-lg"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Iniciar Sesión
                </button>
            </form>
        </div>
    );
};

export default LoginAdmin;
