import { FC, HTMLAttributes } from "react";
import ImageDiscordLogo from "../assets/Discord-Logo-Black.png";
import TwitterLogo from "../assets/twitter.png";

const PoweredBy = () => {
  return (
    <>
      <div className="text-black flex justify-center items-center flex-col text-xs ml-2">
        <div className="flex justify-center items-center">
          <a
            href="https://twitter.com/TheDonsProject"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="twitter"
            className="flex justify-center"
          >
            <img src={TwitterLogo} alt="" className="h-5" />
          </a>
          <span className="mr-1"> Join the Dons </span>
          <a
            href="https://discord.gg/rhrgEBYJrk"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="discord"
            className="flex justify-center"
          ><img src={ImageDiscordLogo} alt="" className="h-5" /></a>
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
