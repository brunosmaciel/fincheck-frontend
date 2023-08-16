import axios from 'axios';
import { localStorageKeys } from '../config/localStorageKeys';
import { sleep } from '../utils/sleep';

const httpClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

httpClient.interceptors.request.use(async (config) => {
  const accessToken = localStorage.getItem(localStorageKeys.ACCESS_TOKEN);
  await sleep(500);
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

export { httpClient };
