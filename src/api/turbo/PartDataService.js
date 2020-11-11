import axios from 'axios';
import {API_URL} from '../../Constants'

class PartDataService {
    retrieveAllParts() {
        return axios.get(`${API_URL}/parts`);
    }

    deletePart(id) {
        return axios.delete(`${API_URL}/parts/${id}`);
    }

}

export default new PartDataService();