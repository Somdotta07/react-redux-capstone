import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getData } from '../Redux/home/home';

const HomePage = () => {
  const dispatch = useDispatch();
  const countryLists = useSelector((state) => state.covidReducer);
  useEffect(() => {
    if (countryLists.length === 0) {
      dispatch(getData());
    }
  }, []);

  const covidCases = countryLists.map((cases) => (
    <div className="country-name" id="country-n" key={cases.code}>
      <div className="country-c">
        <Link className="country-d" to={`/${cases.code}`}>
          {cases.name}
        </Link>
      </div>
      <div className="recovered">
        <div>
          Recovered:&nbsp;
          {cases.latest_data.recovered}
        </div>
      </div>
    </div>
  ));

  const searchCountry = () => {
    let inputText = '';
    const userInput = document.getElementById('input-country');
    const filterCountry = userInput.value.toUpperCase();
    const countryDetails = document.getElementsByClassName('country-name');
    [...countryDetails].forEach((country) => {
      const temp = country;
      inputText = temp.textContent || temp.innerText;
      if (inputText.toUpperCase().indexOf(filterCountry) > -1) {
        temp.style.display = '';
      } else {
        temp.style.display = 'none';
      }
    });
  };

  return (
    <div className="main-c">
      <div className="country-heading">
        <h2 className="line-1 anim-typewriter">Active Corona Cases </h2>
      </div>

      <input className="search" type="text" id="input-country" placeholder="Country name.." onKeyDown={searchCountry} />

      <div className="countries-con">
        {covidCases}
      </div>
    </div>

  );
};

export default HomePage;
