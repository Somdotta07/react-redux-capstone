const ADD_CASES = 'covid/home/ADD_CASES';

const initialState = [];

export const addCovidCases = (payload) => ({
  type: ADD_CASES,
  payload,
});

export const getData = () => (dispatch) => {
  fetch('https://corona-api.com/countries')
    .then((res) => res.json())
    .then((data) => data.data.forEach((cases) => {
      dispatch(addCovidCases(cases));
    }));
};
const covidReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CASES:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default covidReducer;
