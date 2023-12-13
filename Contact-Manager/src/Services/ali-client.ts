import axios, { AxiosRequestConfig } from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8000",
});

class APIClient<T> {
  constructor(private endpoint: string) {}

  getAll = <T>(config?: AxiosRequestConfig) => {
    return axiosInstance.get<T>(this.endpoint, config);
  };

  delete = (contactId: number) => {
    return axiosInstance.delete<T>(`${this.endpoint}/${contactId}`);
  };

  create = (newContact: T) => {
    return axiosInstance.post<T>(this.endpoint, newContact);
  };

  update = (newContact: T, contactId: number) => {
    return axiosInstance.put<T>(`${this.endpoint}/${contactId}`, newContact);
  };
}

const create = <T>(endpoint: string) => new APIClient<T>(endpoint);

export default create;
