import { useSelector } from 'react-redux';

export default function DetailsPage() {
  const detailsList = useSelector((state) => state.covidReducer);
  let country;
  let population;
  let confirmed;
  let critical;
  let deaths;
  let updates;
  let calculated;
  let deathRate;
  let recoveryRate;
  let ratio;

  const fetchInfo = detailsList.map((cases) => {
    if (cases.code === window.location.pathname.slice(1)) {
      country = cases.name;
      updates = cases.updated_at;
      population = cases.population;
      confirmed = cases.latest_data.confirmed;
      critical = cases.latest_data.critical;
      deaths = cases.latest_data.deaths;
      calculated = cases.latest_data.calculated.cases_per_million_population;
      deathRate = cases.latest_data.calculated.death_rate;
      recoveryRate = cases.latest_data.calculated.death_rate;
      ratio = cases.latest_data.calculated.recovered_vs_death_ratio;
    }
    return 'Data not found';
  });

  return (
    { fetchInfo },
      <div className="main-c">
        <div className="details-country" />
        <div className="name">
          <h2>{country}</h2>
        </div>
        <div>
          <span className="updated-data">
            <span className="title">Statistics:</span>
          </span>
          <div className="data">
            <span>Updated at:</span>
            <span>{updates}</span>
          </div>
          <div className="data">
            <span>Population:</span>
            <span>{population}</span>
          </div>
          <div>
            <span className="title">Latest Data:</span>
            <div className="data">
              <span>Deaths:</span>
              <span>{deaths}</span>
            </div>
            <div className="data">
              <span>Confirmed Cases:</span>
              <span>{confirmed}</span>
            </div>
            <div className="data">
              <span>Critical:</span>
              <span>{critical}</span>
            </div>
          </div>
          <div>
            <span className="title">Calculated:</span>
            <div className="data">
              <span>Death_Rate:</span>
              <span>{deathRate}</span>
            </div>
            <div className="data">
              <span>Recovery_Rate:</span>
              <span>{recoveryRate}</span>
            </div>
            <div className="data">
              <span>Recovered_vs_death_ratio:</span>
              <span>{ratio}</span>
            </div>
            <div className="data">
              <span>Cases_per_million_population:</span>
              <span>{calculated}</span>
            </div>
          </div>
        </div>
      </div>
  );
}
