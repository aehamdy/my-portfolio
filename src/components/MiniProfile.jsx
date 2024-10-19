import HireAvailability from "./HireAvailability";
import MyName from "./MyName";
import ThemeSwitcher from "./ThemeSwitcher";
import TypeWriter from "./TypeWriter";

function MiniProfile() {
  return (
    <section className="flex justify-between items-center py-2 px-4">
      <div className="flex flex-col items-start w-1/2">
        <MyName textSize="sm" />
        <div className="h-[15px]">
          <TypeWriter textSize="xs" />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <HireAvailability />
        <ThemeSwitcher />
      </div>
    </section>
  );
}

export default MiniProfile;
