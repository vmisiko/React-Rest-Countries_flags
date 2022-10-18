import { AxiosError } from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function  useAxiosErrorhandler() {

  const [apiError , setApiError] = useState<string>('');
  const [networkError , setNetworkError] = useState<string>('');
  const navigate = useNavigate();

  const handleAxiosError = (err: AxiosError) => {
    if (err.isAxiosError) {
      if (err.response) {
        setApiError('ServerError')
        navigate(`/error/${err.response.status}/ServerError`);
      } else {
        const error = 'NetWork Error'
        navigate(`/error/Network/NetworkError`);
        setNetworkError(error);
      }
    }
  }

  return {
    apiError,
    networkError,
    handleAxiosError,
  }
}

export default useAxiosErrorhandler;
