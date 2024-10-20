import { aboutMeList } from "../data/personalInfo";

function AboutMeList() {
  return (
    <div>
      <ul>
        {aboutMeList.map((item, i) => {
          const key = Object.keys(item)[0];
          const value = item[key];

          return (
            <li key={i} className="flex items-center gap-2">
              <span className="capitalize font-medium text-sm text-dark-gray dark:text-white-90">
                {key}
              </span>
              <strong className="font-medium text-sm text-dark-gray dark:text-white-90">
                . . . .
              </strong>
              <span className="text-base text-medium-gray dark:text-white-55">
                {value}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default AboutMeList;
