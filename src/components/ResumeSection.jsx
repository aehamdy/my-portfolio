/* eslint-disable react/prop-types */
import CvButtons from "./CvButtons";
import History from "./History";
import Quotes from "./Quotes";
import SectionTitle from "./SectionTitle";
import SeparatorToRight from "./SeparatorToRight";

function ResumeSection({ openCvModal, downloadCv }) {
  return (
    <section
      id="resume"
      className="py-main-section-padding bg-section-light dark:bg-section-dark rounded-main-section duration-short"
    >
      <SectionTitle title="resume" />
      <div className="mt-horizontal-separator-mt">
        <SeparatorToRight />
      </div>
      <CvButtons openCvModal={openCvModal} downloadCv={downloadCv} />
      <History />
      <Quotes />
    </section>
  );
}

export default ResumeSection;
