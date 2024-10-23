import MiniProfile from "./MiniProfile";
import Navbar from "./Navbar";

function Header() {
  const header = document.querySelector("header");
  //get the current height of Header element
  const headerHeight = header.offsetHeight;

  // Set the header height as a CSS variable on the document root to use it in index.css
  document.documentElement.style.setProperty(
    "--header-height",
    `${headerHeight}px`
  );

  return (
    <header className="sticky top-0 w-full md:absolute md:left-3 md:top-10 z-10 md:flex md:flex-col md:gap-3 text-dark-gray dark:text-white-90 bg-section-light dark:bg-section-dark md:bg-transparent md:dark:bg-transparent md:rounded-lg md:overflow-hidden">
      <MiniProfile />
      <Navbar />
    </header>
  );
}

export default Header;
