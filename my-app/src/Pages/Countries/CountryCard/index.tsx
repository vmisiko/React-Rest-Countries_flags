import './index.scss';

function countryCard(props:{country: any}) {
  return (
    <div id="card" className="country-card">
      <div className="country-card__image">
        <img src={props.country.flags.svg} alt="" />
      </div>
      <div className="country-card__content">
        <h2 className="name">
          {props.country.name}
        </h2>

        <ol className="list">
          <h4> Population: <span>{props.country.population.toLocaleString("en-US")}</span></h4>
          <h4> Region: <span>{props.country.region}</span></h4>
          <h4> Capital: <span>{props.country?.capital}</span></h4>
        </ol>
      </div>
    </div>
  )
};

export default countryCard;