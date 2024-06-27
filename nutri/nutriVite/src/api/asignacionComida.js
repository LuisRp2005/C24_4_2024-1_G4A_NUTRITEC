// src/api/asignacionComida.js

import axios from 'axios';

const asignacionComidaApi = axios.create({
    baseURL: 'http://127.0.0.1:8000/nutritec/AsignacionComida/'
});

export const getAllAsignacionComida = () => asignacionComidaApi.get('/');
export const getAsignacionComida = (id) => asignacionComidaApi.get(`/${id}/`);
export const createAsignacionComida = (asignacionComida) => asignacionComidaApi.post('/', asignacionComida);
export const deleteAsignacionComida = (id) => asignacionComidaApi.delete(`/${id}`);
export const updateAsignacionComida = (id, asignacionComida) => asignacionComidaApi.put(`/${id}/`, asignacionComida);

export const getAllComidas = () => {
    // Esta función obtendrá todas las comidas desde la API de Comida
    return axios.get('http://127.0.0.1:8000/nutritec/Comida/')
        .then(response => response.data)
        .catch(error => {
            console.error('Error fetching all comidas:', error);
            throw error;
        });
};
