import { FC, HTMLAttributes } from "react";
import ImageJunoLabsLogo from "../assets/juno-labs-logo.png";

const PoweredBy = () => {
  return (
    <>
      <div className="text-black flex justify-center items-center flex-col text-xs ml-2">
        <div className="flex justify-center items-center">
          <span className="mr-1">powered by</span>
          <img src={ImageJunoLabsLogo} alt="" className="h-5" />
        </div>
      </div>
    </>
  );
};

export const Footer: FC<HTMLAttributes<HTMLDivElement>> = (props) => {
  return (
    <footer className={props.className}>
      <div className="container py-5">
        <div className="flex justify-center items-center">
          <PoweredBy />
        </div>
      </div>
    </footer>
  );
};
