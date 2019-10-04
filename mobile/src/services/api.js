import axios from 'axios'

const api = axios.create({
    // mudar em pages/List também
    baseURL: 'http://192.168.0.102:3333'
})

export default api