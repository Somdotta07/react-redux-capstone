import '@testing-library/jest-dom/extend-expect';
import fetchingData from '../Mock/fetchCountries';

describe('test fetching data', () => {
  it('test fetching country name', async () => {
    await fetchingData().then((data) => expect(data.data[0].name).toBe('Afganistan'));
  });
  it('test fetching country code', async () => {
    await fetchingData().then((data) => expect(data.data[1].code).toBe('ZM'));
  });

  it('test fetching cases recovered', async () => {
    await fetchingData().then((data) => expect(data.data[1].latest_data.recovered).toEqual(204553));
  });
});
