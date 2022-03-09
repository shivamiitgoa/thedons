import { Button } from "./Button";

export const Header = () => {
  return (
    <header className="fixed inset-x-0 top-0 p-5">
      <div className="flex justify-end">
        <Button onClick={() => {}}>Connect wallet</Button>
      </div>
    </header>
  );
};
