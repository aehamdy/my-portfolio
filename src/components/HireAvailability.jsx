function HireAvailability() {
  const availability = true;

  return (
    <div className="flex justify-between items-center">
      <span
        className={`w-2 h-2 ${
          availability ? "bg-green-400" : "bg-red-500"
        } rounded-[50%] animate-pulse`}
      ></span>
      <p>{availability ? "Available" : "Not available"}</p>
    </div>
  );
}

export default HireAvailability;
