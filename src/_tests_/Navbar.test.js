import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import Navbar from '../components/Navbar';
import store from '../Redux/store';
import '@testing-library/jest-dom/extend-expect';

describe('Render Navbar', () => {
  test('Renders correctly', () => {
    const tree = render(
      <Provider store={store}>
        <Router>
          <Navbar />
        </Router>
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
