/* eslint-disable react/prop-types */
function SpecialHeading({ heading, icon }) {
  return (
    <div className="relative flex items-center gap-3 pb-[15px] before:absolute before:bottom-0 before:start-0 before:w-full before:h-[1px] before:bg-custom-gradient-to-r">
      <div className="p-2 text-2xl text-accent border border-accent rounded-full">
        {icon}
      </div>
      <h3 className="font-semibold text-dark-gray dark:text-white-90 uppercase duration-short">
        {heading}
      </h3>
    </div>
  );
}

export default SpecialHeading;
