import axios from 'axios';
import {API_URL} from '../../Constants'

class PartDataService {
    retrieveAllParts() {
        return axios.get(`${API_URL}/parts`);
    }

    retrievePart(id) {
        return axios.get(`${API_URL}/parts/${id}`);
    }

    deletePart(id) {
        return axios.delete(`${API_URL}/parts/${id}`);
    }

    updatePart(id, part) {
        return axios.put(`${API_URL}/parts/${id}`, part);
    }

    createPart(part) {
        return axios.post(`${API_URL}/parts`, part);
    }

}

export default new PartDataService();