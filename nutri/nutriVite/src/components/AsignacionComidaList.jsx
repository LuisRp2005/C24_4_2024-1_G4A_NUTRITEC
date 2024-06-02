import React, { useState, useEffect } from "react";
import { getAllAsignacionComida } from "../api/asignacionComida";
import { AsignacionComidaCard } from "./AsignacionComidaCard";

export function AsignacionComidaList() {
    const [asignacionComidas, setAsignacionComidas] = useState([]);

    useEffect(() => {
        async function loadAsignacionComidas() {
            const res = await getAllAsignacionComida();
            setAsignacionComidas(res.data);
        }
        loadAsignacionComidas();
    }, []);

    return (
        <div className="grid grid-cols-2 gap-2">
            {asignacionComidas.map(a => (
                <AsignacionComidaCard key={a.id} asignacionComida={a} />
            ))}
        </div>
    );
}
