import { aboutMeList } from "../data/aboutMeList";
import DetailPanel from "./DetailPanel";

function AboutMeList() {
  return (
    <div>
      <ul>
        {aboutMeList.map((item, i) => {
          const key = Object.keys(item)[0];
          const value = item[key];

          return <DetailPanel key={i} heading={key} content={value} />;
        })}
      </ul>
    </div>
  );
}

export default AboutMeList;
