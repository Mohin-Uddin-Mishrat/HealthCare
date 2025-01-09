import axios from 'axios'

const api = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL || 'https://healthcare-tgu6.onrender.com',
})

api.interceptors.request.use(
    (config)=>{
        const token = localStorage.getItem('access')
        if(token){
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (error)=>{
        return Promise.reject(error)
    }
)
export default api 