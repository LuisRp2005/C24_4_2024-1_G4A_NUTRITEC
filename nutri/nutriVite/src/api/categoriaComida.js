import axios from 'axios';

const categoriaComidaApi = axios.create({
    baseURL: "http://127.0.0.1:8000/nutritec/CategoriaComida/"
});

export const getAllCategoriaComida = () => categoriaComidaApi.get("/");
export const getCategoriaComida = (id) => categoriaComidaApi.get(`/${id}/`);
export const createCategoriaComida = (categoriaComida) => categoriaComidaApi.post("/", categoriaComida);
export const deleteCategoriaComida = (id) => categoriaComidaApi.delete(`/${id}`);
export const updateCategoriaComida = (id, categoriaComida) => categoriaComidaApi.put(`/${id}/`, categoriaComida);
