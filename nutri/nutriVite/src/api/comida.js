import axios from 'axios';

const comidaApi = axios.create({
    baseURL: "http://127.0.0.1:8000/nutritec/Comida/"
});

export const getAllComida = () => comidaApi.get("/");
export const getComida = (id) => comidaApi.get(`/${id}/`);

export const createComida = (comida) => {
    const formData = new FormData();
    formData.append('nombre_comida', comida.nombre_comida);
    formData.append('calorias', comida.calorias);
    formData.append('categoria', comida.categoria);
    formData.append('imagen', comida.imagen); // asumiendo que `imagen` es un objeto de tipo File

    return comidaApi.post("/", formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
};

export const deleteComida = (id) => comidaApi.delete(`/${id}`);
export const updateComida = (id, comida) => {
    const formData = new FormData();
    formData.append('nombre_comida', comida.nombre_comida);
    formData.append('calorias', comida.calorias);
    formData.append('categoria', comida.categoria);
    formData.append('imagen', comida.imagen); // asumiendo que `imagen` es un objeto de tipo File

    return comidaApi.put(`/${id}/`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
};
