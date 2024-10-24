import History from "./History";
import Quotes from "./Quotes";
import SectionTitle from "./SectionTitle";

function Resume() {
  return (
    <section
      id="resume"
      className="py-main-section-padding bg-section-light dark:bg-section-dark rounded-main-section"
    >
      <SectionTitle title="resume" />
      <History />
      <Quotes />
    </section>
  );
}

export default Resume;
