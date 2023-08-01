import detailReducer, { setCoinDetail, clearCoinDetail } from '../Redux/detail/detailSlice';

describe('Detail Slice', () => {
  const initialState = {
    coinDetail: null,
  };

  it('should set coinDetail', () => {
    const newState = detailReducer(initialState, setCoinDetail('coin123'));
    expect(newState.coinDetail).toEqual('coin123');
  });

  it('should clear coinDetail', () => {
    const currentState = {
      coinDetail: 'coin123',
    };
    const newState = detailReducer(currentState, clearCoinDetail());
    expect(newState.coinDetail).toBeNull();
  });
});
