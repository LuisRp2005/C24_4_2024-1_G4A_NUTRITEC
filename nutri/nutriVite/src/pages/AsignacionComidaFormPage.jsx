import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { getAllNutri as getAllUsuarios } from '../api/nutri.app';
import { getAllComidas, getAsignacionComida, updateAsignacionComida, deleteAsignacionComida, createAsignacionComida } from '../api/asignacionComida';

export function AsignacionComidaFormPage() {
    const { register, handleSubmit, reset } = useForm();
    const [usuarios, setUsuarios] = useState([]);
    const [comidas, setComidas] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        loadUsuarios();
        loadComidas();
        if (id) {
            loadAsignacionComida(id);
        }
    }, [id]);

    const loadUsuarios = async () => {
        try {
            const response = await getAllUsuarios();
            setUsuarios(response.data);
        } catch (error) {
            console.error('Error loading usuarios:', error);
            toast.error('Error cargando usuarios');
        }
    };

    const loadComidas = async () => {
        try {
            const response = await getAllComidas();
            setComidas(response); // Actualiza el estado de comidas con los datos de la respuesta
        } catch (error) {
            console.error('Error loading comidas:', error);
            toast.error('Error cargando comidas');
        }
    };

    const loadAsignacionComida = async (id) => {
        try {
            const response = await getAsignacionComida(id);
            reset(response.data); // Puebla el formulario con los datos de la asignación obtenidos
        } catch (error) {
            console.error('Error loading asignacion de comida:', error);
            toast.error('Error cargando la asignación de comida');
        }
    };

    const onSubmit = async (data) => {
        try {
            setLoading(true);
            if (id) {
                await updateAsignacionComida(id, data);
                toast.success('Asignación de comida actualizada exitosamente');
            } else {
                await createAsignacionComida(data);
                toast.success('Asignación de comida creada exitosamente');
            }
            reset();
            navigate('/asignacionComida');
        } catch (error) {
            console.error('Error creating/updating asignacion de comida:', error);
            toast.error('Error al crear/actualizar la asignación de comida');
        } finally {
            setLoading(false);
        }
    };

    const onDelete = async () => {
        if (window.confirm('¿Estás seguro de eliminar esta asignación de comida?')) {
            try {
                setLoading(true);
                await deleteAsignacionComida(id);
                toast.success('Asignación de comida eliminada exitosamente');
                navigate('/asignacionComida');
            } catch (error) {
                console.error('Error deleting asignacion de comida:', error);
                toast.error('Error al eliminar la asignación de comida');
            } finally {
                setLoading(false);
            }
        }
    };

    return (
        <div className="max-w-xl mx-auto bg-black text-white p-5 rounded-lg shadow-md">
            <h1 className="text-3xl font-bold text-center mb-5">{id ? 'Editar' : 'Crear'} Asignación de Comida</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="bg-gray-800 p-10 rounded-lg">
                <div className="mb-4">
                    <label htmlFor="usuario" className="block text-sm font-medium">
                        Usuario:
                    </label>
                    <select
                        id="usuario"
                        name="usuario"
                        {...register('usuario', { required: true })}
                        className="w-full p-2 rounded-md bg-gray-700 mb-2"
                    >
                        <option value="">Selecciona un usuario</option>
                        {usuarios && usuarios.map((usuario) => (
                            <option key={usuario.id_usuario} value={usuario.id_usuario}>
                                {usuario.nombre} {usuario.apellido}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="mb-4">
                    <label htmlFor="comida" className="block text-sm font-medium">
                        Comida:
                    </label>
                    <select
                        id="comida"
                        name="comida"
                        {...register('comida', { required: true })}
                        className="w-full p-2 rounded-md bg-gray-700 mb-2"
                    >
                        <option value="">Selecciona una comida</option>
                        {comidas && comidas.map((comida) => (
                            <option key={comida.id_comida} value={comida.id_comida}>
                                {comida.nombre_comida}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="flex justify-end space-x-4">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                        disabled={loading}
                    >
                        {id ? 'Actualizar' : 'Guardar'}
                    </button>
                    {id && (
                        <button
                            type="button"
                            className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-600"
                            onClick={onDelete}
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
