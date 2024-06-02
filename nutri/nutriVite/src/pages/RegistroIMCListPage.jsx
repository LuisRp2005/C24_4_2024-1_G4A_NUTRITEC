import React, { useState, useEffect } from 'react';
import { getAllRegistroIMC } from '../api/registroIMC'; // Asegúrate de importar la función para obtener todos los registros IMC
import { Link } from 'react-router-dom';

export function RegistroIMCListPage() {
    const [registros, setRegistros] = useState([]);

    useEffect(() => {
        async function fetchRegistros() {
            try {
                const response = await getAllRegistroIMC(); // Llama a la función para obtener todos los registros IMC
                setRegistros(response.data);
            } catch (error) {
                console.error('Error fetching registros IMC:', error);
            }
        }
        
        fetchRegistros();
    }, []);

    return (
        <div>
            <h1>Lista de Registros IMC</h1>
            <ul>
                {registros.map((registro) => (
                    <li key={registro.id}>
                        <h2>{registro.usuario} - {registro.tipo_imc}</h2>
                        <p>Fecha y hora de registro: {registro.fecha_hora_registro}</p>
                        {/* Aquí puedes agregar más detalles del registro IMC si lo deseas */}
                    </li>
                ))}
            </ul>
        </div>
    );
}
