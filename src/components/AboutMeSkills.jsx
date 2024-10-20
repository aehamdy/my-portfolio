import { aboutMeSkills } from "../data/aboutMeSkills";

function AboutMeSkills() {
  return (
    <div className="flex flex-col items-start gap-3">
      <p>Skills</p>
      <ul className="flex flex-wrap gap-3">
        {aboutMeSkills.map((skill, i) => (
          <li key={i} className="group flex flex-col items-center">
            <span className="p-1 text-3xl text-accent bg-transparent-bg rounded-lg">
              {skill.icon}
            </span>
            <span className="mt-1 py-[2px] px-[4px] text-sm text-white-85 bg-body-dark rounded-md -translate-y-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-short ease-in-out">
              {skill.value}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AboutMeSkills;
