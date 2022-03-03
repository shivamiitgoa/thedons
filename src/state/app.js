import { StateUtils } from '../utils/state-utils';
import { initNear } from './near';

const initialState = {
  app: {
    soldOut: false,
    oneCount: 1,
    manyCount: 5,
    revealDragons: JSON.parse(localStorage.getItem('revealDragons')) || {},
    misfitsArray: [],
    linkDropArray: [],
    urlIpfs: '',
    tokensLeft: undefined,
  },
  near: {
    initialized: false,
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
