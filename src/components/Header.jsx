import HireAvailability from "./HireAvailability";
import Navbar from "./Navbar";

function Header() {
  return (
    <header className="bg-section-light dark:bg-section-dark">
      <HireAvailability />
      <Navbar />
    </header>
  );
}

export default Header;
