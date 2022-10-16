import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SearchByCountry from "./SearchByCountry";
import SearchByRegion from "./SearchByRegion";
import CountryCard from "./CountryCard";
import './index.scss';
import Loader from "../../SharedComponents/Loader";

const Countries = () => {
  const [countries, setCountries] = useState<Array<any>>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getCountries();
  }, []);

  const getCountries = async (endpoint?: string) => {
    setLoading(true);
    const url = `https://restcountries.com/v2${endpoint ? endpoint : '/all'}`;
    const response = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });
    const responsejson = await response.json();
    setLoading(false);
    setCountries(responsejson);
  }

  const searchByCountry = (name: string) => {
    const endpoint: string = `/name/${name}/?fullText=true`;
    getCountries(endpoint);
  }

  const searchByRegion = (e: any) => {
    const endpoint = `/region/${e.value}`;
    getCountries(endpoint);
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
