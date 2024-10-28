/* eslint-disable react/prop-types */
function CvButtons({ openCvModal }) {
  return (
    <div className="relative w-full">
      <span className="absolute top-0 left-0 w-full h-[1px] bg-custom-gradient-to-r"></span>
      <div className="relative flex w-full text-sm font-semibold">
        <button className="group flex justify-center gap-3 w-1/2 py-4 hover:text-accent duration-short">
          Download CV
          <span className="group-hover:text-accent translate-y-1 group-hover:-translate-y-1 duration-short"></span>
        </button>
        <span className="absolute start-1/2 translate-x-[-50%] h-full w-[1px] bg-custom-gradient-to-b"></span>
        <button
          onClick={openCvModal}
          className="group flex justify-center gap-3 w-1/2 py-4 hover:text-accent duration-short"
        >
          View CV
          <span className="-rotate-45 group-hover:text-accent group-hover:-translate-y-1 duration-short"></span>
        </button>
      </div>
    </div>
  );
}

export default CvButtons;
