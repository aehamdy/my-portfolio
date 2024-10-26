import SpecialHeading from "./SpecialHeading";
import { education } from "../data/education";
import { educationIcon } from "../data/icons";

const icon = educationIcon;

function Education() {
  return (
    <article className="mt-[30px] px-section-padding">
      <SpecialHeading heading="education" icon={icon} />
      <div className="border-s border-light-gray-197 dark:border-gray-197-15 duration-short">
        <div>
          {education.map((item, i) => (
            <div
              key={i}
              className={`relative flex flex-col items-start gap-3 mt-8 pb-4 ps-4 ${
                i !== education.length - 1 &&
                "before:absolute before:w-full before:h-[1px] before:start-0 before:bottom-0 before:bg-custom-gradient-to-r"
              } after:absolute after:w-2.5 after:h-2.5 after:rounded-full ${
                item.dateTo.toLowerCase() === "present"
                  ? "after:bg-accent"
                  : "after:bg-light-gray-dd after:dark:bg-gray-666"
              } after:start-0 after:translate-x-[-50%] duration-short`}
            >
              <span
                className={`capitalize w-fit px-[3px] text-xs ${
                  item.dateTo.toLowerCase() === "present"
                    ? "text-accent border-accent"
                    : "text-neutral-gray dark:text-gray-666 border-light-gray-dd dark:border-gray-666"
                } border rounded-md duration-short`}
              >{`${item.dateFrom}${item.dateTo}`}</span>

              <div className="flex flex-col items-start text-left">
                <h4 className="font-semibold text-dark-gray dark:text-white-90 duration-short">
                  {item.heading}
                </h4>

                <span className="font-medium text-sm text-light-gray">
                  {item.subheading}
                </span>
              </div>

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

export default Education;
