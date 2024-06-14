import axios from 'axios';

const ejercicioApi = axios.create({
    baseURL: "http://127.0.0.1:8000/nutritec/Ejercicio/"
});

export const getAllEjercicios = () => ejercicioApi.get("/");
export const getEjercicio = (id) => ejercicioApi.get(`/${id}/`);

export const createEjercicio = (ejercicio) => {
    return ejercicioApi.post("/", ejercicio);
};

export const deleteEjercicio = (id) => ejercicioApi.delete(`/${id}`);

export const updateEjercicio = (id, ejercicio) => {
    return ejercicioApi.put(`/${id}/`, ejercicio);
};
