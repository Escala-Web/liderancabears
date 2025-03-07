import axios from 'axios';

const api = axios.create({
    baseURL: 'https://novo.liderancabarbers.com.br/api-barbers',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
});

export default api;