import { Button } from "./ui/button";

interface HeaderProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonIcon: React.ReactNode;
}

const Header = ({ title, subtitle, buttonText, buttonIcon }: HeaderProps) => {
  return (
    <div className="w-full">
      <div className="flex w-full flex-col items-start justify-end">
        <span className="text-primary">{title}</span>
        <div className="flex w-full items-end justify-between">
          <h2 className="text-xl font-semibold">{subtitle}</h2>
          <Button>
            {buttonIcon}
            {buttonText}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
