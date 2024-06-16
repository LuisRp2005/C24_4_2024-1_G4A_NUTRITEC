import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getEjercicio, createEjercicio, updateEjercicio, deleteEjercicio } from "../api/ejercicio";
import { getAllTipoIMC } from "../api/tipoimc";
import { toast } from "react-hot-toast";

export function EjercicioFormPage() {
    const [nombreEjercicio, setNombreEjercicio] = useState("");
    const [descripcionEjercicio, setDescripcionEjercicio] = useState("");
    const [nivelDificultad, setNivelDificultad] = useState("");
    const [tipoIMCId, setTipoIMCId] = useState("");
    const [tipoIMCOptions, setTipoIMCOptions] = useState([]);
    const [images, setImage] = useState(null);
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            const loadEjercicio = async () => {
                try {
                    const res = await getEjercicio(id);
                    setNombreEjercicio(res.data.nombre_ejercicio);
                    setDescripcionEjercicio(res.data.descripcion_ejercicio);
                    setNivelDificultad(res.data.nivel_dificultad);
                    setTipoIMCId(res.data.tipo_imc);
                } catch (error) {
                    console.error("Error loading ejercicio:", error);
                    toast.error("Error cargando el ejercicio para edición");
                }
            };
            loadEjercicio();
        }
        loadTipoIMCOptions();
    }, [id]);

    const loadTipoIMCOptions = async () => {
        try {
            const res = await getAllTipoIMC();
            setTipoIMCOptions(res.data);
        } catch (error) {
            console.error("Error loading tipo IMC options:", error);
            toast.error("Error cargando las opciones de tipo IMC");
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('nombre_ejercicio', nombreEjercicio);
        formData.append('descripcion_ejercicio', descripcionEjercicio);
        formData.append('nivel_dificultad', nivelDificultad);
        formData.append('tipo_imc', tipoIMCId);
        if (images) {
            formData.append('images', images);
        }
    
        try {
            if (id) {
                await updateEjercicio(id, formData);
                toast.success("Ejercicio actualizado");
            } else {
                await createEjercicio(formData);
                toast.success("Ejercicio creado");
            }
            navigate("/ejercicio");
        } catch (error) {
            console.error("Error saving ejercicio:", error);
            toast.error("Error al guardar el ejercicio");
        }
    };

    const handleDelete = async () => {
        if (window.confirm("¿Estás seguro de que quieres eliminar este ejercicio?")) {
            try {
                await deleteEjercicio(id);
                toast.success("Ejercicio eliminado");
                navigate("/ejercicio");
            } catch (error) {
                console.error("Error deleting ejercicio:", error);
                toast.error("Error al eliminar el ejercicio");
            }
        }
    };

    return (
        <div className="max-w-xl mx-auto">
            <h1 className="text-3xl font-bold text-center p-5">{id ? "EDITAR EJERCICIO" : "AGREGAR NUEVO EJERCICIO"}</h1>
            <form onSubmit={handleSubmit} className="bg-zinc-800 p-10" encType="multipart/form-data">
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
                        <option key={option.id_tipo_imc} value={option.id_tipo_imc}>{option.tipo_imc}</option>
                    ))}
                </select>
                <label className="block text-sm font-bold mb-2">Imagen:</label>
                <input 
                    type="file" 
                    onChange={(e) => setImage(e.target.files[0])}
                    className="w-full p-2 rounded-md bg-zinc-700 mb-2"
                    
                />
                <div className="flex justify-between items-center">
                    <button type="submit" className="bg-indigo-500 px-3 py-2 rounded-lg">
                        {id ? "Actualizar" : "Crear"}
                    </button>
                    {id && (
                        <button type="button" className="bg-red-500 px-3 py-2 rounded-lg" onClick={handleDelete}>
                            Eliminar
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
}
