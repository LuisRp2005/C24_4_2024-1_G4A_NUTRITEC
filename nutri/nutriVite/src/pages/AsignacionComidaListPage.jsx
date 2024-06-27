import React, { useState, useEffect } from 'react';
import { getAllAsignacionComida } from '../api/asignacionComida';
import { getAllNutri } from '../api/nutri.app';
import { getComida } from '../api/comida';
import { Link } from 'react-router-dom';
import { AsignacionComidaCard } from '../components/AsignacionComidaCard';

export function AsignacionComidaListPage() {
    const [asignaciones, setAsignaciones] = useState([]);
    const [usuarios, setUsuarios] = useState([]);
    const [comidas, setComidas] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const responseAsignaciones = await getAllAsignacionComida();
                setAsignaciones(responseAsignaciones.data);

                const responseUsuarios = await getAllNutri();
                setUsuarios(responseUsuarios.data);

                // Obtener todas las comidas al mismo tiempo
                const comidasPromises = responseAsignaciones.data.map(asignacion => getComida(asignacion.comida));
                const responsesComidas = await Promise.all(comidasPromises);
                setComidas(responsesComidas.map(res => res.data));
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchData();
    }, []);

    return (
        <div className="max-w-4xl mx-auto p-4">
            <h1 className="text-3xl font-bold text-center p-5">LISTADO DE ASIGNACIONES DE COMIDAS</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {asignaciones.map((asignacion, index) => {
                    const usuario = usuarios.find(user => user.id_usuario === asignacion.usuario);
                    const comida = comidas.find(comida => comida.id_comida === asignacion.comida);

                    return (
                        <AsignacionComidaCard key={asignacion.id_asignacion_comida} asignacionComida={asignacion} usuario={usuario} comida={comida} />
                    );
                })}
            </div>
        </div>
    );
}
