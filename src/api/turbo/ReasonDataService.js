import axios from 'axios';
import {API_URL} from '../../Constants'

class ReasonDataService {
    retrieveAllReasons() {
        return axios.get(`${API_URL}/reasons`);
    }

    retrieveReason(id) {
        return axios.get(`${API_URL}/reasons/${id}`);
    }

    deleteReason(id) {
        return axios.delete(`${API_URL}/reasons/${id}`);
    }

    updateReason(id, part) {
        return axios.put(`${API_URL}/reasons/${id}`, part);
    }

    createReason(part) {
        return axios.post(`${API_URL}/reasons`, part);
    }

}

export default new ReasonDataService();