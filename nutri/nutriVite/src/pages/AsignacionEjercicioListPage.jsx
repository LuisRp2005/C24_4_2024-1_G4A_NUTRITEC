import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllAsignacionEjercicio } from '../api/asignacionEjercicio';

export function AsignacionEjercicioListPage() {
    const [asignaciones, setAsignaciones] = useState([]);

    useEffect(() => {
        async function fetchAsignaciones() {
            try {
                const response = await getAllAsignacionEjercicio();
                setAsignaciones(response.data);
            } catch (error) {
                console.error('Error fetching asignaciones de ejercicio:', error);
            }
        }
        
        fetchAsignaciones();
    }, []);

    return (
        <div>
            <h1>Lista de Asignaciones de Ejercicio</h1>
            <Link to="/asignacion-ejercicio/create">Crear Nueva Asignación de Ejercicio</Link>
            <ul>
                {asignaciones.map((asignacion) => (
                    <li key={asignacion.id}>
                        <h2>{asignacion.usuario} - {asignacion.ejercicio}</h2>
                        <p><strong>Fecha de inicio:</strong> {asignacion.fechaInicio}</p>
                        <p><strong>Fecha de fin:</strong> {asignacion.fechaFin}</p>
                        <p><strong>Duración:</strong> {asignacion.duracion}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
