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
                setCategoriaComidas(response.data);
            } catch (error) {
                console.error('Error fetching categorias de comida:', error);
            }
        }
        
        fetchCategoriaComidas();
    }, []);

    return (
        <div>
            <h1>Lista de Categorías de Comida</h1>
            <Link to="/categoriaComida/create">Crear Nueva Categoría de Comida</Link>
            <div className="grid grid-cols-2 gap-2">
                {categoriaComidas.map((categoriaComida) => (
                    <CategoriaComidaCard key={categoriaComida.id} categoriaComida={categoriaComida} />
                ))}
            </div>
        </div>
    );
}
