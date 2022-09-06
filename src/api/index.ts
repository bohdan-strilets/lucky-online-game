import axios from 'axios';

export const API_URL = 'http://localhost:5000';

const api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

api.interceptors.request.use(config => {
  const token = JSON.parse(localStorage.getItem('persist:user') as string);

  if (token) {
    const parsedToken = token.token.replaceAll('"', '');

    config.headers = {
      Authorization: `Bearer ${parsedToken}`,
    };
  }

  return config;
});

// api.interceptors.response.use(
//   config => {
//     return config;
//   },
//   async error => {
//     const originalRequest = error.config;

//     if (error.response.status !== 200) {
//       try {
//         console.log('refresh now');
//         return api.request(originalRequest);
//       } catch (error) {
//         console.log('NOT AUTHORIZED');
//       }
//     }
//   },
// );

export default api;
