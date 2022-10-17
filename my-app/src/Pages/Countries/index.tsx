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
      sortCountries(response.data);
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

  const sortCountries =  (data: any) => {
    const response = data.sort(function(a: any, b: any){return b.population - a.population});
    setCountries(response);
  }

  const noCountries = (
    <div className="no-countries text">
      <div className="mt-5 text-center  mx-auto"> 
        <span className="mt-5"> No Countries Found </span>
      </div>

      <button className="mt-5  mx-auto" onClick={() => getCountries()} > Refetch Countries  </button>
    </div>
  );

  const loadedCountries = countries ? (
    <div id="countries" className="countries">
        {  
          countries?.map((country, key) => (
          <Link to={`/detail/${country.alpha2Code}`} key={key} >
            <CountryCard country={country} />
          </Link>
          ))
        }
    </div>
      ) : noCountries;

  return (
    <div className="container home-font">
      <div className="search-section">
        <div className="search-section__country">
          <SearchByCountry onChange={searchByCountry} />
        </div>
        <div className="search-section__region">
          <SearchByRegion onChange={searchByRegion} />
        </div>
      </div>
        { loading  ? <Loader /> : loadedCountries }
    </div>
  )
};

export default Countries;
