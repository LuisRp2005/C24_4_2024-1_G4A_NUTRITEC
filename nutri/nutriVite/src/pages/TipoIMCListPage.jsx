// src/pages/TipoIMCListPage.jsx
import React, { useState, useEffect } from "react";
import { getAllTipoIMC } from "../api/tipoimc";
import { TipoIMCCard } from "../components/TipoIMCCard";

export function TipoIMCListPage() {
    const [tipoIMC, setTipoIMC] = useState([]);

    useEffect(() => {
        async function loadTipoIMC() {
            const res = await getAllTipoIMC();
            setTipoIMC(res.data);
        }
        loadTipoIMC();
    }, []);

    return (
        <div className="grid grid-cols-2 gap-2">
            {tipoIMC.map(t => (
                <TipoIMCCard key={t.id} tipoIMC={t} />
            ))}
        </div>
    );
}
