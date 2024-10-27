import History from "./History";
import Quotes from "./Quotes";
import SectionTitle from "./SectionTitle";
import SeparatorToRight from "./SeparatorToRight";

function ResumeSection() {
  return (
    <section
      id="resume"
      className="py-main-section-padding bg-section-light dark:bg-section-dark rounded-main-section duration-short"
    >
      <SectionTitle title="resume" />
      <div className="mt-horizontal-separator-mt">
        <SeparatorToRight />
      </div>
      <History />
      <Quotes />
    </section>
  );
}

export default ResumeSection;
