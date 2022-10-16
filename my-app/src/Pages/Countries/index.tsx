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

  const getCountries = async () => {
    setLoading(true);
    const response = await fetch("https://restcountries.com/v2/all", {
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
          <Loader />
          : 
          <div id="countries" className="countries">
            {  
            countries &&
              countries.map((country, key) => (
              <Link to={`/detail/${country.alpha2Code}`}>
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
