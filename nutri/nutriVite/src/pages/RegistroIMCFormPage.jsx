import { useForm } from 'react-hook-form';
import { createRegistroIMC, deleteRegistroIMC, getRegistroIMC, updateRegistroIMC } from '../api/registroIMC';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { toast, Toaster } from 'react-hot-toast';

export function RegistroIMCFormPage() {
    const { register, handleSubmit, formState: { errors }, setValue } = useForm();
    const navigate = useNavigate();
    const params = useParams();

    const onSubmit = handleSubmit(async data => {
        if (params.id) {
            await updateRegistroIMC(params.id, data);
            toast.success('Registro IMC actualizado correctamente', {
                position: "top-center",
                style: {
                    background: "#101010",
                    color: "#fff"
                }
            });
        } else {
            await createRegistroIMC(data);
            toast.success('Registro IMC agregado correctamente', {
                position: "top-center",
                style: {
                    background: "#101010",
                    color: "#fff"
                }
            });
        }
        navigate("/registroIMC");
    });

    useEffect(() => {
        async function loadRegistroIMC() {
            if (params.id) {
                const res = await getRegistroIMC(params.id);
                setValue("usuario", res.data.usuario);
                setValue("valor_imc", res.data.valor_imc);
                setValue("fecha_hora_registro", new Date(res.data.fecha_hora_registro).toISOString().substring(0, 16));
            }
        }
        loadRegistroIMC();
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
                    <label htmlFor="valor_imc" className='block'>Valor IMC</label>
                    <input type="number" step="0.1" id="valor_imc" placeholder="Valor IMC" {...register("valor_imc", { required: true })} 
                        className='w-full bg-zinc-700 p-3 rounded-lg mb-3' />
                </div>
                <div>
                    <label htmlFor="fecha_hora_registro" className='block'>Fecha y Hora</label>
                    <input type="datetime-local" id="fecha_hora_registro" {...register("fecha_hora_registro", { required: true })}
                        className='w-full bg-zinc-700 p-3 rounded-lg mb-3' />
                    {errors.fecha_hora_registro && <span>Este campo es requerido</span>}
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
                            await deleteRegistroIMC(params.id);
                            toast.success('Registro IMC eliminado correctamente', {
                                position: "top-center",
                                style: {
                                    background: "#101010",
                                    color: "#fff"
                                }
                            });
                            navigate("/registroIMC");
                        }
                    }}>
                        Eliminar
                    </button>
                </div>
            )}
        </div>
    );
}
