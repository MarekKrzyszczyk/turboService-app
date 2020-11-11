import axios from 'axios';
import {API_URL} from '../../Constants'

class TurboDataService {
    retrieveAllTurbos() {
        return axios.get(`${API_URL}/turbos`);
    }

    retrieveTurbo(id) {
        return axios.get(`${API_URL}/turbos/${id}`);
    }

    deleteTurbo(id) {
        return axios.delete(`${API_URL}/turbos/${id}`);
    }

    updateTurbo(id, turbo) {
        return axios.put(`${API_URL}/turbos/${id}`, turbo);
    }

    createTurbo(turbo) {
        return axios.post(`${API_URL}/turbos`, turbo);
    }
}

export default new TurboDataService();