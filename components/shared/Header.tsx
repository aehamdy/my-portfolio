import Icon from "./Icon";
import SideMenuButton from "./SideMenuButton";

function Header() {
  return (
    <header className="fixed top-0 w-full backdrop-blur-xs z-50">
      <div className="flex justify-between items-center py-3 px-7">
        <div className="">Contact</div>

        <SideMenuButton />
      </div>
    </header>
  );
}

export default Header;
