import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllCategoriaComida } from '../api/categoriaComida';
import { CategoriaComidaCard } from '../components/CategoriaComidaCard';

export function CategoriaComidaListPage() {
    const [categoriaComidas, setCategoriaComidas] = useState([]);

    useEffect(() => {
        async function fetchCategoriaComidas() {
            try {
                const response = await getAllCategoriaComida();
                setCategoriaComidas(response.data); // asumiendo que response.data es un array de objetos de categoría de comida
            } catch (error) {
                console.error('Error fetching categorias de comida:', error);
            }
        }
        
        fetchCategoriaComidas();
    }, []);

    return (
        <div className="max-w-4xl mx-auto p-4">
            <h1 className="text-3xl font-bold text-center p-5">LISTADO DE CATEGORÍAS DE COMIDA</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {categoriaComidas.map(categoriaComida => (
                    <CategoriaComidaCard key={categoriaComida.id} categoriaComida={categoriaComida} />
                ))}
            </div>
        </div>
    );
}
