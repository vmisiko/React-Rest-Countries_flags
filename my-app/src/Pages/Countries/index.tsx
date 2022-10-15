import SearchByCountry from "./SearchByCountry";
import SearchByRegion from "./SearchByRegion";
import CountryCard from "./CountryCard";
import { useState } from "react";

function Countries() {
  const [countries, setCountries] = useState([]);

  return (
    <div className="">
      <div className="Search-section">
        <div className="Search-section__country">
          <SearchByCountry />
        </div>
        <div className="Search-section__region">
          <SearchByRegion />
        </div>
      </div>
      
      <div className="countries">
        {
          countries.map((country, key ) => <CountryCard country={country} key={key} />)
        }
      </div>
    </div>
  )
};

export default Countries;