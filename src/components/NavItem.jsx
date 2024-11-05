/* eslint-disable react/prop-types */
import SeparatorCenter from "./SeparatorCenter";
import SeparatorToRight from "./SeparatorToRight";

function NavItem({ index, item, onSectionChange, navItems})  {
    return (
        <li className={`relative w-full`}>
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
        {index !== navItems.length - 1 && (
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
    )
}

export default NavItem;