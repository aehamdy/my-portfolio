import { aboutMeList } from "../data/personalInfo";
import DetailPanel from "./DetailPanel";

function AboutMeList() {
  return (
    <div>
      <ul>
        {aboutMeList.map((item, i) => {
          const key = Object.keys(item)[0];
          const value = item[key];

          return;
        })}
      </ul>
    </div>
  );
}

export default AboutMeList;
