import axios from "axios";

const baseURL = process.env.NODE_ENV === 'production'
  ? 'deployed link goes here'
  : 'http://localhost:3000'
  
const api = axios.create({
  baseURL: 'http://localhost:3000'
})

export default api