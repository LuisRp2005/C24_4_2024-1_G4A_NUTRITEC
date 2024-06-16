import axios from 'axios';

const tipoIMCApi = axios.create({
    baseURL: "http://127.0.0.1:8000/nutritec/TipoIMC/"
});

export const getAllTipoIMC = () => tipoIMCApi.get("/");
export const getTipoIMC = (id_tipo_imc) => tipoIMCApi.get(`/${id_tipo_imc}/`);
export const createTipoIMC = (tipoIMC) => tipoIMCApi.post("/", tipoIMC);
export const deleteTipoIMC = (id_tipo_imc) => tipoIMCApi.delete(`/${id_tipo_imc}/`);
export const updateTipoIMC = (id_tipo_imc, tipoIMC) => tipoIMCApi.put(`/${id_tipo_imc}/`, tipoIMC);
