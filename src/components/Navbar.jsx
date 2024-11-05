/* eslint-disable react/prop-types */
import navItems from "../data/navbar";
import NavItem from "./NavItem";


function Navbar({ onSectionChange }) {
  return (
    <nav
      className={`relative text-dark-gray dark:text-white-90 bg-section-light dark:bg-section-dark before:absolute before:start-0 before:top-0 before:w-full before:h-[1px] before:bg-custom-gradient-to-r md:before:hidden md:rounded-b-xl duration-short`}
    >
      <ul className="flex justify-between md:flex-col md:gap-1.5 md:py-3 mx-auto">
        {navItems.map((item, i) => (
          <NavItem key={i} index={i} item={item} onSectionChange={onSectionChange} navItems={navItems} />
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
