import MiniProfile from "./MiniProfile";
import Navbar from "./Navbar";

function Header() {
  return (
    <header className="md:absolute md:left-3 md:top-10 md:z-10 md:flex md:flex-col md:gap-3 text-dark-gray dark:text-white-90 bg-section-light dark:bg-section-dark md:bg-transparent md:dark:bg-transparent md:rounded-lg md:overflow-hidden">
      <MiniProfile />
      <Navbar />
    </header>
  );
}

export default Header;
