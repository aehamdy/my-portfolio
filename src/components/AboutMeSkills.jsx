import { aboutMeSkills } from "../data/aboutMeSkills";
import SkillsIcon from "./SkillsIcon";

function AboutMeSkills() {
  return (
    <div className="flex flex-col items-start gap-3">
      <p className="text-dark-gray dark:text-white-90 duration-short">Skills</p>
      <ul className="flex flex-wrap gap-3">
        {aboutMeSkills.map((skill, i) => (
          <SkillsIcon key={i} skill={skill} />
        ))}
      </ul>
    </div>
  );
}

export default AboutMeSkills;
