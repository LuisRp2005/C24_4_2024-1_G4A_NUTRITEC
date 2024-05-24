 import { Link } from "react-router-dom"
 export function Navigations() {
    return (
        <div className="flex justify-between py-3">
            <Link to="/nutritec">
                <h1 className="font-bold text-3x1 mb-4">Usuarios</h1>
            </Link>

                
            <button className="bg-indigo-500 px-3 py-2 rounded-lg">
                <Link to="/nutritec-create"> Crear nuevo usuario</Link>  
            
            </button>      
        </div>
    )
 }

