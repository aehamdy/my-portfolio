import { FaBriefcase } from "react-icons/fa";
import SpecialHeading from "./SpecialHeading";
import { experiences } from "../data/experiences";

const icon = <FaBriefcase />;

function Experience() {
  return (
    <article className="mt-[30px] px-section-padding">
      <SpecialHeading heading="experience" icon={icon} />
      <div className="border-s border-[rgba(197,202,213,.15)]">
        <div className="">
          {experiences.map((item, i) => (
            <div
              key={i}
              className={`relative flex flex-col items-start gap-3 mt-8 pb-4 ps-4 ${
                i !== experiences.length - 1 &&
                "before:absolute before:w-full before:h-[1px] before:start-0 before:bottom-0 before:bg-custom-gradient-to-r"
              } after:absolute after:w-2.5 after:h-2.5 after:rounded-full after:bg-accent after:start-0 after:translate-x-[-50%]`}
            >
              <span
                className={`w-fit px-[3px] text-xs ${
                  item.dateTo.toLowerCase() === "present"
                    ? "text-accent border-accent"
                    : "text-[#666666] border-[#666666]"
                } border rounded-md`}
              >{`${item.dateFrom} - ${item.dateTo}`}</span>

              <h4 className="font-semibold text-dark-gray dark:text-white-90 duration-short">
                {item.heading}
              </h4>

              <ul className="">
                {item.content.map((item, i) => (
                  <li
                    key={i}
                    className="text-start mt-3 text-sm text-dark-gray dark:text-white-55 duration-short"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}

export default Experience;
