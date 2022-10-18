import useAxiosErrorhandler from "../hook/useAxiosErrorHandler";
import axiosIntance from "../AxiosIntance";
import { AxiosError } from "axios";

const useCountryApi = () => {

  const { handleAxiosError } = useAxiosErrorhandler();

  const getCountries = async (url: string) => {
    try {
      const response = await axiosIntance(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          }
      });
      return response.data;
    } catch(err: AxiosError | any) {
      handleAxiosError(err);
    }
  }

  const getCountry = async (code: string) => {
    try {
      const res = await axiosIntance(`/alpha/${code}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          }
      });

      return res.data;
    } catch(err: AxiosError | any) {
      handleAxiosError(err);
    }
  }

  return {
    getCountries,
    getCountry,
  }
}

export default useCountryApi;
