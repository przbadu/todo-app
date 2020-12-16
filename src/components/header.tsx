import IconSun from "./../images/icon-sun.svg";
import IconMoon from "./../images/icon-moon.svg";

interface HeaderProps {
  theme: string;
  toggleTheme: () => void;
}

// TODO: theme should be enum 'light', 'dark'
const Header = ({ theme, toggleTheme }: HeaderProps): JSX.Element => {
  return (
    <div className="header">
      <h1>Todo</h1>
      <img
        src={theme === "light" ? IconMoon : IconSun}
        alt="light"
        width="32"
        height="32"
        className="light-icon"
        onClick={toggleTheme}
      />
    </div>
  );
};

export default Header;
