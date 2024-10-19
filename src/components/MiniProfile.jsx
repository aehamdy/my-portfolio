import HireAvailability from "./HireAvailability";
import MyName from "./MyName";
import TypeWriter from "./TypeWriter";

function MiniProfile() {
  return (
    <section className="flex justify-between items-center">
      <div className="flex flex-col items-start w-1/2">
        <MyName textSize="sm" />
        <div className="h-[16px]">
          <TypeWriter textSize="xs" />
        </div>
      </div>
      <div>
        <HireAvailability />
      </div>
    </section>
  );
}

export default MiniProfile;
