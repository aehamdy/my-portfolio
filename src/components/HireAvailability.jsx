function HireAvailability() {
  const availability = true;

  return (
    <div className="flex items-center gap-2 mx-auto">
      <span
        className={`w-2 h-2 ${
          availability
            ? "bg-green-400 shadow-available-shadow"
            : "bg-red-500 shadow-not-available-shadow"
        } rounded-[50%] ${availability && "animate-pulse"}`}
      ></span>
      <p>{availability ? "Available" : "Not available"}</p>
    </div>
  );
}

export default HireAvailability;
