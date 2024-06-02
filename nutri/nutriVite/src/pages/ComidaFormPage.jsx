import React, { useState, useEffect } from "react";
import { useForm } from 'react-hook-form';
import { createComida, deleteComida, getComida, updateComida } from '../api/comida';
import { useNavigate, useParams } from 'react-router-dom';
import { toast, Toaster } from 'react-hot-toast';

export function ComidaFormPage() {
    const { register, handleSubmit, formState: { errors }, setValue } = useForm();
    const navigate = useNavigate();
    const params = useParams();
    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        async function loadComida() {
            if (params.id) {
                const res = await getComida(params.id);
                setValue("nombre", res.data.nombre_comida);
                setValue("calorias", res.data.calorias);
                setValue("categoria", res.data.categoria);
            }
        }

        async function loadCategorias() {
            try {
                // Lógica para cargar las categorías desde tu backend
                const response = await fetch("http://127.0.0.1:8000/nutritec/CategoriaComida/");
                const data = await response.json();
                setCategorias(data);
            } catch (error) {
                console.error('Error fetching categorias:', error);
            }
        }
        
        loadComida();
        loadCategorias();
    }, [params.id, setValue]);

    const onSubmit = handleSubmit(async data => {
        if (params.id) {
            await updateComida(params.id, data);
            toast.success('Comida actualizada correctamente', {
                position: "top-center",
                style: {
                    background: "#101010",
                    color: "#fff"
                }
            });
        } else {
            const formData = new FormData();
            formData.append('nombre_comida', data.nombre);
            formData.append('calorias', data.calorias);
            formData.append('categoria', data.categoria);
            formData.append('imagen', data.imagen[0]); // Asumiendo que solo se selecciona una imagen
            
            await createComida(formData);
            toast.success('Comida agregada correctamente', {
                position: "top-center",
                style: {
                    background: "#101010",
                    color: "#fff"
                }
            });
        }
        navigate("/comida");
    });

    return (
        <div className='max-w-xl mx-auto'>
            <Toaster />
            <form onSubmit={onSubmit} className='grid grid-cols-1 md:grid-cols-2 gap-4' encType="multipart/form-data">
                <div>
                    <label htmlFor="nombre" className='block'>Nombre</label>
                    <input type="text" id="nombre" placeholder="Nombre" {...register("nombre", { required: true })}
                        className='w-full bg-zinc-700 p-3 rounded-lg mb-3'
                    />
                    {errors.nombre && <span>Este campo es requerido</span>}
                </div>
                <div>
                    <label htmlFor="calorias" className='block'>Calorías</label>
                    <input type="number" id="calorias" placeholder="Calorías" {...register("calorias", { required: true })} 
                        className='w-full bg-zinc-700 p-3 rounded-lg mb-3' />
                </div>
                <div>
                    <label htmlFor="categoria" className='block'>Categoría</label>
                    <select id="categoria" {...register("categoria", { required: true })} 
                        className='w-full bg-zinc-700 p-3 rounded-lg mb-3'>
                        {categorias.map(categoria => (
                            <option key={categoria.id} value={categoria.id}>{categoria.nombre}</option>
                        ))}
                    </select>
                    {errors.categoria && <span>Este campo es requerido</span>}
                </div>
                <div>
                    <label htmlFor="imagen" className='block'>Imagen</label>
                    <input type="file" id="imagen" {...register("imagen")} 
                        className='w-full bg-zinc-700 p-3 rounded-lg mb-3' />
                </div>
                <div className='flex justify-end'>
                    <button className='bg-indigo-500 p-3 rounded-lg' type="submit">Guardar</button>
                </div>
            </form>
            {params.id && (
                <div className='flex justify-end'>
                    <button className='bg-red-500 p-3 rounded-lg' onClick={async () => {
                        const accepted = window.confirm("¿Estás seguro?");
                        if (accepted) {
                            await deleteComida(params.id);
                            toast.success('Comida eliminada correctamente', {
                                position: "top-center",
                                style: {
                                    background: "#101010",
                                    color: "#fff"
                                }
                            });
                            navigate("/comida");
                        }
                    }}>
                        Eliminar
                    </button>
                </div>
            )}
        </div>
    );
}
