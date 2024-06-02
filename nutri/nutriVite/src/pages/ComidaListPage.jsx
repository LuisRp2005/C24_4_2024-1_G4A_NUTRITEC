import React, { useState, useEffect } from 'react';
import { getAllComida } from '../api/comida'; // Asegúrate de importar la función para obtener todas las comidas
import { Link } from 'react-router-dom';

export function ComidaListPage() {
    const [comidas, setComidas] = useState([]);

    useEffect(() => {
        async function fetchComidas() {
            try {
                const response = await getAllComida(); // Llama a la función para obtener todas las comidas
                setComidas(response.data);
            } catch (error) {
                console.error('Error fetching comidas:', error);
            }
        }
        
        fetchComidas();
    }, []);

    return (
        <div>
            <h1>Lista de Comidas</h1>
            <Link to="/comida-create">Crear Nueva Comida</Link>
            <ul>
                {comidas.map((comida) => (
                    <li key={comida.id}>
                        <h2>{comida.nombre_comida}</h2>
                        <p>Calorías: {comida.calorias}</p>
                        {/* Aquí puedes agregar más detalles de la comida si lo deseas */}
                    </li>
                ))}
            </ul>
        </div>
    );
}
