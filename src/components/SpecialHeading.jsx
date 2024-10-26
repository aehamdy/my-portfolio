import SeparatorToRight from "./SeparatorToRight";

/* eslint-disable react/prop-types */
function SpecialHeading({ heading, icon }) {
  return (
    <div className="relative space-y-4 pb-[5px]">
      <div className="relative flex items-center gap-3">
        <div className="p-2 text-2xl text-accent border border-accent rounded-full">
          {icon}
        </div>
        <h3 className="font-semibold text-dark-gray dark:text-white-90 uppercase duration-short">
          {heading}
        </h3>
      </div>
      <SeparatorToRight />
    </div>
  );
}

export default SpecialHeading;
