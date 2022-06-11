import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { baseURL, headers } from '@/networking/config';
import { resInterceptor } from '@/networking/interceptors';

export class NetworkService {
    client: AxiosInstance;
    constructor() {
        this.client = axios.create({ baseURL, headers });
        this.client.interceptors.response.use(resInterceptor.onFulfill, resInterceptor.onReject);
    }

    setAccessToken(token: string) {
        this.client.defaults.headers.common.authorization = `Bearer ${token}`;
    }

    clearAccessToken() {
        delete this.client.defaults.headers.common.authorization;
    }

    request({ method, url, data, ...config }: AxiosRequestConfig<any>) {
        return this.client.request({ method, url, data, ...config });
    }
}

export const networkService = new NetworkService();