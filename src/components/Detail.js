import React from 'react';
import { useSelector } from 'react-redux';

const Detail = () => {
  const coinDetail = useSelector((state) => state.detail.coinDetail);
  return (
    <div className="coinDetail">
      <h2 className="whiteColor detailHeading">Coin Detail</h2>
      <h3 className="whiteColor">{coinDetail.name}</h3>
      <p className="whiteColor bg-dark">
        Symbol:
        {' '}
        {coinDetail.symbol}
      </p>
      <p className="whiteColor">
        Price:
        {' '}
        {typeof coinDetail.priceUsd === 'number' ? coinDetail.priceUsd.toFixed(2) : parseFloat(coinDetail.priceUsd).toFixed(2)}
      </p>
      <p className="whiteColor bg-dark">
        Rank:
        {' '}
        {coinDetail.rank}
      </p>
      <p className="whiteColor">
        Market Cap:
        {' '}
        {coinDetail.marketCapUsd}
      </p>
      <p className="whiteColor bg-dark">
        Volume:
        {' '}
        {coinDetail.volumeUsd24Hr}
      </p>
    </div>
  );
};

export default Detail;
