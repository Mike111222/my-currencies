import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fetchCoins, searchCoins } from '../Redux/coin/coinSlice';
import { setCoinDetail } from '../Redux/detail/detailSlice';

const CoinsList = () => {
  const dispatch = useDispatch();
  const { coins, loading, error } = useSelector((state) => state.coins);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    dispatch(fetchCoins());
  }, [dispatch]);

  const handleCoinClick = (coin) => {
    dispatch(setCoinDetail(coin));
  };

  const handleSearch = () => {
    dispatch(searchCoins(searchQuery));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        Error:
        {' '}
        {error}
      </div>
    );
  }

  return (
    <div>
      <h2>Coins</h2>
      <div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="button" onClick={handleSearch}>
          Search
        </button>
      </div>
      {coins.map((coin) => (
        <div key={coin.id}>
          <NavLink to="/detail" onClick={() => handleCoinClick(coin)}>
            <h3>{coin.name}</h3>
            <p>
              Symbol:
              {' '}
              {coin.symbol}
            </p>
            <p>
              Price:
              {' '}
              {coin.priceUsd}
            </p>
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default CoinsList;
