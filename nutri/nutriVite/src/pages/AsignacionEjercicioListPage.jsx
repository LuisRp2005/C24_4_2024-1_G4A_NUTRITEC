import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllAsignacionEjercicio } from '../api/asignacionEjercicio';
import { getAllNutri } from '../api/nutri.app';
import { getAllEjercicios } from '../api/ejercicio';
import { AsignacionEjercicioCard } from '../components/AsignacionEjercicioCard';

export function AsignacionEjercicioListPage() {
    const [asignaciones, setAsignaciones] = useState([]);
    const [usuarios, setUsuarios] = useState([]);
    const [ejercicios, setEjercicios] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                // Obtener todas las asignaciones de ejercicio
                const responseAsignaciones = await getAllAsignacionEjercicio();
                setAsignaciones(responseAsignaciones.data);

                // Obtener todos los usuarios (nutri)
                const responseUsuarios = await getAllNutri();
                setUsuarios(responseUsuarios.data);

                // Obtener todos los ejercicios
                const responseEjercicios = await getAllEjercicios();
                setEjercicios(responseEjercicios.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchData();
    }, []);

    return (
        <div className="max-w-4xl mx-auto p-4">
            <h1 className="text-3xl font-bold text-center p-5">LISTA DE ASIGNACIONES DE EJERCICIO</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {asignaciones.map((asignacion) => {
                    // Encontrar el usuario correspondiente
                    const usuario = usuarios.find(user => user.id_usuario === asignacion.usuario);
                    
                    // Encontrar el ejercicio correspondiente por su ID
                    const ejercicio = ejercicios.find(ejercicio => ejercicio.id_ejercicio === asignacion.ejercicio);

                    return (
                        <AsignacionEjercicioCard key={asignacion.id_asignacion_ejercicio} asignacionEjercicio={asignacion} usuario={usuario} ejercicio={ejercicio} />
                    );
                })}
            </div>
        </div>
    );
}
