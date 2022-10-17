import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosIntance from "../../AxiosIntance";
import SearchByCountry from "./SearchByCountry";
import SearchByRegion from "./SearchByRegion";
import CountryCard from "./CountryCard";
import './index.scss';
import Loader from "../../SharedComponents/Loader";
import useAxiosErrorhandler from "../../hook/useAxiosErrorHandler";
import { Country } from "../../models/response";
import useCountryApi from "../../api/useCountriesAPi";

const Countries = () => {
  const [countries, setCountries] = useState<Array<Country>>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const { getCountries } = useCountryApi();

  useEffect(() => {
    fetchCountries();
  }, []);

  const fetchCountries = async (endpoint?: string) => {
    setLoading(true);
    const url = endpoint ? endpoint : '/all';
    const response = await getCountries(url);
    sortCountries(response)
    setLoading(false);
  }

  const searchByCountry = (name: string) => {
    const endpoint: string = `/name/${name}/?fullText=true`;
    fetchCountries(endpoint);
  }

  const searchByRegion = (e: any) => {
    const endpoint = `/region/${e.value}`;
    fetchCountries(endpoint);
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

      <button className="mt-5  mx-auto" onClick={() => fetchCountries()} > Refetch Countries  </button>
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
