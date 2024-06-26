import axios from 'axios';

class TokenService {
  baseUrl = 'http://localhost:8080/api/v1';

  getToken() {
    return axios.get(this.baseUrl + '/token', { withCredentials: true })
      .then(res => res.data);
  }
}

export default new TokenService();
