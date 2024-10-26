/* eslint-disable react/prop-types */

function SkillsIcon({ skill }) {
  return (
    <li className="group relative flex flex-col items-center">
      <span className="p-1 text-3xl text-accent bg-transparent-bg rounded-lg">
        {skill.icon}
      </span>
      <span className="absolute z-10 mt-1 py-[2px] px-[4px] text-sm text-white-85 bg-body-dark rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-9 transition-all duration-short ease-in-out -translate-y-2">
        {skill.value}
      </span>
    </li>
  );
}

export default SkillsIcon;
