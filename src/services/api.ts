import axios from 'axios'

const api = axios.create({

  // baseURL:'put your ip address here:3000/'
  // and run npm start at backend folder
  baseURL: 'http:/192.168.0.108:3000/'
})

export default api