import axios from 'axios'

const api =axios.create({
    baseURL:'http:/192.168.0.156:3000/'
    // baseURL:'http:/192.168.43.176:3000/'
})

export default api