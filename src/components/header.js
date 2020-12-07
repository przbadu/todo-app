import IconSun from "./../images/icon-sun.svg";
import IconMoon from "./../images/icon-moon.svg";

export default function header({ theme, toggleTheme }) {
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
}
