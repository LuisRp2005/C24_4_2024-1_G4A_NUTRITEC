// CardComponent.jsx
import React from 'react';

const CardComponent = ({ item, handleConsultarIA, handleAsignar }) => {
    return (
        <div className="col-lg-4 col-md-6 mb-4">
            <div className="card border-0 shadow-sm rounded-3">
                <img
                    src={`http://127.0.0.1:8000/media/${item.images}`}
                    className="card-img-top img-fluid rounded-3"
                    alt={item.nombre}
                />
                <div className="card-body p-4">
                    <h5 className="card-title text-primary fw-bold">{item.nombre}</h5>
                    <p className="card-text mb-2">Calorías: {item.calorias}</p>
                    <div className="d-grid gap-2">
                        <button
                            className="btn btn-primary"
                            onClick={() => handleConsultarIA(item.id, item.nombre)}
                        >
                            Consultar con IA
                        </button>
                        <button
                            className="btn btn-success mt-2"
                            onClick={() => handleAsignar(item.id)}
                        >
                            Asignar {item.tipo === 'comida' ? 'Comida' : 'Ejercicio'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardComponent;
