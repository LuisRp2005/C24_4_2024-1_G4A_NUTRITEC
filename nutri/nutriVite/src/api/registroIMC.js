import axios from 'axios';

const registroIMCApi = axios.create({
    baseURL: "http://127.0.0.1:8000/nutritec/RegistroIMC/"
});

export const getAllRegistroIMC = () => registroIMCApi.get("/");
export const getRegistroIMC = (id) => registroIMCApi.get(`/${id}/`);
export const createRegistroIMC = (registroIMC) => registroIMCApi.post("/", registroIMC);
export const deleteRegistroIMC = (id) => registroIMCApi.delete(`/${id}`);
export const updateRegistroIMC = (id, registroIMC) => registroIMCApi.put(`/${id}/`, registroIMC);
