import { useForm } from 'react-hook-form';
import { createCategoriaComida, deleteCategoriaComida, getCategoriaComida, updateCategoriaComida } from '../api/categoriaComida';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { toast, Toaster } from 'react-hot-toast';

export function CategoriaComidaFormPage() {
    const { register, handleSubmit, formState: { errors }, setValue } = useForm();
    const navigate = useNavigate();
    const params = useParams();

    const onSubmit = handleSubmit(async data => {
        if (params.id) {
            await updateCategoriaComida(params.id, data);
            toast.success('Categoría de comida actualizada correctamente', {
                position: "top-center",
                style: {
                    background: "#101010",
                    color: "#fff"
                }
            });
        } else {
            await createCategoriaComida(data);
            toast.success('Categoría de comida agregada correctamente', {
                position: "top-center",
                style: {
                    background: "#101010",
                    color: "#fff"
                }
            });
        }
        navigate("/categoriaComida");
    });

    useEffect(() => {
        async function loadCategoriaComida() {
            if (params.id) {
                const res = await getCategoriaComida(params.id);
                setValue("nombre", res.data.nombre);
                setValue("descripcion", res.data.descripcion);
            }
        }
        loadCategoriaComida();
    }, [params.id, setValue]);

    return (
        <div className='max-w-xl mx-auto'>
            <Toaster />
            <form onSubmit={onSubmit} className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div>
                    <label htmlFor="nombre" className='block'>Nombre</label>
                    <input type="text" id="nombre" placeholder="Nombre" {...register("nombre", { required: true })}
                        className='w-full bg-zinc-700 p-3 rounded-lg mb-3'
                    />
                    {errors.nombre && <span>Este campo es requerido</span>}
                </div>
                <div>
                    <label htmlFor="descripcion" className='block'>Descripción</label>
                    <textarea id="descripcion" placeholder="Descripción" {...register("descripcion", { required: true })} 
                        className='w-full bg-zinc-700 p-3 rounded-lg mb-3'></textarea>
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
                            await deleteCategoriaComida(params.id);
                            toast.success('Categoría de comida eliminada correctamente', {
                                position: "top-center",
                                style: {
                                    background: "#101010",
                                    color: "#fff"
                                }
                            });
                            navigate("/categoriaComida");
                        }
                    }}>
                        Eliminar
                    </button>
                </div>
            )}
        </div>
    );
}
