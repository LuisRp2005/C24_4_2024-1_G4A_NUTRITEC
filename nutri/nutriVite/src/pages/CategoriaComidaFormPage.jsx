import { useForm } from 'react-hook-form';
import { createCategoriaComida, deleteCategoriaComida, getCategoriaComida, updateCategoriaComida } from '../api/categoriaComida';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { toast, Toaster } from 'react-hot-toast';

export function CategoriaComidaFormPage() {
    const { register, handleSubmit, formState: { errors }, setValue, reset } = useForm();
    const navigate = useNavigate();
    const params = useParams();

    useEffect(() => {
        async function loadCategoriaComida() {
            if (params.id) {
                try {
                    const res = await getCategoriaComida(params.id);
                    setValue("nombre_categoria", res.data.nombre_categoria); // Ajustado para usar nombre_categoria
                } catch (error) {
                    console.error('Error al cargar la categoría de comida:', error);
                    toast.error('Error al cargar la categoría de comida', {
                        position: "top-center",
                        style: {
                            background: "#ff6347",
                            color: "#fff"
                        }
                    });
                }
            }
        }
        loadCategoriaComida();
    }, [params.id, setValue]);

    const onSubmit = handleSubmit(async data => {
        const categoriaData = {
            nombre_categoria: data.nombre_categoria // Ajustado para usar nombre_categoria
        };

        try {
            if (params.id) {
                await updateCategoriaComida(params.id, categoriaData);
                toast.success('Categoría de comida actualizada correctamente', {
                    position: "top-center",
                    style: {
                        background: "#101010",
                        color: "#fff"
                    }
                });
            } else {
                await createCategoriaComida(categoriaData);
                toast.success('Categoría de comida agregada correctamente', {
                    position: "top-center",
                    style: {
                        background: "#101010",
                        color: "#fff"
                    }
                });
            }
            navigate("/categoriaComida");
            reset(); // Limpiar el formulario después de enviar
        } catch (error) {
            console.error('Error al procesar la categoría de comida:', error);
            toast.error('Error al procesar la categoría de comida', {
                position: "top-center",
                style: {
                    background: "#ff6347",
                    color: "#fff"
                }
            });
        }
    });

    return (
        <div className='max-w-xl mx-auto mt-5'>
            <Toaster />
            <form onSubmit={onSubmit} className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div>
                    <label htmlFor="nombre_categoria" className='block'>Nombre</label>
                    <input
                        type="text"
                        id="nombre_categoria"
                        placeholder="Nombre"
                        {...register("nombre_categoria", { required: true })}
                        className='w-full bg-zinc-700 p-3 rounded-lg mb-3'
                    />
                    {errors.nombre_categoria && <span className='text-red-500'>Este campo es requerido</span>}
                </div>
                {/* Elimina el bloque del campo "descripcion" */}
                <div className='flex justify-end'>
                    <button className='bg-indigo-500 p-3 rounded-lg' type="submit">Guardar</button>
                </div>
            </form>
            {params.id && (
                <div className='flex justify-end mt-4'>
                    <button
                        className='bg-red-500 p-3 rounded-lg'
                        onClick={async () => {
                            const accepted = window.confirm("¿Estás seguro?");
                            if (accepted) {
                                try {
                                    await deleteCategoriaComida(params.id);
                                    toast.success('Categoría de comida eliminada correctamente', {
                                        position: "top-center",
                                        style: {
                                            background: "#101010",
                                            color: "#fff"
                                        }
                                    });
                                    navigate("/categoriaComida");
                                } catch (error) {
                                    console.error('Error al eliminar la categoría de comida:', error);
                                    toast.error('Error al eliminar la categoría de comida', {
                                        position: "top-center",
                                        style: {
                                            background: "#ff6347",
                                            color: "#fff"
                                        }
                                    });
                                }
                            }
                        }}
                    >
                        Eliminar
                    </button>
                </div>
            )}
        </div>
    );
}
