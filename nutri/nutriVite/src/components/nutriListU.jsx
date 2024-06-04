import React, { useState, useEffect } from "react";
import { getAllNutri } from "../api/nutri.app";
import { NutriCard } from "./nutriCardU";

export function NutriList() {
    const [nutri, setNutri] = useState([]);

    useEffect(() => {
        async function loadNutri() {
            const res = await getAllNutri();
            setNutri(res.data);
        }
        loadNutri();
    }, []);

    return (
        <div className="grid grid-cols-2 gap-2">
            {nutri.map(n => (
                <NutriCard key={n.id} nutri={n} />
            ))}
        </div>
    );

}
