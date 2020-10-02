import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'https://localhost:44336/api/';

class CarService {
    
    getCars(){
        return axios.get(API_URL + "car/search?parameter1=Type&parameter2=Model", { headers: authHeader() })
    }
}

export default new CarService();
