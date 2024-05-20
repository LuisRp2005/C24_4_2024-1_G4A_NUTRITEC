import axios from 'axios';

export class Comida {
    constructor() {
        this.baseUrl = "http://localhost:8080/api/v1/";
    }
    
    getAll() {
        return axios.get(this.baseUrl + 'comida').then(res => res.data);
    }
}


export default Comida;
