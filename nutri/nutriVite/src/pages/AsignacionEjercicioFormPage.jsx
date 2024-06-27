import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import {
    createAsignacionEjercicio,
    getAsignacionEjercicio,
    updateAsignacionEjercicio,
    deleteAsignacionEjercicio
} from '../api/asignacionEjercicio';
import { getAllNutri } from '../api/nutri.app';
import { getAllEjercicios } from '../api/ejercicio';

export function AsignacionEjercicioFormPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { register, handleSubmit, setValue, formState: { errors }, reset } = useForm();
    const [loading, setLoading] = useState(false);
    const [usuarios, setUsuarios] = useState([]);
    const [ejercicios, setEjercicios] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Cargar lista de usuarios
                const responseUsuarios = await getAllNutri();
                setUsuarios(responseUsuarios.data);
                
                // Cargar lista de ejercicios
                const responseEjercicios = await getAllEjercicios();
                setEjercicios(responseEjercicios.data);

                // Si hay un ID, cargar datos de la asignación de ejercicio
                if (id) {
                    const responseAsignacion = await getAsignacionEjercicio(id);
                    if (responseAsignacion.data) {
                        const { usuario, ejercicio, fechaHora } = responseAsignacion.data;
                        
                        // Asignar valores a los campos del formulario
                        if (usuario) {
                            setValue('usuario', usuario.id.toString());
                        }
                        if (ejercicio) {
                            setValue('ejercicio', ejercicio.id.toString());
                        }
                        setValue('fechaHora', fechaHora ? fechaHora.split('.')[0] : ''); // Formatear fechaHora
                    } else {
                        console.error('No se encontraron datos para el ID proporcionado:', id);
                        toast.error('Error: No se encontraron datos para la asignación de ejercicio');
                    }
                }
            } catch (error) {
                console.error('Error fetching data:', error);
                toast.error('Error cargando datos');
            }
        };

        fetchData();
    }, [id, setValue]);

    const onSubmit = async (data) => {
        try {
            setLoading(true);
            const payload = {
                usuario: parseInt(data.usuario),
                ejercicio: parseInt(data.ejercicio),
                fechaHora: data.fechaHora
            };
            // Si hay un ID, actualizar la asignación de ejercicio
            if (id) {
                await updateAsignacionEjercicio(id, payload);
                toast.success('Asignación de ejercicio actualizada exitosamente');
            } else {
                // Si no hay ID, crear una nueva asignación de ejercicio
                await createAsignacionEjercicio(payload);
                toast.success('Asignación de ejercicio creada exitosamente');
            }
            reset(); // Limpiar el formulario después de enviar los datos
            navigate('/asignacion-ejercicio'); // Redirigir a la lista de asignaciones
        } catch (error) {
            console.error('Error submitting form:', error);
            toast.error('Error al enviar el formulario');
            if (error.response) {
                console.error('Server error data:', error.response.data);
                toast.error('Error del servidor');
            }
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async () => {
        try {
            setLoading(true);
            await deleteAsignacionEjercicio(id);
            toast.success('Asignación de ejercicio eliminada exitosamente');
            navigate('/asignacion-ejercicio');
        } catch (error) {
            console.error('Error deleting asignación de ejercicio:', error);
            toast.error('Error al eliminar asignación de ejercicio');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
            <h1 className="text-3xl font-bold text-center bg-gray-800 text-white py-4">{id ? 'Editar' : 'Crear'} Asignación de Ejercicio</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="p-6">
                <div className="mb-4">
                    <label htmlFor="usuario" className="block text-sm font-medium">
                        Usuario:
                    </label>
                    <select
                        id="usuario"
                        {...register('usuario', { required: true })}
                        className="w-full p-2 rounded-md bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="">Selecciona un usuario</option>
                        {usuarios.map((usuario) => (
                            <option key={usuario.id} value={usuario.id}>{usuario.nombre} {usuario.apellido}</option>
                        ))}
                    </select>
                    {errors.usuario && <span className="text-red-500">Campo requerido</span>}
                </div>
                <div className="mb-4">
                    <label htmlFor="ejercicio" className="block text-sm font-medium">
                        Ejercicio:
                    </label>
                    <select
                        id="ejercicio"
                        {...register('ejercicio', { required: true })}
                        className="w-full p-2 rounded-md bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="">Selecciona un ejercicio</option>
                        {ejercicios.map((ejercicio) => (
                            <option key={ejercicio.id} value={ejercicio.id}>
                                {ejercicio.nombre}
                            </option>
                        ))}
                    </select>
                    {errors.ejercicio && <span className="text-red-500">Campo requerido</span>}
                </div>
                <div className="mb-4">
                    <label htmlFor="fechaHora" className="block text-sm font-medium">
                        Fecha y Hora:
                    </label>
                    <input
                        type="datetime-local"
                        id="fechaHora"
                        {...register('fechaHora', { required: true })}
                        className="w-full p-2 rounded-md bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.fechaHora && <span className="text-red-500">Campo requerido</span>}
                </div>
                <div className="flex justify-end space-x-4">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                        disabled={loading}
                    >
                        {id ? 'Actualizar' : 'Crear'}
                    </button>
                    {id && (
                        <button
                            type="button"
                            className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-600"
                            onClick={handleDelete}
                            disabled={loading}
                        >
                            Eliminar
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
}
