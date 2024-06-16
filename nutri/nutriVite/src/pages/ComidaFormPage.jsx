import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getAllCategoriaComida } from "../api/categoriaComida";
import { getComida, createComida, updateComida, deleteComida } from "../api/comida";
import { toast } from "react-hot-toast";

export function ComidaFormPage() {
    const [nombreComida, setNombreComida] = useState("");
    const [calorias, setCalorias] = useState("");
    const [categoriaId, setCategoriaId] = useState("");
    const [categoriaOptions, setCategoriaOptions] = useState([]);
    const [images, setImages] = useState(null);
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        loadCategoriaOptions();
        if (id) {
            loadComida();
        }
    }, [id]);

    const loadCategoriaOptions = async () => {
        try {
            const res = await getAllCategoriaComida();
            setCategoriaOptions(res.data);
        } catch (error) {
            console.error("Error loading categoria options:", error);
            toast.error("Error cargando las opciones de categoría de comida");
        }
    };

    const loadComida = async () => {
        try {
            const res = await getComida(id);
            setNombreComida(res.data.nombre_comida);
            setCalorias(res.data.calorias);
            setCategoriaId(res.data.categoria);
        } catch (error) {
            console.error("Error loading comida:", error);
            toast.error("Error cargando la comida para edición");
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("nombre_comida", nombreComida);
        formData.append("calorias", calorias);
        formData.append("categoria", categoriaId);
        if (images) {
            formData.append("images", images);
        }

        try {
            if (id) {
                await updateComida(id, formData);
                toast.success("Comida actualizada");
            } else {
                await createComida(formData);
                toast.success("Comida creada");
            }
            navigate("/comida");
        } catch (error) {
            handleRequestError(error);
        }
    };

    const handleDelete = async () => {
        if (window.confirm("¿Estás seguro de que quieres eliminar esta comida?")) {
            try {
                await deleteComida(id);
                toast.success("Comida eliminada");
                navigate("/comida");
            } catch (error) {
                handleRequestError(error);
            }
        }
    };

    const handleRequestError = (error) => {
        if (error.response) {
            console.error("Error response:", error.response.data);
            toast.error(`Error al guardar la comida: ${error.response.data.detail}`);
        } else if (error.request) {
            console.error("No response received:", error.request);
            toast.error("No se recibió respuesta del servidor al guardar la comida");
        } else {
            console.error("Request setup error:", error.message);
            toast.error("Error al configurar la solicitud al guardar la comida");
        }
    };

    return (
        <div className="max-w-xl mx-auto">
            <h1 className="text-3xl font-bold text-center p-5">AGREGAR O ACTUALIZAR COMIDA</h1>
            <form onSubmit={handleSubmit} className="bg-zinc-800 p-10" encType="multipart/form-data">
                <label className="block text-sm font-bold mb-2">Nombre de la Comida:</label>
                <input 
                    type="text" 
                    value={nombreComida}
                    onChange={(e) => setNombreComida(e.target.value)}
                    className="w-full p-2 rounded-md bg-zinc-700 mb-2"
                    required
                />
                <label className="block text-sm font-bold mb-2">Calorías:</label>
                <input 
                    type="number" 
                    value={calorias}
                    onChange={(e) => setCalorias(e.target.value)}
                    className="w-full p-2 rounded-md bg-zinc-700 mb-2"
                    required
                />
                <label className="block text-sm font-bold mb-2">Categoría:</label>
                <select 
                    value={categoriaId}
                    onChange={(e) => setCategoriaId(e.target.value)}
                    className="w-full p-2 rounded-md bg-zinc-700 mb-2"
                    required
                >
                    <option value="">Seleccionar Categoría</option>
                    {categoriaOptions.map(option => (
                        <option key={option.id_categoria_comida} value={option.id_categoria_comida}>{option.nombre_categoria}</option>
                    ))}
                </select>
                <label className="block text-sm font-bold mb-2">Imagen:</label>
                <input 
                    type="file" 
                    onChange={(e) => setImages(e.target.files[0])}
                    className="w-full p-2 rounded-md bg-zinc-700 mb-2"
                    accept="image/*"
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
