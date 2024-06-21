import React, { useState, useEffect } from "react";
import TokenService from "../service/TokenService";

const Token = ({ children }) => {
    const [email, setEmail] = useState('');
    const [token, setToken] = useState('');

    useEffect(() => {
        TokenService.getToken()
            .then(response => {
                const { email, token } = response;
                setEmail(email);
                setToken(token);
                localStorage.setItem('email', email);
                localStorage.setItem('token', token);
            })
            .catch(error => {
                console.error("Error al obtener los datos del usuario:", error);
                if (error.response && error.response.status === 401) {
                    console.error("Token no válido o expirado. Redirigiendo a la página de inicio de sesión.");
                    // Aquí puedes agregar lógica para redirigir a la página de inicio de sesión
                }
            });
    }, []);

    return <>{children({ email, token })}</>;
}

export default Token;
