import React, { useState, useEffect } from 'react';
import { getAllComida } from '../api/comida';
import { ComidaCard } from '../components/ComidaCard';

export function ComidaListPage() {
    const [comidas, setComidas] = useState([]);

    useEffect(() => {
        async function fetchComidas() {
            try {
                const response = await getAllComida();
                setComidas(response.data);
            } catch (error) {
                console.error('Error fetching comidas:', error);
            }
        }
        
        fetchComidas();
    }, []);

    return (
        <div className="max-w-4xl mx-auto p-4">
            <h1 className="text-3xl font-bold text-center p-5">LISTADO DE COMIDAS</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {comidas.map(comida => (
                    <ComidaCard key={comida.id} comida={comida} />
                ))}
            </div>
        </div>
    );
}
