import * as nearAPI from "near-api-js";
import { minterConfig } from "../config";

export const { networkId, nodeUrl, walletUrl, contractName, contractMethods } =
  minterConfig;

export const {
  utils: {
    format: { formatNearAmount, parseNearAmount },
  },
} = nearAPI;

export const formatAccountId = (accountId, len = 16) => {
  if (accountId.length > len) {
    return `${accountId.substr(0, len - 3)}...`;
  }
  return accountId;
};

export const getWallet = async () => {
  const near = await nearAPI.connect({
    networkId,
    nodeUrl,
    walletUrl,
    keyStore: new nearAPI.keyStores.BrowserLocalStorageKeyStore(),
  });
  const wallet = new nearAPI.WalletAccount(near);
  return { near, wallet };
};

export const getContract = (account, methods = contractMethods) => {
  return new nearAPI.Contract(account, contractName, {
    ...methods,
    sender: account.accountId,
  });
};

export const getPrice = async (near) => {
  const contract = await near.loadContract(contractName, {
    ...contractMethods,
  });

  let [fiveTokenCost, tokenStorage, oneTokenCost] = await Promise.all([
    contract.total_cost({ num: 2 }),
    contract.token_storage_cost(),
    contract.cost_per_token({ num: 1 }),
  ]);

  const fiveTokenFormat = formatNearAmount(fiveTokenCost);
  const oneTokenFormat = formatNearAmount(oneTokenCost);
  const tokenStorageFormat = formatNearAmount(tokenStorage);

  const price = {
    oneNFT: oneTokenFormat - tokenStorageFormat,
    manyNFTS: fiveTokenFormat - 2 * tokenStorageFormat,
    tokenStorageFormat,
    fiveTokenCost,
    oneTokenCost,
  };

  return price;
};
