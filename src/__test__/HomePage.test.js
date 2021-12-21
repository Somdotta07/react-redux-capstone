import React from 'react';
import renderer from 'react-test-renderer';
// import { render, screen, waitFor } from '@testing-library/react';
// import '@testing-library/jest-dom';
// import userEvent from '@testing-library/user-event';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../Redux/configureStore';
import HomePage from '../Components/HomePage';

const server = setupServer(
  rest.get('https://corona-api.com/countries', (req, res, ctx) => res(ctx.json(
    {
      data: [
        {
          code: 'AF',
          name: 'Afganistan',
          latest_data: {
            recovered: 123527,
          },
        },
        {
          code: 'ZM',
          name: 'Zambia',
          latest_data: {
            recovered: 123527,
          },
        },
      ],
    },
  ))),
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Render components', () => {
  it('render HomePage', () => {
    const tree = renderer
      .create(<Router><Provider store={store}><HomePage /></Provider></Router>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  // it('Shows countries with it recovered cases', async () => {
  //   render(
  //     <Router><Provider store={store}><HomePage /></Provider></Router>,
  //   );
  //   const country = await screen.findByText('Afganistan');
  //   expect(country).toBeVisible();
  // });
  // it('When user clicks on a particular country it shows details', async () => {
  //   render(
  //     <Router><Provider store={store}><HomePage /></Provider></Router>,
  //   );
  //   await waitFor(() => userEvent.click(screen.getByText('Afganistan')));
  //   await waitFor(() => expect(window.location.pathname).toEqual('/AF'));
  // });
});
