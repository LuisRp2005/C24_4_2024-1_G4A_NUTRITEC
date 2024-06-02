import axios from 'axios';

const asignacionEjercicioApi = axios.create({
    baseURL: 'http://127.0.0.1:8000/nutritec/AsignacionEjercicio/',
});

export const getAllAsignacionEjercicio = () => asignacionEjercicioApi.get('/');
export const getAsignacionEjercicio = (id) => asignacionEjercicioApi.get(`/${id}/`);
export const createAsignacionEjercicio = (asignacionEjercicio) => asignacionEjercicioApi.post('/', asignacionEjercicio);
export const updateAsignacionEjercicio = (id, asignacionEjercicio) => asignacionEjercicioApi.put(`/${id}/`, asignacionEjercicio);
export const deleteAsignacionEjercicio = (id) => asignacionEjercicioApi.delete(`/${id}/`);
