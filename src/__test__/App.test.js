import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../Redux/configureStore';
import App from '../App';

describe('App page is working fine', () => {
  test('renders App', () => {
    const tree = render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
