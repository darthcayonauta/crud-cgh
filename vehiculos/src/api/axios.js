import axios from 'axios' ;

const instance = axios.create({
    baseURL:'http://localhost:4200/api',
    withCredentials: true
})

export default instance ;