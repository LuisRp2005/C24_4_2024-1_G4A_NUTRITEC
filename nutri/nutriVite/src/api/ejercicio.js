// src/api/ejercicio.js
import axios from 'axios';

const ejercicioApi = axios.create({
    baseURL: "http://127.0.0.1:8000/nutritec/Ejercicio/"
});

export const getAllEjercicios = () => ejercicioApi.get("/");
export const getEjercicio = (id) => ejercicioApi.get(`/${id}/`);
export const createEjercicio = (ejercicio) => ejercicioApi.post("/", ejercicio, {
    headers: {
        'Content-Type': 'multipart/form-data'
    }
});
export const deleteEjercicio = (id) => ejercicioApi.delete(`/${id}`);
export const updateEjercicio = (id, ejercicio) => ejercicioApi.put(`/${id}/`, ejercicio, {
    headers: {
        'Content-Type': 'multipart/form-data'
    }
});
