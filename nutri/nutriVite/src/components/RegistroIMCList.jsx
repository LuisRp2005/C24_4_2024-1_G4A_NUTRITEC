import React, { useState, useEffect } from "react";
import { getAllRegistroIMC } from "../api/registroIMC";
import { RegistroIMCCard } from "./RegistroIMCCard";

export function RegistroIMCList() {
    const [registroIMCs, setRegistroIMCs] = useState([]);

    useEffect(() => {
        async function loadRegistroIMCs() {
            const res = await getAllRegistroIMC();
            setRegistroIMCs(res.data);
        }
        loadRegistroIMCs();
    }, []);

    return (
        <div className="grid grid-cols-2 gap-2">
            {registroIMCs.map(r => (
                <RegistroIMCCard key={r.id} registroIMC={r} />
            ))}
        </div>
    );
}
