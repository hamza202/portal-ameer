import axios from 'axios';
import JwtService from './JwtService';
import { AxiosResponse, AxiosRequestConfig } from 'axios';

/**
 * @description service to call HTTP request via Axios
 */
class ApiService {
    /**
     * @description property to share vue instance
     */

    /**
     * @description initialize vue axios
     */
    public static init(url) {
        axios.defaults.baseURL = url;
    }

    /**
     * @description set the default HTTP request headers
     */
    public static setHeader(): void {
        axios.defaults.headers.common['Authorization'] = `Bearer ${JwtService.getToken()}`;
        axios.defaults.headers.common['Accept'] = 'application/json';
        axios.defaults.headers.common['Accept-Language'] = window.localStorage.getItem('lang');
    }

    /**
     * @description send the GET HTTP request
     * @param resource: string
     * @param params: AxiosRequestConfig
     * @returns Promise<AxiosResponse>
     */
    public static query(resource: string, params: AxiosRequestConfig): Promise<AxiosResponse> {
        return axios.get(resource, params);
    }

    /**
   * @description send the GET HTTP request
   * @param resource: string
   // * @param slug: string
   * @returns Promise<AxiosResponse>
   */
    public static get(
        resource: string
        // slug = "" as string
    ): Promise<AxiosResponse> {
        return axios.get(`${resource}`);
    }

    /**
     * @description set the POST HTTP request
     * @param resource: string
     * @param params: AxiosRequestConfig
     * @returns Promise<AxiosResponse>
     */
    public static post(resource: string, params: AxiosRequestConfig): Promise<AxiosResponse> {
        return axios.post(`${resource}`, params);
    }

    /**
     * @description send the UPDATE HTTP request
     * @param resource: string
     * @param slug: string
     * @param params: AxiosRequestConfig
     * @returns Promise<AxiosResponse>
     */
    public static update(resource: string, slug: string, params: AxiosRequestConfig): Promise<AxiosResponse> {
        return axios.put(`${resource}/${slug}`, params);
    }


    /**
     * @description Send the DELETE HTTP request
     * @param resource: string
     * @returns Promise<AxiosResponse>
     */
    public static delete(resource: string): Promise<AxiosResponse> {
        return axios.delete(resource);
    }

}

export default ApiService;
