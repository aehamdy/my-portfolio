import { FaBriefcase } from "react-icons/fa";
import SpecialHeading from "./SpecialHeading";

const icon = <FaBriefcase />;

function Experience() {
  return (
    <article>
      <SpecialHeading heading="experience" icon={icon} />
    </article>
  );
}

export default Experience;
