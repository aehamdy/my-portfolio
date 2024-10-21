import Education from "./Education";
import Experience from "./Experience";
import SectionTitle from "./SectionTitle";

function History() {
  return (
    <section>
      <SectionTitle title="resume" />
      <Experience />
      <Education />
    </section>
  );
}

export default History;
