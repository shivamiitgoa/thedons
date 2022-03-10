import React, { useContext, useEffect } from "react";
import "./App.scss";
import Tilt from "react-parallax-tilt";
import ImageNft from "./assets/2.png";

import { Footer } from "./components/Footer";
import { Button } from "./components/Button";

import useMintNft from "./hooks/useMintNft";
import { appStore, onAppMount } from "./state/app";
import { Header } from "./components/Header";

const App = () => {
  const { dispatch } = useContext(appStore);

  const onMount = () => {
    dispatch(onAppMount());
  };

  useEffect(onMount, []);
  const { state } = useContext(appStore);
  const { wallet } = state;
  const { mintNft } = useMintNft();
  const handleClick = () => {
    if (!wallet || !wallet.signedIn) {
      const successUrl = `${window.location.origin}`;
      wallet.signIn(successUrl);
    } else {
      mintNft(1);
    }
  };
  const handleManyClick = () => {
    if (!wallet || !wallet.signedIn) {
      const successUrl = `${window.location.origin}`;
      wallet.signIn(successUrl);
    } else {
      mintNft(2);
    }
  };
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow flex items-center">
        <div className="container">
          <div className="flex flex-col sm:grid grid-cols-2 gap-4">
            <div className="flex items-center justify-center flex-col order-2 sm:order-1 sm:px-10">
              <div className="mb-5">
                <div className="font-headline text-3xl font-bold mb-3">
                  Mint a Don
                </div>
                <div className="font-headline text-xl">
                  The Dons NFT launching on $NEAR Protocol. Blood makes you
                  related. Loyalty makes you family.
                </div>
              </div>

              <div className="flex space-x-4 w-full">
                <Button onClick={handleClick}>Mint 1 Don</Button>
                <Button onClick={handleManyClick}>Mint 2 Dons</Button>
              </div>
            </div>
            <div className="pb-10 pt-5 sm:p-10 order-1 sm:order-2">
              <Tilt
                perspective={500}
                glareEnable={true}
                glareMaxOpacity={0.45}
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                glareBorderRadius="10px"
              >
                <div className="rounded-lg shadow-2xl">
                  <img className="rounded-lg" src={ImageNft} alt="A Don" />
                </div>
              </Tilt>
            </div>
          </div>
        </div>
      </div>
      <Footer className="flex-shrink-0" />
    </div>
  );
};

export default App;
