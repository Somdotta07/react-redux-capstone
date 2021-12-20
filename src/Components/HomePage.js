import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addCovidCases } from '../Redux/home/home';

const HomePage = () => {
  const dispatch = useDispatch();
  const covidLists = useSelector((state) => state.covidReducer);

  const getData = () => (dispatch) => {
    fetch('https://corona-api.com/countries')
      .then((res) => res.json())
      .then((data) => data.data.forEach((cases) => {
        dispatch(addCovidCases(cases));
      }));
  };

  useEffect(() => {
    if (!covidLists.length) {
      dispatch(getData());
    }
  }, []);

  const covidCases = covidLists.map((cases) => (
    <div className="country-name" id="country-name" key={cases.code}>
      <div className="country-c">
        <Link className="country-d" to={`/${cases.code}`}>
          {cases.name}
        </Link>
      </div>
      <div className="death-cases">
        Population:&nbsp;
        {cases.population}
      </div>
    </div>
  ));

  const findCountry = () => {
    let textInput = '';
    const dataInput = document.getElementById('country-name');
    const filterData = dataInput.value.toUpperCase();
    const countryName = document.getElementById('country-name');
    [...countryName].forEach((country) => {
      const temp = country;
      textInput = temp.textContent || temp.innerText;
      if (textInput.toUpperCase().indexOf(filterData) > -1) {
        temp.style.display = '';
      } else {
        temp.style.display = 'none';
      }
    });
  };
  return (
    <>
      <div className="country-name">Active Corona Cases </div>
      <input className="search" type="text" id="country-name" onKeyUp={findCountry} placeholder="Country name.." />
      <div className="countries-con">
        {covidCases}
      </div>
    </>

  );
};

export default HomePage;
