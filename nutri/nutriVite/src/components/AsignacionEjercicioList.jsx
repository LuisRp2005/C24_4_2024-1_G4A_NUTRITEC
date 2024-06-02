import React, { useState, useEffect } from "react";
import { getAllAsignacionEjercicio } from "../api/asignacionEjercicio";
import { AsignacionEjercicioCard } from "./AsignacionEjercicioCard";

export function AsignacionEjercicioList() {
    const [asignacionEjercicios, setAsignacionEjercicios] = useState([]);

    useEffect(() => {
        async function loadAsignacionEjercicios() {
            const res = await getAllAsignacionEjercicio();
            setAsignacionEjercicios(res.data);
        }
        loadAsignacionEjercicios();
    }, []);

    return (
        <div className="grid grid-cols-2 gap-2">
            {asignacionEjercicios.map(a => (
                <AsignacionEjercicioCard key={a.id} asignacionEjercicio={a} />
            ))}
        </div>
    );
}
