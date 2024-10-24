import { useState, useEffect } from "react";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";

function ThemeSwitcher() {
  const [isDark, setIsDark] = useState(true);

  const changeTheme = () => {
    setIsDark((prevValue) => !prevValue);

    const bodyElement = document.body;
    if (isDark) {
      bodyElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      bodyElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      document.body.classList.remove("dark");
      setIsDark(false);
    } else {
      document.body.classList.add("dark");
      setIsDark(true);
    }
  }, []);

  return (
    <div
      onClick={changeTheme}
      className="text-2xl text-medium-gray dark:text-white-85 hover:text-accent duration-short cursor-pointer"
    >
      {isDark ? <IoSunnyOutline /> : <IoMoonOutline />}
    </div>
  );
}

export default ThemeSwitcher;
