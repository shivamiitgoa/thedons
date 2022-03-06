export const mintStartDate = new Date("2022-02-15T21:00:00.000Z");
export const mintEndDate = new Date("2022-02-16T21:00:00.000Z");

export const dateTimeFormatter = new Intl.DateTimeFormat(undefined, {
  year: "numeric",
  day: "numeric",
  month: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
});

export const minterConfig = {
  networkId: "testnet",
  nodeUrl: "https://rpc.testnet.near.org",
  walletUrl: "https://wallet.testnet.near.org",
  helperUrl: "https://helper.testnet.near.org",
  contractName: "app10.flyingsaucertenk.testnet",
  GAS: "200000000000000",
  DEFAULT_NEW_ACCOUNT_AMOUNT: "0.1",
  contractMethods: {
    changeMethods: ["nft_mint_one", "nft_mint_many", "nft_transfer"],
    viewMethods: [
      "cost_per_token",
      "discount",
      "token_storage_cost",
      "total_cost",
      "nft_supply_for_owner",
      "nft_total_supply",
      "nft_tokens",
      "nft_tokens_for_owner",
      "tokens_left",
      "nft_metadata",
      "get_key_balance",
      "check_key",
    ],
  },
};
