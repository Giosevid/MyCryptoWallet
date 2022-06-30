import axios from 'axios';

export const instanceRipio = axios.create({
  baseURL: 'https://ripio.com/api/v1/',
});

// Add a request interceptor
instanceRipio.interceptors.request.use(
  config => {
    /* const token = localStorageService.getAccessToken()
    if (token) {
      config.headers['Authorization'] = 'Bearer ' + token
    } */
    config.headers['Content-Type'] = 'application/json';

    return config;
  },
  error => {
    console.log('error ============>', error);
    Promise.reject(error);
  },
);
