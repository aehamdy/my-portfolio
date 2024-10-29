import { personalInfo } from "../data/personalInfo";
import AboutMeList from "./AboutMeList";
import AboutMeSkills from "./AboutMeSkills";
import SectionTitle from "./SectionTitle";
import SeparatorToRight from "./SeparatorToRight";

function AboutMe() {
  return (
    <article className="flex flex-col">
      <SectionTitle title="about me" />
      <div className="mt-horizontal-separator-mt">
        <SeparatorToRight />
      </div>
      <div className="flex flex-col gap-4 mt-6 px-section-padding">
        <div className="flex flex-col text-start dark:text-white-55 text-medium-gray">
          <strong>
            Hello! I’m{" "}
            {`${personalInfo.firstName + " " + personalInfo.middleName}`}.
          </strong>
          <p>
            Back-end & Frond-end developer from UK, London. I have rich
            experience in wordpress, also I am good at Magento. I love to talk
            with you about our unique.
          </p>
        </div>
        <div className="flex flex-col md:grid md:grid-cols-2 md:justify-between gap-5">
          <AboutMeList />
          <AboutMeSkills />
        </div>
      </div>
    </article>
  );
}

export default AboutMe;
