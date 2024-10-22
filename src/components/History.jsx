import Education from "./Education";
import Experience from "./Experience";

function History() {
  return (
    <section>
      <div className="relative flex flex-col md:flex-row h-fit">
        <div className="w-full md:w-1/2">
          <Experience />
        </div>

        <span className="absolute hidden md:block w-[1px] h-full top-0 start-[50%] translate-x-[-50%] bg-custom-gradient-to-b"></span>

        <div className="w-full md:w-1/2">
          <Education />
        </div>
      </div>
    </section>
  );
}

export default History;
