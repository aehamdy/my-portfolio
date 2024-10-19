import MiniProfile from "./MiniProfile";
import Navbar from "./Navbar";

function Header() {
  return (
    <header className="bg-section-light dark:bg-section-dark">
      <MiniProfile />
      <Navbar />
    </header>
  );
}

export default Header;
