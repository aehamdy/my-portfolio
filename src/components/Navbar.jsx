/* eslint-disable react/prop-types */
import navItems from "../data/navbar";
import SeparatorCenter from "./SeparatorCenter";
import SeparatorToRight from "./SeparatorToRight";

function Navbar({ onSectionChange }) {
  return (
    <nav
      className={`relative text-dark-gray dark:text-white-90 bg-section-light dark:bg-section-dark before:absolute before:start-0 before:top-0 before:w-full before:h-[1px] before:bg-custom-gradient-to-r md:before:hidden md:rounded-b-xl duration-short`}
    >
      <ul className="flex justify-between md:flex-col md:gap-1.5 md:py-3 mx-auto">
        {navItems.map((item, i) => (
          <li key={i} className={`relative w-full`}>
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
            {i !== navItems.length - 1 && (
              <div>
                <div className="hidden md:block">
                  <SeparatorToRight />
                </div>
                <div className="md:hidden absolute top-0 start-full w-full h-full">
                  <SeparatorCenter />
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
