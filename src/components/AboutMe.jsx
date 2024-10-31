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
            <span className="text-accent">Hello!</span> I’m{" "}
            {`${personalInfo.firstName}`}.
          </strong>
          <p>{personalInfo.brief}</p>
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
