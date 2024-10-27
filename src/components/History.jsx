import Education from "./Education";
import Experience from "./Experience";
import SeparatorToBottom from "./SeparatorToBottom";

function History() {
  return (
    <section>
      <div className="relative flex flex-col md:flex-row h-fit">
        <div className="w-full md:w-1/2">
          <Experience />
        </div>

        <div className="hidden md:block absolute start-[50%] top-0 w-full h-full">
          <SeparatorToBottom />
        </div>

        <div className="w-full md:w-1/2">
          <Education />
        </div>
      </div>
    </section>
  );
}

export default History;
