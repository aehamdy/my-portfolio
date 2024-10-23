import { useEffect } from "react";
import MiniProfile from "./MiniProfile";
import Navbar from "./Navbar";

// function Header() {
//   useEffect(() => {
//     const header = document.querySelector("header");
//     //get the current height of Header element
//     const headerHeight = header.offsetHeight;

//     // Set the header height as a CSS variable on the document root to use it in index.css
//     document.documentElement.style.setProperty(
//       "--header-height",
//       `${headerHeight}px`
//     );
//   }, []);

//   return (
//     <header className="sticky z-10 w-full md:w-3/5 lg:w-fit md:h-fit top-0 md:top-10 start-0 md:start-3 md:flex md:flex-col md:gap-3 text-dark-gray dark:text-white-90 bg-section-light dark:bg-section-dark md:bg-transparent md:dark:bg-transparent md:rounded-lg md:overflow-hidden">
//       <MiniProfile />
//       <Navbar />
//     </header>
//   );
// }

// export default Header;

function Header() {
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
    <header className="sticky lg:absolute z-10 w-full lg:w-fit md:w-3/5 md:h-fit top-0 md:top-10 start-0 md:start-3 md:flex md:flex-col md:gap-3 text-dark-gray dark:text-white-90 bg-section-light dark:bg-section-dark md:bg-transparent md:dark:bg-transparent md:rounded-lg md:overflow-hidden">
      <MiniProfile />
      <Navbar />
    </header>
  );
}

export default Header;
