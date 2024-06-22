//scr/api/nutri.app.js
import axios from 'axios'
const nutriusiario = axios.create({
    baseURL:"http://127.0.0.1:8000/nutritec/Usuario/"
})
export const getAllNutri=()=>nutriusiario.get("/");
export const getAll=(id)=>nutriusiario.get(`/${id}/`);
export const createNutri=(nutri)=>nutriusiario.post("/",nutri);
export const deleteNutri = (id) => nutriusiario.delete(`/${id}`);
export const updateNutri = (id,nutri) => nutriusiario.put(`/${id}/`,nutri);

