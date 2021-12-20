import { useSelector } from 'react-redux';

export default function DetailsPage() {
  const detailsList = useSelector((state) => state.covidReducer);
  let population;
  let confirmed;
  let critical;
  let deaths;
  let calculated;

  const fetchInfo = detailsList.map((cases) => {
    if (cases.code === window.location.pathname.slice(1)) {
      population = cases.population;
      confirmed = cases.latest_data.confirmed;
      critical = cases.latest_data.critical;
      deaths = cases.latest_data.deaths;
    }
    return 'Data not found';
  });

  return (
    { fetchInfo },
      <div>
        <div>
          <p className="updated data"> Today&apos;s Update</p>
          <div className="data">
            <span>Death:</span>
            <span>{deaths}</span>
          </div>
          <div className="data">
            <span>Population:</span>
            <span>{population}</span>
          </div>
          <div className="data">
            <span>Confirmed Cases:</span>
            <span>{confirmed}</span>
          </div>
          <div className="data">
            <span>Critical:</span>
            <span>{critical}</span>
          </div>
          <div className="data">
            <span>Statistics:</span>
            <span>{calculated}</span>
          </div>
        </div>
      </div>
  );
}
