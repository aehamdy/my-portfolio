/* eslint-disable react/prop-types */
import { FaChevronRight } from "react-icons/fa";

function PlanCard({ key, plan }) {
  return (
    <div
      className={`relative flex flex-col items-center gap-6 w-full sm:w-1/2 mt-10 px-8 ${
        key >= 1 &&
        "sm:before:absolute before:top-0 before:start-0 before:w-[1px] before:h-full before:bg-custom-gradient-to-b"
      }`}
    >
      <div className="flex flex-col gap-2">
        <span className="p-3 text-3xl text-accent border border-accent rounded-full">
          {plan.icon}
        </span>
        <span className="font-semibold text-dark-gray dark:text-white-90 capitalize duration-short">
          {plan.type}
        </span>
      </div>
      <div className="relative flex items-center gap-2">
        <span className="absolute -top-2 -start-4 font-[400] text-dark-gray dark:text-white-90 duration-short">
          $
        </span>
        <span className="font-semibold text-dark-gray dark:text-white-90 text-4xl duration-short">
          {plan.price}
        </span>
        <span className="self-end text-medium-gray dark:text-white-55 duration-short">
          /hour
        </span>
      </div>
      <ul className="flex flex-col items-center gap-4 pb-4">
        {plan.features.map((feature, i) => (
          <li
            key={i}
            className={`${
              !feature.isIncluded && "line-through"
            } flex items-center gap-4 text-sm text-medium-gray dark:text-white-90 duration-short`}
          >
            {feature.feat}
            {feature.isNew && (
              <span className="py-[2px] px-2 font-light text-xs text-dark-gray dark:text-white-90 bg-new-badge rounded-md duration-short">
                new
              </span>
            )}
          </li>
        ))}
      </ul>
      <span className="w-full h-[1px] bg-custom-gradient-to-r"></span>
      <button
        type="button"
        className="group flex items-center gap-3 font-semibold text-sm uppercase text-dark-gray dark:text-white-90 hover:text-accent cursor-pointer duration-short"
      >
        order now{" "}
        <span className="group-hover:translate-x-1 text-base group-hover:text-accent duration-short">
          <FaChevronRight />
        </span>
      </button>
    </div>
  );
}

export default PlanCard;
