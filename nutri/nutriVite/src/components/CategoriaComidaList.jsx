import React, { useState, useEffect } from "react";
import { getAllCategoriaComida } from "../api/categoriaComida";
import { CategoriaComidaCard } from "./CategoriaComidaCard";

export function CategoriaComidaList() {
    const [categoriaComidas, setCategoriaComidas] = useState([]);

    useEffect(() => {
        async function loadCategoriaComidas() {
            const res = await getAllCategoriaComida();
            setCategoriaComidas(res.data);
        }
        loadCategoriaComidas();
    }, []);

    return (
        <div className="grid grid-cols-2 gap-2">
            {categoriaComidas.map(c => (
                <CategoriaComidaCard key={c.id} categoriaComida={c} />
            ))}
        </div>
    );
}
