import LoadingAnimation from "./LoadingAnimation";
import TextAnimation from "./TextAnimation";

function PortfolioLoader() {
  return (
    <div className="flex flex-col items-center gap-3">
      <LoadingAnimation />
      <TextAnimation />
    </div>
  );
}

export default PortfolioLoader;
