import axios from 'axios';

const ejercicioApi = axios.create({
    baseURL: "http://127.0.0.1:8000/nutritec/Ejercicio/"
});

export const getAllEjercicios = () => ejercicioApi.get("/");
export const getEjercicio = (id_ejercicio) => ejercicioApi.get(`/${id_ejercicio}/`);

export const createEjercicio = (ejercicio) => {
    return ejercicioApi.post("/", ejercicio);
};

export const deleteEjercicio = (id_ejercicio) => ejercicioApi.delete(`/${id_ejercicio}`);

export const updateEjercicio = (id_ejercicio, ejercicio) => {
    return ejercicioApi.put(`/${id_ejercicio}/`, ejercicio);
};
