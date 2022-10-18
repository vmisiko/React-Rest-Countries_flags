import "./index.scss";
import { Link, useNavigate, useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "../../SharedComponents/Loader";
import { CountryDetails, Currency, Language } from "../../models/CountryDetailResponse";
import useCountryApi from "../../api/useCountriesAPi";

function CountryDetail() {

  const [ countryDetails, setCountryDetails ] = useState<CountryDetails>();
  const [loading, setLoading] = useState<boolean>(false);
  const { getCountry } = useCountryApi();

  let navigate = useNavigate();
  let location = useLocation();
  let { code }= useParams();


  useEffect(() => {
    fetchCountry();
  }, [location]);

  const fetchCountry = async () => {
    setLoading(true);
    const res = await getCountry(`${code}`);
    setCountryDetails(res);
    setLoading(false);
  }
  
  return (
    <div className="country-detail container">
      <button
      id="back"
      className="country-detail__button"
      onClick={() => navigate('/')}
      >
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="icon">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
          </svg>
        </div>

        <span>Back</span>
      </button>

      { 
        loading
        ? <Loader />
        : <div className="detail-content">

            <div className="detail-content__image">
              <img id="flag" width="600" height="400" src={countryDetails?.flags?.svg} alt="" />
            </div>

            <div className="spacer">

            </div>
            <div>
              <h2 className="detail-content__title">
                { countryDetails?.name }
              </h2>
              <div className="detail-content__list">
                <ol className="list1"> 
                  <h4>Native Name: <span> { countryDetails?.nativeName }</span> </h4>
                  <h4>Population: <span> { countryDetails?.population?.toLocaleString("en-US")}</span> </h4>
                  <h4>Region: <span> { countryDetails?.region }</span> </h4>
                  <h4>Sub Region:<span> { countryDetails?.subregion }</span> </h4>
                  <h4>Capital: <span> {countryDetails?.capital }</span> </h4>
                </ol>

                <div className="spacer"></div>

                <ol className="list2"> 
                  <h4>Top Level Domain: <span> {countryDetails?.topLevelDomain}</span> </h4>
                  <h4>Currencies: {countryDetails?.currencies?.map((currency: Currency, key:number) => <span key={key}>{currency.code}</span>  )} </h4>
                  <h4>Languages: {countryDetails?.languages?.map((language:Language, key:number) => <span key={key}>{language.name} </span>  )}</h4>
                </ol>
              </div>


              <div className="detail-content__footer">
                  <h4>
                    Border Countries:
                  </h4>

                  <div className="buttons">
                    { 
                    countryDetails?.borders?.map((border: string, key:number) =>
                      <Link
                        id={`border${key}`}
                        to={`/detail/${border}`}
                        className="test"
                        key={key}
                        >
                          <span>{border}</span>
                      </Link>
                      )
                    }
                  </div>
              </div>

            </div>
        </div>
        }
    </div>
  )
};

export default CountryDetail;