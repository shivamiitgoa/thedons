import { FC, ReactNode } from "react";
type Props = {
  children: ReactNode;
  onClick: () => void;
};

export const Button: FC<Props> = ({ children, onClick }) => {
  return (
    <button
      className={
        "w-full xs:w-auto text-white uppercase bg-black hover:bg-gray-800 font-black px-8 py-3 mb-6 rounded flex items-center justify-center "
      }
      onClick={onClick}
    >
      {children}
    </button>
  );
};
