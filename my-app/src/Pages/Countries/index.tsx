import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosIntance from "../../AxiosIntance";
import SearchByCountry from "./SearchByCountry";
import SearchByRegion from "./SearchByRegion";
import CountryCard from "./CountryCard";
import './index.scss';
import Loader from "../../SharedComponents/Loader";

const Countries = () => {
  const [countries, setCountries] = useState<Array<any>>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [apiError, setAPIError] = useState<any>(null);
  const [networkError, setNetworkError] = useState<string>('');

  useEffect(() => {
    getCountries();
  }, []);

  const getCountries = async (endpoint?: string) => {
    setLoading(true);
    const url = endpoint ? endpoint : '/all';
    try {
      const response = await axiosIntance(url, {
          method: "GET",
          headers: {
              "Content-Type": "application/json"
          }
      });
      setCountries(response.data);
    } catch(err: any) {
      if (err.isAxiosError) {
        if (err.response) {
          const error = {
            message: 'Server Error',
            data: err.response.data,
            statusCode: err.response.status
          };
          console.log(error);
          setAPIError(error);
        } else {
          const error = 'NetWork Error'
          console.log(error);
          setNetworkError(error);
        }
      }
    }
    setLoading(false);
  }

  const searchByCountry = (name: string) => {
    const endpoint: string = `/name/${name}/?fullText=true`;
    getCountries(endpoint);
  }

  const searchByRegion = (e: any) => {
    const endpoint = `/region/${e.value}`;
    getCountries(endpoint);
  }

  if (apiError) {
    return (
      <div className="container text-center pt-20">
        <div className="mt-5"> 
          <span className="mt-5"> {apiError.statusCode} Error </span>
        </div>

        <button className="mt-5"> Reload page</button>
      </div>
    )
  }

  if (networkError) {
    return (
      <div className="container text-center pt-20">
        <span className="mt-5"> Newwork Error </span>

        <button className=""> Reload page</button>
      </div>
    )
  }

  return (
    <div className="container">
      <div className="search-section">
        <div className="search-section__country">
          <SearchByCountry onChange={searchByCountry} />
        </div>
        <div className="search-section__region">
          <SearchByRegion onChange={searchByRegion} />
        </div>
      </div>
      
        { loading  ?
          <Loader />
          : 
          <div id="countries" className="countries">
            {  
            countries &&
              countries?.map((country, key) => (
              <Link to={`/detail/${country.alpha2Code}`} key={key} >
                <CountryCard country={country} />
              </Link>
              ))
            }
          </div>
        }
    </div>
  )
};

export default Countries;
