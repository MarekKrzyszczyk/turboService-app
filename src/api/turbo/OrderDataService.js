import axios from 'axios';
import {API_URL} from '../../Constants'

class OrderDataService {
    retrieveAllOrders() {
        return axios.get(`${API_URL}/orders`);
    }

    retrieveOrder(id) {
        return axios.get(`${API_URL}/orders/${id}`);
    }

    deleteOrder(id) {
        return axios.delete(`${API_URL}/orders/${id}`);
    }

    updateOrder(id, turbo) {
        return axios.put(`${API_URL}/orders/${id}`, turbo);
    }

    createOrder(turbo) {
        return axios.post(`${API_URL}/orders`, turbo);
    }
}

export default new OrderDataService();