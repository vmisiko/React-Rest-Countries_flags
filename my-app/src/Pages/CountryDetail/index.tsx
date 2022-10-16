import "./index.scss";
import { ArrowSmallLeftIcon } from '@heroicons/react/24/solid'
import { Link, useNavigate } from "react-router-dom";

function CountryDetail() {

  let navigate = useNavigate();
  
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

      <div className="detail-content">

          <div className="detail-content__image">
            <img id="flag" width="600" height="400" src="https://flagcdn.com/es.svg" alt="" />
          </div>

          <div className="spacer">

          </div>
          <div>
            <h2 className="detail-content__title">
              Belgium
            </h2>
            <div className="detail-content__list">
              <ol className="list1"> 
                <h4>Native Name: <span> Belgia</span> </h4>
                <h4>Population: <span> 10,0000</span> </h4>
                <h4>Region: <span> Europe</span> </h4>
                <h4>Sub Region:<span> Western Europe</span> </h4>
                <h4>Capital: <span> Brussels</span> </h4>
              </ol>

              <div className="spacer"></div>

              <ol className="list2"> 
                <h4>Top Level Domain: <span> Belgia</span> </h4>
                <h4>Currencies: <span> Euro</span> </h4>
                <h4>Languages: <span> Dutch, French, German</span> </h4>
              </ol>
            </div>


            <div className="detail-content__footer">
                <h4>
                  Border Countries:
                </h4>

                <div className="buttons">
                  <Link
                    id="border1"
                    to={`/detail/fr`}
                    className="test"
                    >
                      <span>France</span>
                  </Link>

                  <Link
                    id="border2"
                    to={`/detail/GE`}
                    className="test"
                    >
                      <span>Germany</span>
                  </Link>

                  <Link
                    id="border3"
                    to={`/detail/NE`}
                    className="test"
                    >
                      <span>Netherlands</span> 
                  </Link>
                </div>
            </div>

          </div>
      </div>
    </div>
  )
};

export default CountryDetail;