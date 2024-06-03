import { useForm } from 'react-hook-form';
import { createTipoIMC, deleteTipoIMC, getTipoIMC, updateTipoIMC } from '../api/tipoimc';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { toast, Toaster } from 'react-hot-toast';

export function TipoIMCFormPage() {
    const { register, handleSubmit, formState: { errors }, setValue } = useForm();
    const navigate = useNavigate();
    const params = useParams();

    const onSubmit = handleSubmit(async data => {
        if (params.id) {
            await updateTipoIMC(params.id, data);
            toast.success('TipoIMC actualizado correctamente', {
                position: "top-center",
                style: {
                    background: "#101010",
                    color: "#fff"
                }
            });
        } else {
            await createTipoIMC(data);
            toast.success('TipoIMC agregado correctamente', {
                position: "top-center",
                style: {
                    background: "#101010",
                    color: "#fff"
                }
            });
        }
        navigate("/tipoimc");
    });

    useEffect(() => {
        async function loadTipoIMC() {
            if (params.id) {
                const res = await getTipoIMC(params.id);
                setValue("tipo_imc", res.data.tipo_imc);
                setValue("descripcion_imc", res.data.descripcion_imc);
            }
        }
        loadTipoIMC();
    }, [params.id, setValue]);

    return (
        <div className='max-w-xl mx-auto'>
            <h1 className="text-3xl font-bold text-center  p-5">AGREGAR NUEVO TIPO DE IMC</h1>
            <Toaster />
            <form onSubmit={onSubmit} className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div>
                    <label htmlFor="tipo_imc" className='block'>Tipo IMC</label>
                    <input type="text" id="tipo_imc" placeholder="Tipo IMC" {...register("tipo_imc", { required: true })}
                        className='w-full bg-zinc-700 p-3 rounded-lg mb-3'
                    />
                    {errors.tipo_imc && <span>Este campo es requerido</span>}
                </div>
                <div>
                    <label htmlFor="descripcion_imc" className='block'>Descripción IMC</label>
                    <input type="text" id="descripcion_imc" placeholder="Descripción IMC" {...register("descripcion_imc", { required: true })} 
                        className='w-full bg-zinc-700 p-3 rounded-lg mb-3' />
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
                            const aceptar = window.confirm('¿Estás seguro de eliminar este Tipo IMC?');
                            if (aceptar) {
                                await deleteTipoIMC(params.id);
                                toast.success('Tipo IMC eliminado correctamente', {
                                    position: "top-center",
                                    style: {
                                        background: "#101010",
                                        color: "#fff"
                                    }
                                });
                                navigate("/tipoimc");
                            }
                        }}>Eliminar</button>
                </div>
            }
        </div>
    );
}
