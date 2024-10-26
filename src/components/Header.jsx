/* eslint-disable react/prop-types */
import { useEffect } from "react";
import MiniProfile from "./MiniProfile";
import Navbar from "./Navbar";

function Header({ onSectionChange }) {
  useEffect(() => {
    const header = document.querySelector("header");
    //get the current height of Header element
    const headerHeight = header.offsetHeight;

    // Set the header height as a CSS variable on the document root to use it in index.css
    document.documentElement.style.setProperty(
      "--header-height",
      `${headerHeight}px`
    );
  }, []);

  return (
    <header className="md:flex md:flex-col gap-2 sticky md:fixed top-0 md:top-[50px] md:start-4 lg:start-[1%] z-10 md:w-fit">
      <MiniProfile />
      <Navbar onSectionChange={onSectionChange} />
    </header>
  );
}

export default Header;
