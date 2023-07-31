import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { clearCoinDetail } from '../Redux/detail/detailSlice';

const Detail = () => {
  const dispatch = useDispatch();
  const coinDetail = useSelector((state) => state.detail.coinDetail);

  const handleGoBack = () => {
    dispatch(clearCoinDetail());
  };

  if (!coinDetail) {
    return <div>No coin selected.</div>;
  }

  return (
    <div>
      <h2>Coin Detail</h2>
      <NavLink to="/" onClick={handleGoBack}>
        <button type="button">Go Back</button>
      </NavLink>
      <h3>{coinDetail.name}</h3>
      <p>
        Symbol:
        {' '}
        {coinDetail.symbol}
      </p>
      <p>
        Price:
        {' '}
        {coinDetail.priceUsd}
      </p>
      <p>
        Rank:
        {' '}
        {coinDetail.rank}
      </p>
      <p>
        Market Cap:
        {' '}
        {coinDetail.marketCapUsd}
      </p>
      <p>
        Volume:
        {' '}
        {coinDetail.volumeUsd24Hr}
      </p>
      {/* Add other properties you want to display */}
    </div>
  );
};

export default Detail;
