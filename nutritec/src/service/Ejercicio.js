import axios from 'axios';

export class Ejercicio {
    constructor() {
        this.baseUrl = "http://localhost:8080/api/v1/";
    }
    
    getAll() {
        return axios.get(this.baseUrl + 'ejercicio').then(res => res.data);
    }
}

export default Ejercicio;
