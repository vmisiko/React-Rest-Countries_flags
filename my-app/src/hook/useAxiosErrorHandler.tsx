import { useState } from "react";
import { useNavigate } from "react-router-dom";

function  useAxiosErrorhandler() {

  const [apiError , setApiError] = useState<any>(null);
  const [networkError , setNetworkError] = useState<any>(null);
  const navigate = useNavigate();

  const handleAxiosError = (err: any) => {
    if (err.isAxiosError) {
      if (err.response) {
        const error = {
          message: 'Server Error',
          data: err.response.data,
          statusCode: err.response.status
        };
        setApiError(error);
        navigate('/error');
      } else {
        const error = 'NetWork Error'
        navigate('/error');
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
