import { StateUtils } from '../utils/state-utils';
import { initNear } from './near';

// price and sold out, tokens left, all replaced with actual contract data
const initialState = {
  app: {
    soldOut: false,
    tokensLeft: undefined,
  },
  price: {
    oneNFT: 5,
    manyNFTS: 25,
    tokenStorageFormat: 0,
    discountFormat: 0,
  },
};

export const { appStore, AppProvider } = StateUtils(initialState, 'app');

export const onAppMount =
  () =>
  async ({ dispatch }) => {
    dispatch(initNear());
  };
