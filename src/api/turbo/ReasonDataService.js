import axios from 'axios';
import {API_URL} from '../../Constants'

class ReasonDataService {
    retrieveAllReasons() {
        return axios.get(`${API_URL}/reasons`);
    }

    deleteReason(id) {
        return axios.delete(`${API_URL}/reasons/${id}`);
    }

}

export default new ReasonDataService();