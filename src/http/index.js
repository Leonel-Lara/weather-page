import axios from 'axios'

let endpoint = 'https://api.stormglass.io/v2/'

const http = axios.create({
  baseURL: endpoint
})

export default http
