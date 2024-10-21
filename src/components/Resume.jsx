import History from "./History";
import Quotes from "./Quotes";

function Resume() {
  return (
    <section
      id="resume"
      className="py-main-section-padding bg-section-light dark:bg-section-dark rounded-main-section"
    >
      <History />
      <Quotes />
    </section>
  );
}

export default Resume;
