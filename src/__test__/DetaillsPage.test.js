import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../Redux/configureStore';
import DetailsPage from '../Components/HomePage';

describe('Render components', () => {
  test('render HomePage', () => {
    const tree = renderer
      .create(<Router><Provider store={store}><DetailsPage /></Provider></Router>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
