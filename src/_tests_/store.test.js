import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import CoinList from '../components/CoinsList';

const mockStore = configureStore([thunk]);

describe('CoinList', () => {
  it('should render the coins data', async () => {
    const store = mockStore({
      coins: {
        coins: {
          data: [
            {
              id: '1', name: 'Coin 1', symbol: 'C1', priceUsd: 10.0,
            },
            {
              id: '2', name: 'Coin 2', symbol: 'C2', priceUsd: 20.0,
            },
          ],
        },
        loading: false,
        error: null,
      },
    });

    render(
      <Provider store={store}>
        <Router>
          <CoinList />
        </Router>
      </Provider>,
    );

    // Assert that the coins data is rendered correctly
    expect(screen.getByText('Coin 1')).toBeInTheDocument();
    expect(screen.getByText('Coin 2')).toBeInTheDocument();
  });
});
