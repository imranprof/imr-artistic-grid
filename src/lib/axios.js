import axios from 'axios';

const axiosInstance = axios.create({
  baseURL:  process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true, // for sending cookies with requests
})

export default axiosInstance;