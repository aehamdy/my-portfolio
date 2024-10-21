import { personalInfo } from "../data/personalInfo";
import AboutMeList from "./AboutMeList";
import AboutMeSkills from "./AboutMeSkills";
import SectionTitle from "./SectionTitle";

function AboutMe() {
  return (
    <article className="flex flex-col gap-7">
      <SectionTitle title="about me" />
      <div className="flex flex-col gap-4 px-section-padding">
        <div className="flex flex-col text-start dark:text-white-55 text-medium-gray">
          <strong>
            Hello! I’m{" "}
            {`${personalInfo.firstName + " " + personalInfo.lastName}`}.
          </strong>
          <p>
            Back-end & Frond-end developer from UK, London. I have rich
            experience in wordpress, also I am good at Magento. I love to talk
            with you about our unique.
          </p>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between gap-5">
          <AboutMeList />
          <AboutMeSkills />
        </div>
      </div>
    </article>
  );
}

export default AboutMe;
