import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getEjercicio, createEjercicio, updateEjercicio } from "../api/ejercicio";
import { getAllTipoIMC } from "../api/tipoimc";
import { toast } from "react-hot-toast";

export function EjercicioFormPage() {
    const [nombreEjercicio, setNombreEjercicio] = useState("");
    const [descripcionEjercicio, setDescripcionEjercicio] = useState("");
    const [nivelDificultad, setNivelDificultad] = useState("");
    const [tipoIMCId, setTipoIMCId] = useState("");
    const [tipoIMCOptions, setTipoIMCOptions] = useState([]);
    const [image, setImage] = useState(null);
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            const loadEjercicio = async () => {
                const res = await getEjercicio(id);
                setNombreEjercicio(res.data.nombre_ejercicio);
                setDescripcionEjercicio(res.data.descripcion_ejercicio);
                setNivelDificultad(res.data.nivel_dificultad);
                setTipoIMCId(res.data.tipo_imc);
            };
            loadEjercicio();
        }
        loadTipoIMCOptions();
    }, [id]);

    const loadTipoIMCOptions = async () => {
        const res = await getAllTipoIMC();
        setTipoIMCOptions(res.data);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('nombre_ejercicio', nombreEjercicio);
        formData.append('descripcion_ejercicio', descripcionEjercicio);
        formData.append('nivel_dificultad', nivelDificultad);
        formData.append('tipo_imc', tipoIMCId);
        if (image) {
            formData.append('images', image);
        }
    
        if (id) {
            await updateEjercicio(id, formData);
            toast.success("Ejercicio actualizado");
        } else {
            await createEjercicio(formData);
            toast.success("Ejercicio creado");
        }
        navigate("/ejercicio");
    };

    return (
        <div className="max-w-xl mx-auto">
            <h1 className="text-3xl font-bold text-center p-5">AGREGA UN NUEVO EJERCICIO</h1>
            <form onSubmit={handleSubmit} className="bg-zinc-800 p-10" enctype="multipart/form-data">
                <label className="block text-sm font-bold mb-2">Nombre del Ejercicio:</label>
                <input 
                    type="text" 
                    value={nombreEjercicio}
                    onChange={(e) => setNombreEjercicio(e.target.value)}
                    className="w-full p-2 rounded-md bg-zinc-700 mb-2"
                />
                <label className="block text-sm font-bold mb-2">Descripción del Ejercicio:</label>
                <textarea 
                    value={descripcionEjercicio}
                    onChange={(e) => setDescripcionEjercicio(e.target.value)}
                    className="w-full p-2 rounded-md bg-zinc-700 mb-2"
                ></textarea>
                <label className="block text-sm font-bold mb-2">Nivel de Dificultad:</label>
                <input 
                    type="text" 
                    value={nivelDificultad}
                    onChange={(e) => setNivelDificultad(e.target.value)}
                    className="w-full p-2 rounded-md bg-zinc-700 mb-2"
                />
                <label className="block text-sm font-bold mb-2">Tipo IMC:</label>
                <select 
                    value={tipoIMCId}
                    onChange={(e) => setTipoIMCId(e.target.value)}
                    className="w-full p-2 rounded-md bg-zinc-700 mb-2"
                >
                    <option value="">Seleccionar Tipo IMC</option>
                    {tipoIMCOptions.map(option => (
                        <option key={option.id} value={option.id}>{option.tipo_imc}</option>
                    ))}
                </select>
                <label className="block text-sm font-bold mb-2">Imagen:</label>
                <input 
                    type="file" 
                    onChange={(e) => setImage(e.target.files[0])}
                    className="w-full p-2 rounded-md bg-zinc-700 mb-2"
                />
                <button type="submit" className="bg-indigo-500 px-3 py-2 rounded-lg">
                    {id ? "Actualizar" : "Crear"}
                </button>
            </form>
        </div>
    );
}
