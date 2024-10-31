import { moonIcon, sunIcon } from "../data/icons";
import { useState, useEffect } from "react";

function ThemeSwitcher() {
  const [isDark, setIsDark] = useState(true);
  const localStorageKey = "AETheme";

  const updateFavicon = (isDark) => {
    // Update all favicon links
    document.querySelectorAll("link[rel='icon']").forEach((favicon) => {
      favicon.href = isDark ? "/favicon-dark.ico" : "/favicon-light.ico";
    });
  };

  const changeTheme = () => {
    setIsDark((prevValue) => {
      const newIsDark = !prevValue;

      const bodyElement = document.body;
      if (newIsDark) {
        bodyElement.classList.add("dark");
        localStorage.setItem(localStorageKey, "dark");
      } else {
        bodyElement.classList.remove("dark");
        localStorage.setItem(localStorageKey, "light");
      }

      // Update the favicon based on the new theme
      updateFavicon(newIsDark);

      return newIsDark;
    });
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem(localStorageKey);
    const isSavedDark = savedTheme !== "light";
    document.body.classList.toggle("dark", isSavedDark);
    setIsDark(isSavedDark);

    // Set favicon based on saved theme preference
    updateFavicon(isSavedDark);
  }, []);

  return (
    <div
      onClick={changeTheme}
      className="text-2xl text-medium-gray dark:text-white-85 hover:text-accent duration-short cursor-pointer"
    >
      {isDark ? sunIcon : moonIcon}
    </div>
  );
}

export default ThemeSwitcher;
