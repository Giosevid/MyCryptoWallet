import axios from 'axios';

export const instanceCoinGecko = axios.create({
  baseURL: 'https://api.coingecko.com/api/v3',
});

// Add a request interceptor
instanceCoinGecko.interceptors.request.use(
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
