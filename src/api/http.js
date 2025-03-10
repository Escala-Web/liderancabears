import axios from 'axios';
import {CONFIG} from '../config/config';

const api = axios.create({
    baseURL: CONFIG.getURL(false),
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
});

export default api;