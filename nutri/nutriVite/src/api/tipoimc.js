import axios from 'axios'
const tipoIMCApi = axios.create({
    baseURL: "http://127.0.0.1:8000/nutritec/TipoIMC/"
});

export const getAllTipoIMC = () => tipoIMCApi.get("/");
export const getTipoIMC = (id) => tipoIMCApi.get(`/${id}/`);
export const createTipoIMC = (tipoIMC) => tipoIMCApi.post("/", tipoIMC);
export const deleteTipoIMC = (id) => tipoIMCApi.delete(`/${id}`);
export const updateTipoIMC = (id, tipoIMC) => tipoIMCApi.put(`/${id}/`, tipoIMC);
