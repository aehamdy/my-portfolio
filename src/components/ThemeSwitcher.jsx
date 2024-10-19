import { useState } from "react";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";

function ThemeSwitcher() {
  const [isDark, setIsDark] = useState(true);

  return (
    <div className="text-2xl hover:text-accent duration-short cursor-pointer">
      {isDark ? <IoSunnyOutline /> : <IoMoonOutline />}
    </div>
  );
}

export default ThemeSwitcher;
