// src/components/TipoIMCList.jsx
import React, { useState, useEffect } from "react";
import { getAllTipoIMC } from "../api/nutri.app";
import { TipoIMCCard } from "./TipoIMCCard";

export function TipoIMCList() {
    const [tipoimcs, setTipoIMCs] = useState([]);

    useEffect(() => {
        async function loadTipoIMCs() {
            const res = await getAllTipoIMC();
            setTipoIMCs(res.data);
        }
        loadTipoIMCs();
    }, []);

    return (
        <div className="grid grid-cols-2 gap-2">
            {tipoimcs.map(t => (
                <TipoIMCCard key={t.id} tipoimc={t} />
            ))}
        </div>
    );
}
