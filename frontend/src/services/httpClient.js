import axios from 'axios'
export const httpClient = axios.create({ baseUrl: 'http://localhost:3000/api' })