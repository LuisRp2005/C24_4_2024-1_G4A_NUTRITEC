import React, { useState, useEffect } from "react";
import { getAllComida } from "../api/comida";
import { ComidaCard } from "./ComidaCard";

export function ComidaList() {
    const [comidas, setComidas] = useState([]);

    useEffect(() => {
        async function loadComidas() {
            const res = await getAllComida();
            setComidas(res.data);
        }
        loadComidas();
    }, []);

    return (
        <div className="grid grid-cols-2 gap-2">
            {comidas.map(c => (
                <ComidaCard key={c.id} comida={c} />
            ))}
        </div>
    );
}
