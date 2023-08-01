import React from 'react';
import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';
import Detail from '../components/Detail';
import '@testing-library/jest-dom/extend-expect';

// Mock the useSelector hook to provide test data
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

describe('Detail component', () => {
  it('renders the component with coin details', () => {
    // Mock the coinDetail data
    const coinDetail = {
      name: 'Bitcoin',
      symbol: 'BTC',
      rank: 1,
      priceUsd: 40000,
      marketCapUsd: 400000000.1245,
      volumeUsd24Hr: 1000000.12,
    };

    // Mock the useSelector hook to return the coinDetail
    useSelector.mockImplementation((selectorFn) => selectorFn({ detail: { coinDetail } }));

    // Render the Detail component
    const { getByText } = render(<Detail />);

    // Assert that the component renders the correct coin details
    expect(getByText('Coin Detail')).toBeInTheDocument();
    expect(getByText('Bitcoin')).toBeInTheDocument();
    expect(getByText('Symbol: BTC')).toBeInTheDocument();
    expect(getByText('Rank: 1')).toBeInTheDocument();
    expect(getByText('Price: 40000.00')).toBeInTheDocument();
    expect(getByText('Market Cap: 400000000.1245')).toBeInTheDocument();
    expect(getByText('Volume: 1000000.12')).toBeInTheDocument();
  });
});
