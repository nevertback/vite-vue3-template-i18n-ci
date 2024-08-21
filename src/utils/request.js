import axios from 'axios'
// import store from '@/store'
// import router from '@/router'
const service = axios.create({
  baseURL: import.meta.env.VITE_BASE_API,
  timeout: 0
})
service.interceptors.request.use()
service.interceptors.response.use()
export default service
