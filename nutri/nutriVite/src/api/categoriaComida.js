import axios from 'axios';

const categoriaComidaApi = axios.create({
    baseURL: "http://127.0.0.1:8000/nutritec/CategoriaComida/"
});

export const getAllCategoriaComida = () => categoriaComidaApi.get("/");
export const getCategoriaComida = (id_categoria_comida) => categoriaComidaApi.get(`/${id_categoria_comida}/`);
export const createCategoriaComida = (categoriaComida) => categoriaComidaApi.post("/", categoriaComida);
export const deleteCategoriaComida = (id_categoria_comida) => categoriaComidaApi.delete(`/${id_categoria_comida}`);
export const updateCategoriaComida = (id_categoria_comida, categoriaComida) => categoriaComidaApi.put(`/${id_categoria_comida}/`, categoriaComida);
