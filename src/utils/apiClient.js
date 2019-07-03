import axios from 'axios'

const instance = axios.create({
  // TODO: update api url
  baseURL: 'http://localhost:3002',
  timeout: 1000
})

export default instance
