import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import arrowRight from '../arrowRight.svg';
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

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  if (loading) {
    return <div className="whiteColor loading">Loading...</div>;
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
      <div><arrowRightCircle /></div>
      <div className="searchContainer">
        <h2 className="whiteColor">Search Crypto Here</h2>
        <input
          className="searchBar"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Search by name"
        />
        <button className="searchBtn" type="button" onClick={handleSearch}>
          Search
        </button>
      </div>
      <div className="coinsList">
        {coins.map((coin) => (
          <div key={coin.id} className="coinCard">
            <NavLink to="/detail" onClick={() => handleCoinClick(coin)}>
              <div className="rightArrow">
                <h2>
                  {coin.name}
                </h2>
                <img className="rightArrowImg" src={arrowRight} alt="right arrow" />
              </div>
              <p className="text">
                Symbol:
                {' '}
                {coin.symbol}
              </p>
              <p className="text">
                Price:
                {' '}
                {typeof coin.priceUsd === 'number' ? coin.priceUsd.toFixed(2) : parseFloat(coin.priceUsd).toFixed(2)}
              </p>
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoinsList;
