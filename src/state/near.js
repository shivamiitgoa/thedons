/* eslint-disable */
import { minterConfig } from "../config";
import * as nearAPI from 'near-api-js';
import { getWallet, getContract, getPrice } from '../utils/near-utils';
import { KeyPairEd25519 } from 'near-api-js/lib/utils';

export const {
  networkId,
  nodeUrl,
  walletUrl,
  GAS,
  contractName,
  contractMethods,
} = minterConfig;

export const {
  utils: {
    format: { formatNearAmount, parseNearAmount },
  },
} = nearAPI;

const linkmatcher =
  /https:\/\/wallet.near.org\/linkdrop\/[^/]+\/(?<key>.+)\?redirectUrl=/;

function getPublicKey(link) {
  const m = link.match(linkmatcher).groups.key;
  return KeyPairEd25519.fromString(m).getPublicKey();
}

export const initNear =
  () =>
  async ({ update, getState }) => {
    try {
      const { near, wallet } = await getWallet();

      const price = await getPrice(near);

      wallet.signIn = (successUrl) => {
        wallet.requestSignIn({
          successUrl,
          contractId: contractName,
        });
      };

      const signOut = wallet.signOut;
      wallet.signOut = () => {
        signOut.call(wallet);
        update('wallet.signedIn', false);
        update('', { account: null });
        localStorage.removeItem('undefined_wallet_auth_key');
        wallet.signedIn = wallet.isSignedIn();
        new nearAPI.keyStores.BrowserLocalStorageKeyStore().clear();
      };

      // Check if network if different, if so, logout
      if (wallet.signIn) {
        if (wallet?._authData?.accountId) {
          const walletNetwork = wallet._authData.accountId.endsWith('.testnet')
            ? 'testnet'
            : 'mainnet';
          const currentNetwork = near.config.networkId;
          if (walletNetwork != currentNetwork) {
            wallet.signOut();
          }
        } else {
          wallet.signOut();
        }
      }

      wallet.signedIn = wallet.isSignedIn();

      let account;
      if (wallet.signedIn) {
        account = wallet.account();
        const contract = getContract(account, contractMethods);

        wallet.balance = formatNearAmount(
          (await wallet.account().getAccountBalance()).available,
          2,
        );

        await update('', { wallet, account, contract, price, near });

        const [
          tokensLeft,
          nftTotalSupply,
          { base_uri: urlIpfs },
        ] = await Promise.all([
          contract.tokens_left(),
          contract.nft_total_supply(),
          contract.nft_tokens_for_owner({
            account_id: account.accountId,
          }),
          contract.nft_metadata(),
        ]);

        // if all tokens buy soldOut will be true
        const soldOut = tokensLeft === 0;
        const state = getState();
        const app = {
          ...state.app,
          urlIpfs,
          soldOut,
          tokensLeft,
        };

        await update('', { app });

        // Debugging start
        console.log('tokens_left:', tokensLeft);
        console.log('nft_total_supply', nftTotalSupply);
        console.log('state:', getState());
        // Debugging end

        return;
      }

      await update('', { near, wallet, account, price });
      console.log('state:', getState());
    } catch (e) {
      console.log('error:', e);
    }
  };
