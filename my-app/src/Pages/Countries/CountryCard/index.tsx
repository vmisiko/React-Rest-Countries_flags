import './index.scss';

function countryCard(props:{country: any}) {
  return (
    <div id="card" className="country-card">
      <div className="country-card__image">
        <img src={props.country.flags.svg} alt="" />
      </div>
      <div className="country-card__content">
        <h2 className="name">
          {props.country.name.official}
        </h2>

        <ol className="list">
          <li> Population: <span>{props.country.population}</span></li>
          <li> Region: <span>{props.country.region}</span></li>
          <li> Capital: <span>{props.country?.capital}</span></li>
        </ol>
      </div>
    </div>
  )
};

export default countryCard;