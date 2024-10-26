/* eslint-disable react/prop-types */
import { codeIcon, designIcon, pageIcon, responsiveIcon } from "../data/icons";
import SeparatorToRight from "./SeparatorToRight";

function ServiceCard({ index, service, myServices }) {
  let icon;

  switch (service.type) {
    case "code":
      icon = codeIcon;
      break;
    case "page":
      icon = pageIcon;
      break;
    case "responsive":
      icon = responsiveIcon;
      break;
    case "design":
      icon = designIcon;
      break;
    default:
      icon = null;
  }

  return (
    <article className="relative w-full md:w-1/2 p-3 text-left">
      <div
        className={`${
          service.type === "design" && "my-3"
        } w-fit text-5xl text-accent`}
      >
        {icon}
      </div>
      <h3 className="my-2 font-semibold text-[17px] text-dark-gray dark:text-white-85">
        {service.heading}
      </h3>
      <p className="md:w-4/5 text-[16px] text-medium-gray dark:text-white-55">
        {service.content}
      </p>
      {index != myServices.length - 1 && (
        <span
          className={`${
            index === 2 ? "md:hidden" : ""
          } absolute bottom-0 start-0 w-full`}
        >
          <SeparatorToRight />
        </span>
      )}
    </article>
  );
}

export default ServiceCard;
