// comida.js
import axios from 'axios';

const comidaApi = axios.create({
    baseURL: "http://127.0.0.1:8000/nutritec/Comida/"
});

export const getAllComida = () => comidaApi.get("/");
export const getComida = (id_comida) => comidaApi.get(`/${id_comida}/`);

export const createComida = (comida) => comidaApi.post("/", comida);

export const deleteComida = (id_comida) => comidaApi.delete(`/${id_comida}`);

export const updateComida = (id_comida, comida) => comidaApi.put(`/${id_comida}/`, comida);
