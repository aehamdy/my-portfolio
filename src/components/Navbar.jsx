import { navItems } from "../data/navbar";

function Navbar() {
  return (
    <nav
      className={`relative text-dark-gray dark:text-white-90 ${`before:absolute before:start-0 before:top-0 before:w-full before:h-[1px] before:bg-custom-gradient-to-r`}`}
    >
      <ul className="flex mx-auto">
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
