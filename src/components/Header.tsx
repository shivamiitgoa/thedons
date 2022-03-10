import React, { useContext, memo } from 'react';
import { Button } from "./Button";
import { appStore } from '../state/app';

export const Header = () => {
  const { state } = useContext(appStore);
  const { wallet, account } = state;
  if (!wallet) {
    console.log("motherfucker");
  }

  return (
    <header className="fixed inset-x-0 top-0 p-5">
      <div className="flex justify-end">
      {account?.accountId ? (
        <Button onClick={() => wallet.signOut()}>Logout</Button>
      ) : (
        <Button onClick={() => wallet.signIn()}>Connect wallet</Button>
      )} 
      </div>
    </header>
  );
};
