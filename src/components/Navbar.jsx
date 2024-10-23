/* eslint-disable react/prop-types */
import { navItems } from "../data/navbar";

function Navbar({ onSectionChange }) {
  return (
    <nav
      className={`relative text-dark-gray dark:text-white-90 bg-section-light dark:bg-section-dark before:absolute before:start-0 before:top-0 before:w-full before:h-[1px] before:bg-custom-gradient-to-r md:before:hidden md:rounded-lg duration-short`}
    >
      <ul className="flex md:flex-col md:gap-1.5 md:py-5 mx-auto">
        {navItems.map((item, i) => (
          <li
            key={i}
            className={`relative w-full ${
              i != 0
                ? `before:absolute before:-left-1 before:top-0 before:h-full before:w-[1px] before:bg-[length:2px_100%] before:bg-custom-gradient-to-b`
                : ""
            }`}
          >
            <a
              href={`#${item.value}`}
              onClick={() => onSectionChange(item.value)}
              className="group flex flex-col items-center gap-2 p-2"
            >
              <span className="text-lg group-hover:text-accent duration-short">
                {item.icon}
              </span>
              <span className="text-xs group-hover:text-accent duration-short">
                {item.value.toUpperCase()}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
