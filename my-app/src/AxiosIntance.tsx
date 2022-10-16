import axios, { AxiosResponse, AxiosError} from "axios";

const HOST_URL = 'https://restcountries.com/v2';
const axiosIntance = axios.create({
  baseURL: HOST_URL
});

axiosIntance.interceptors.response.use(
  (response: AxiosResponse) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    return response;
  },
  (err: AxiosError) => {
    if (err.response) {
      const error = {
        message: 'Server Error',
        data: err.response.data,
        statusCode: err.response.status
      };
      console.log(error);
    } else {
      const error = 'NetWork Error'
      console.log(error);
    }
    return err;
  }
);

export default axiosIntance;

