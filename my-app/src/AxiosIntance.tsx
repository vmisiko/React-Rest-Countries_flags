import axios, { AxiosResponse, AxiosError} from "axios";

const HOST_URL = 'https://restcountries.com/v2';
const axiosIntance = axios.create({
  baseURL: HOST_URL
});

export default axiosIntance;

