import axios from 'axios'

const client = axios.create({baseURL: "http://localhost:4545/api"})

export default client