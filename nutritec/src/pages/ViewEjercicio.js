import React, { Component } from 'react';
import { Ejercicio } from '../service/Ejercicio';
import '../pages/styles.css';

class ViewEjercicio extends Component { 
    constructor() {
        super();
        this.state = {
            ejercicios: [] 
        };
        this.ejercicioService = new Ejercicio(); 
    }

    componentDidMount() {
        // Obtener los ejercicios al montar el componente
        this.ejercicioService.getAll().then(data => {
            this.setState({ ejercicios: data });
        }).catch(error => {
            console.error('Error al obtener los ejercicios:', error);
        });
    }

    render() {
        return (
            <div>
                <h1 className='text-center p-4'>Ejercicio</h1>
                <div className="row row-cols-1 row-cols-md-2 g-4">
                
                    {this.state.ejercicios.map(ejercicio => (
                        <div key={ejercicio.id} className="col">
                            <div className="card">
                                <img src="..." className="card-img-top" alt="..." />
                                <div className="card-body">
                                    
                                    <h4 className="card-title">{ejercicio.nombre}</h4>
                                
                                    <p className="card-text">{ejercicio.descripcion}</p>
                                    
                                    <p className="card-text">{ejercicio.nivel}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default ViewEjercicio;
