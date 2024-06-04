import { useForm } from 'react-hook-form';
import { createAsignacionComida, deleteAsignacionComida, getAsignacionComida, updateAsignacionComida } from '../api/asignacionComida';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { toast, Toaster } from 'react-hot-toast';

export function AsignacionComidaFormPage() {
    const { register, handleSubmit, formState: { errors }, setValue } = useForm();
    const navigate = useNavigate();
    const params = useParams();

    const onSubmit = handleSubmit(async data => {
        try {
            if (params.id) {
                await updateAsignacionComida(params.id, data);
                toast.success('Asignación de comida actualizada correctamente', {
                    position: "top-center",
                    style: {
                        background: "#101010",
                        color: "#fff"
                    }
                });
            } else {
                await createAsignacionComida(data);
                toast.success('Asignación de comida agregada correctamente', {
                    position: "top-center",
                    style: {
                        background: "#101010",
                        color: "#fff"
                    }
                });
            }
            navigate("/asignacionComida");
        } catch (error) {
            console.error("Error:", error);
            // Manejo del error, por ejemplo, mostrar un mensaje de error al usuario
        }
    });

    useEffect(() => {
        async function loadAsignacionComida() {
            if (params.id) {
                try {
                    const res = await getAsignacionComida(params.id);
                    setValue("usuario", res.data.usuario);
                    setValue("comida", res.data.comida);
                    setValue("fecha_hora_asignacion", new Date(res.data.fecha_hora_asignacion).toISOString().substring(0, 16));
                } catch (error) {
                    console.error("Error:", error);
                    // Manejo del error, por ejemplo, mostrar un mensaje de error al usuario
                }
            }
        }
        loadAsignacionComida();
    }, [params.id, setValue]);

    return (
        <div className='max-w-xl mx-auto'>
            <Toaster />
            <form onSubmit={onSubmit} className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div>
                    <label htmlFor="usuario" className='block'>Usuario</label>
                    <input type="text" id="usuario" placeholder="Usuario" {...register("usuario", { required: true })}
                        className='w-full bg-zinc-700 p-3 rounded-lg mb-3'
                    />
                    {errors.usuario && <span>Este campo es requerido</span>}
                </div>
                <div>
                    <label htmlFor="comida" className='block'>Comida</label>
                    <input type="text" id="comida" placeholder="Comida" {...register("comida", { required: true })}
                        className='w-full bg-zinc-700 p-3 rounded-lg mb-3' />
                </div>
                <div>
                    <label htmlFor="fecha_hora_asignacion" className='block'>Fecha y Hora</label>
                    <input type="datetime-local" id="fecha_hora_asignacion" {...register("fecha_hora_asignacion", { required: true })}
                        className='w-full bg-zinc-700 p-3 rounded-lg mb-3' />
                    {errors.fecha_hora_asignacion && <span>Este campo es requerido</span>}
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
                            try {
                                await deleteAsignacionComida(params.id);
                                toast.success('Asignación de comida eliminada correctamente', {
                                    position: "top-center",
                                    style: {
                                        background: "#101010",
                                        color: "#fff"
                                    }
                                });
                                navigate("/asignacionComida");
                            } catch (error) {
                                console.error("Error:", error);
                                // Manejo del error, por ejemplo, mostrar un mensaje de error al usuario
                            }
                        }
                    }}>
                        Eliminar
                    </button>
                </div>
            )}
        </div>
    );
}
