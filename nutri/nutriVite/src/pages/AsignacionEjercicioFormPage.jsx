import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useParams, useNavigate } from 'react-router-dom';
import { createAsignacionEjercicio, getAsignacionEjercicio, updateAsignacionEjercicio } from '../api/asignacionEjercicio';
import { getAllNutri } from '../api/nutri.app'; 
import { getAllEjercicios } from '../api/ejercicio';

export function AsignacionEjercicioFormPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { register, handleSubmit, setValue } = useForm();
    const [loading, setLoading] = useState(false);
    const [usuarios, setUsuarios] = useState([]); // Estado para almacenar usuarios
    const [ejercicios, setEjercicios] = useState([]); // Estado para almacenar ejercicios

    useEffect(() => {
        async function fetchData() {
            if (id) {
                try {
                    const response = await getAsignacionEjercicio(id);
                    const { usuario, ejercicio, fechaHora } = response.data;
                    setValue('usuario', usuario);
                    setValue('ejercicio', ejercicio);
                    setValue('fechaHora', fechaHora);
                } catch (error) {
                    console.error('Error fetching asignacion de ejercicio:', error);
                }
            }
        }
        
        fetchData();
    }, [id, setValue]);

    useEffect(() => {
        async function fetchUsuarios() {
            try {
                const response = await getAllNutri();
                setUsuarios(response.data);
            } catch (error) {
                console.error('Error fetching usuarios:', error);
            }
        }

        async function fetchEjercicios() {
            try {
                const response = await getAllEjercicios();
                setEjercicios(response.data);
            } catch (error) {
                console.error('Error fetching ejercicios:', error);
            }
        }

        fetchUsuarios();
        fetchEjercicios();
    }, []);

    const onSubmit = async (data) => {
        try {
            setLoading(true);
            if (id) {
                await updateAsignacionEjercicio(id, data);
            } else {
                await createAsignacionEjercicio(data);
            }
            navigate('/asignacion-ejercicio');
        } catch (error) {
            console.error('Error submitting form:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h1>{id ? 'Editar' : 'Crear'} Asignación de Ejercicio</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Usuario</label>
                    <select {...register('usuario')}>
                        {usuarios.map((usuario) => (
                            <option key={usuario.id} value={usuario.id}>{usuario.nombre} {usuario.apellido}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Ejercicio</label>
                    <select {...register('ejercicio')}>
                        {ejercicios.map((ejercicio) => (
                            <option key={ejercicio.id} value={ejercicio.id}>{ejercicio.nombre}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Fecha y Hora</label>
                    <input type="datetime-local" {...register('fechaHora')} />
                </div>
                <button type="submit" disabled={loading}>{id ? 'Actualizar' : 'Crear'}</button>
            </form>
        </div>
    );
}
