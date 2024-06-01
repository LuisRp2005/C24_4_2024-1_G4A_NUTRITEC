// src/pages/EjercicioListPage.jsx
import React, { useState, useEffect } from "react";
import { getAllEjercicios } from "../api/ejercicio";
import { EjercicioCard } from "../components/EjercicioCard";

export function EjercicioListPage() {
    const [ejercicios, setEjercicios] = useState([]);

    useEffect(() => {
        async function loadEjercicios() {
            const res = await getAllEjercicios();
            setEjercicios(res.data);
        }
        loadEjercicios();
    }, []);

    return (
        <div className="grid grid-cols-2 gap-2">
            {ejercicios.map(e => (
                <EjercicioCard key={e.id} ejercicio={e} />
            ))}
        </div>
    );
}
