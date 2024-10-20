import HireAvailability from "./HireAvailability";
import MyName from "./MyName";
import ThemeSwitcher from "./ThemeSwitcher";
import TypeWriter from "./TypeWriter";

function MiniProfile() {
  return (
    <section className="flex justify-between items-center py-2 md:py-5 px-4 md:px-2 bg-section-light dark:bg-section-dark md:rounded-lg duration-short">
      <div className="flex flex-col items-start w-1/2 md:hidden">
        <MyName textStyle="text-sm font-medium text-dark-gray dark:text-white-90" />
        <div className="h-[15px]">
          <TypeWriter textSize="xs" />
        </div>
      </div>
      <div className="flex md:flex-col items-center gap-4">
        <div className="">
          <HireAvailability />
        </div>
        <ThemeSwitcher />
      </div>
    </section>
  );
}

export default MiniProfile;
