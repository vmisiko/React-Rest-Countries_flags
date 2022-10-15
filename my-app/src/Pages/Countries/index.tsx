import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SearchByCountry from "./SearchByCountry";
import SearchByRegion from "./SearchByRegion";
import CountryCard from "./CountryCard";
import './index.scss';

const Countries = () => {
  const [countries, setCountries] = useState<Array<any>>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getCountries();
  }, []);

  const getCountries = async () => {
    setLoading(true);
    const response = await fetch("https://restcountries.com/v3.1/all", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });
    const responsejson = await response.json();
    setLoading(false);
    setCountries(responsejson);
  }

  return (
    <div className="container">
      <div className="search-section">
        <div className="search-section__country">
          <SearchByCountry />
        </div>
        <div className="search-section__region">
          <SearchByRegion />
        </div>
      </div>
      
        { loading  ?
          <div id="loader" className="spinner">
            <svg className="animate-spin" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M12 19C13.1 19 14 19.9 14 21S13.1 23 12 23 10 22.1 10 21 10.9 19 12 19M12 1C13.1 1 14 1.9 14 3S13.1 5 12 5 10 4.1 10 3 10.9 1 12 1M6 16C7.1 16 8 16.9 8 18S7.1 20 6 20 4 19.1 4 18 4.9 16 6 16M3 10C4.1 10 5 10.9 5 12S4.1 14 3 14 1 13.1 1 12 1.9 10 3 10M6 4C7.1 4 8 4.9 8 6S7.1 8 6 8 4 7.1 4 6 4.9 4 6 4M18 16C19.1 16 20 16.9 20 18S19.1 20 18 20 16 19.1 16 18 16.9 16 18 16M21 10C22.1 10 23 10.9 23 12S22.1 14 21 14 19 13.1 19 12 19.9 10 21 10M18 4C19.1 4 20 4.9 20 6S19.1 8 18 8 16 7.1 16 6 16.9 4 18 4Z"
              />
            </svg>
          </div> 
          : 
          <div id="countries" className="countries">
            {  
            countries &&
              countries.map((country, key) => (
              <Link to={`/detail/${country.cca2}`}>
                <CountryCard country={country} key={key} />
              </Link>
              ))
            }
          </div>
        }
    </div>
  )
};

export default Countries;
