import axios from 'axios';

export class CategoriaComida {
    constructor() {
        this.baseUrl = "http://localhost:8080/api/";
    }
    
    getAll() {
        return axios.get(this.baseUrl + 'categorias-comida').then(res => res.data);
    }
}


export default CategoriaComida;
