/* eslint-disable react-hooks/rules-of-hooks */
import { useContext } from 'react';
import { appStore } from '../state/app';
import { GAS } from '../state/near';

const useMintNft = () => {
  const { state } = useContext(appStore);
  const { contract, price } = state;

  const mintNft = async (count = 1) => {
    const callbackUrl = `${window.location.origin}`;
    if (count === 1) {
      contract.nft_mint_one({
        args: {},
        gas: '50000000000000',
        amount: price.oneTokenCost,
        callbackUrl,
      });
    } else {
      contract.nft_mint_many({
        args: { num: count },
        gas: GAS,
        amount: price.fiveTokenCost,
        callbackUrl,
      });
    }
  };

  return { mintNft };
};

export default useMintNft;