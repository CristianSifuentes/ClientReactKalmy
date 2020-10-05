import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'https:localhost:44336/api/';

class CarService {


      search(parameter1, parameter2){ 
        return axios.post(API_URL + "car/search", 
        {
                  parameter1,
                  parameter2
                }
        , { headers: authHeader() })
        .then(response => {
              return response.data;
            })
       .catch((error) => {
          console.log(error)
       })
      }

      getCars() {
        return axios.get(API_URL + 'car', { headers: authHeader() });
      }

      getCar(id) {
        return axios.get(API_URL + 'car/' + id, { headers: authHeader() });
      }

      addCar(type, brand, model) {
        return axios.post(API_URL + "car", {
          type,
          brand,
          model
        }, { headers: authHeader() }).then(response => {
          return response.data;
        })
        .catch((error) => {
            console.log(error)
        });
      }
    

      updateCar(id, type, brand, model) {
        return axios.put(API_URL + "car/" + id, {
          id,
          type,
          brand,
          model
        }, { headers: authHeader() }).then(response => {
          return response.data;
        })
        .catch((error) => {
            console.log(error)
        });
      }

      deleteCar(id) {
        return axios.delete(API_URL + "car/" + id, {
        }, { headers: authHeader() }).then(response => {
          return response.data;
        })
        .catch((error) => {
            console.log(error)
        });
      }

}

export default new CarService();
