import personalInfo from "../data/personalInfo";

function HireAvailability() {
  const availability = personalInfo.hiringStatus;

  return (
    <div className="flex md:flex-col items-center gap-2 mx-auto duration-short">
      <span
        className={`w-2 h-2 ${
          availability
            ? "bg-green-400 shadow-available-shadow"
            : "bg-red-500 shadow-not-available-shadow"
        } rounded-[50%] ${availability && "animate-pulse"}`}
      ></span>
      <p className="md:text-xs text-medium-gray dark:text-white-85 duration-short">
        {availability ? (
          "Available"
        ) : (
          <>
            <span className="block md:hidden">Not available</span>
            <span className="hidden md:block">
              Not
              <br />
              available
            </span>
          </>
        )}
      </p>
    </div>
  );
}

export default HireAvailability;
