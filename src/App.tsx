import "./App.scss";
import Tilt from "react-parallax-tilt";
import ImageNft from "./assets/488.jpeg";

import { Footer } from "./components/Footer";
import { Button } from "./components/Button";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow flex items-center">
        <div className="container">
          <div className="flex flex-col sm:grid grid-cols-2 gap-4">
            <div className="flex items-center justify-center flex-col order-2 sm:order-1 sm:px-10">
              <div className="mb-5">
                <div className="font-headline text-3xl font-bold mb-3">
                  Heading
                </div>
                <div className="font-headline text-xl">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Pariatur, quasi.
                </div>
              </div>

              <div className="flex space-x-4 w-full">
                <Button>Mint 1</Button>
                <Button>Mint 5</Button>
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
                  <img className="rounded-lg" src={ImageNft} />
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
