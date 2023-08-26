import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../Redux/store';
import CoinsList from '../components/CoinsList';

describe('Test for the detail page', () => {
  test('Renders correctly', () => {
    const tree = render(
      <Provider store={store}>
        <Router>
          <CoinsList />
        </Router>
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
