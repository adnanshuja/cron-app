import axios from "axios";
const apiClient = axios.create({
    baseURL: 'http://localhost:3000/'
});
apiClient.interceptors.request.use(function (config) {
    const token = localStorage.getItem('token');
    config.headers.Authorization =  token ? `Bearer ${token}` : '';
    return config;
  });

export { apiClient };