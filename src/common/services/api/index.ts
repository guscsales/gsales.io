import axios from 'axios';

export const clientAPI = axios.create({ baseURL: '/api' });
