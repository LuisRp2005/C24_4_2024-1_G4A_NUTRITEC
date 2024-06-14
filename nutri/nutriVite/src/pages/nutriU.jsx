import { useForm } from 'react-hook-form';
import { createNutri, deleteNutri, getAll, updateNutri } from '../api/nutri.app';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { toast, Toaster } from 'react-hot-toast';

export function Nutri2Page() {
    const { register, handleSubmit, formState: { errors }, setValue } = useForm();
    const navigate = useNavigate();
    const params = useParams();

    const onSubmit = handleSubmit(async data => {
        try {
            if (params.id) {
                await updateNutri(params.id, data);
                toast.success('Usuario actualizado correctamente', {
                    position: "top-center",
                    style: {
                        background: "#101010",
                        color: "#fff"
                    }
                });
            } else {
                await createNutri(data);
                toast.success('Usuario agregado correctamente', {
                    position: "top-center",
                    style: {
                        background: "#101010",
                        color: "#fff"
                    }
                });
            }
            navigate("/nutritec");
        } catch (error) {
            console.error('Error:', error);
            if (error.response) {
                toast.error(`Error: ${error.response.data}`, {
                    position: "top-center",
                    style: {
                        background: "#101010",
                        color: "#fff"
                    }
                });
            } else {
                toast.error('Error al procesar la solicitud', {
                    position: "top-center",
                    style: {
                        background: "#101010",
                        color: "#fff"
                    }
                });
            }
        }
    });

    useEffect(() => {
        async function loadNutri() {
            if (params.id) {
                const res = await getAll(params.id);
                setValue("nombre", res.data.nombre);
                setValue("apellido", res.data.apellido);
                setValue("correo", res.data.correo);
                setValue("altura", res.data.altura);
                setValue("peso", res.data.peso);
                setValue("rol", res.data.rol);
                setValue("fecha_nacimiento", res.data.fecha_nacimiento);
                setValue("genero", res.data.genero);
            }
        }
        loadNutri();
    }, [params.id, setValue]);

    return (
        <div className='max-w-xl mx-auto'>
            <h1 className="text-3xl font-bold text-center mb-5 p-5">USUARIO</h1>

            <Toaster />
            <form onSubmit={onSubmit} className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div>
                    <label htmlFor="nombre" className='block'>Nombres</label>
                    <input type="text" id="nombre" placeholder="Nombre" {...register("nombre", { required: true })}
                        className='w-full bg-zinc-700 p-3 rounded-lg mb-3'
                    />
                    {errors.nombre && <span>Este campo es requerido</span>}
                </div>
                <div>
                    <label htmlFor="apellido" className='block'>Apellidos</label>
                    <input type="text" id="apellido" placeholder="Apellido" {...register("apellido", { required: true })} 
                        className='w-full bg-zinc-700 p-3 rounded-lg mb-3' />
                </div>
                <div>
                    <label htmlFor="correo" className='block'>Correo</label>
                    <input type="email" id="correo" placeholder="Correo" {...register("correo", { required: true })} 
                        className='w-full bg-zinc-700 p-3 rounded-lg mb-3' />
                </div>
                <div>
                    <label htmlFor="altura" className='block'>Altura</label>
                    <input type="number" step="0.01" id="altura" placeholder="Altura (m)" {...register("altura", { required: true })}
                        className='w-full bg-zinc-700 p-3 rounded-lg mb-3' />
                </div>
                <div>
                    <label htmlFor="peso" className='block'>Peso</label>
                    <input type="number" step="0.1" id="peso" placeholder="Peso (kg)" {...register("peso", { required: true })} 
                        className='w-full bg-zinc-700 p-3 rounded-lg mb-3'/>
                </div>
                <div>
                    <label htmlFor="rol" className='block'>Rol</label>
                    <input type="number" id="rol" placeholder="Rol" {...register("rol", { required: true })} 
                        className='w-full bg-zinc-700 p-3 rounded-lg mb-3'/>
                </div>
                <div>
                    <label htmlFor="contraseña" className='block'>Contraseña</label>
                    <input type="password" id="contraseña" placeholder="Contraseña" {...register("contraseña", { required: true })} 
                        className='w-full bg-zinc-700 p-3 rounded-lg mb-3' />
                    {errors.contraseña && <span>Este campo es requerido</span>}
                </div>
                <div>
                    <label htmlFor="fecha_nacimiento" className='block'>Fecha de Nacimiento</label>
                    <input type="date" id="fecha_nacimiento" {...register("fecha_nacimiento", { required: true })}  
                        className='w-full bg-zinc-700 p-3 rounded-lg mb-3'/>
                </div>
                <div>
                    <label htmlFor="genero" className='block'>Género</label>
                    <select id="genero" {...register("genero", { required: true })} 
                        className='w-full bg-zinc-700 p-3 rounded-lg mb-3'>
                        <option value="M">Masculino </option>
                        <option value="F">Femenino</option>
                    </select>
                </div>

                <div className='col-span-2'>
                    <button type="submit" className='w-full bg-indigo-500 p-3 rounded-lg'>Enviar</button>
                </div>
                <br />
            </form>
            {params.id && 
                <div className='col-span-2'>
                    <button 
                        className='w-full bg-red-500 p-3 rounded-lg'
                        onClick={async () => {
                            const aceptar = window.confirm('¿Estás seguro de eliminar este usuario?');
                            if (aceptar) {
                                try {
                                    await deleteNutri(params.id);
                                    toast.success('Usuario eliminado correctamente', {
                                        position: "top-center",
                                        style: {
                                            background: "#101010",
                                            color: "#fff"
                                        }
                                    });
                                    navigate("/nutritec");
                                } catch (error) {
                                    console.error('Error al eliminar usuario:', error);
                                    toast.error('Error al eliminar el usuario', {
                                        position: "top-center",
                                        style: {
                                            background: "#101010",
                                            color: "#fff"
                                        }
                                    });
                                }
                            }
                        }}>Eliminar</button>
                </div>
            }
        </div>
    );
}
