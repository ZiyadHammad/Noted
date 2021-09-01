import axios from "axios";

const baseURL = process.env.NODE_ENV === 'production'
  ? 'https://noted-apii.herokuapp.com/'
  : 'http://localhost:3000'
  
const api = axios.create({
  baseURL: 'http://localhost:3000'
})

export default api