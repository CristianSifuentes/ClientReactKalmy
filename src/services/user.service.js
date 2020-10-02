import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'https://localhost:44336/api/';

class UserService {
  getCars() {
    return axios.get(API_URL + 'car');
  }

  getPublicContent() {
    return axios.get(API_URL + 'cars');
  }

  getUserBoard() {
    return axios.get(API_URL + 'user', { headers: authHeader() });
  }

  getModeratorBoard() {
    return axios.get(API_URL + 'mod', { headers: authHeader() });
  }

  getAdminBoard() {
    return axios.get(API_URL + 'admin', { headers: authHeader() });
  }
}

export default new UserService();
