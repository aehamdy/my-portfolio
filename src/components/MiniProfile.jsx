import HireAvailability from "./HireAvailability";
import MyName from "./MyName";
import TypeWriter from "./TypeWriter";

function MiniProfile() {
  return (
    <section className="flex justify-between">
      <div>
        <MyName />
        <TypeWriter />
      </div>
      <div>
        <HireAvailability />
      </div>
    </section>
  );
}

export default MiniProfile;
