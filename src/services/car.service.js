import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'https://localhost:44336/api/';

class UserService {
    
    getCars(){
        return axios.get(API_URL + "car", { headers: authHeader() })
    }
}