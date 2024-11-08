import quotes from "../data/quotes";
import SectionTitle from "./SectionTitle";
import { useEffect, useState } from "react";
import QuoteCard from "./QuoteCard";
import SeparatorToRight from "./SeparatorToRight";
import { arrowLeft, arrowRight } from "../data/icons";

function Quotes() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleRightArrow = () => {
    setCurrentIndex(prevIndex => 
      prevIndex === quotes.length - 1 ? 0 : prevIndex + 1
    )
  }

  const goToQuote = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === quotes.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="mt-8">
      <SectionTitle title="Quotes" />
      <div className="mt-horizontal-separator-mt">
        <SeparatorToRight />
      </div>
      <div className="relative flex flex-col items-center gap-8 mt-6 px-section-padding">
      <div className="absolute top-1/2 w-[90%] flex justify-between mx-8 z-[5]">
          <button className="text-medium-gray hover:text-dark-gray dark:text-neutral-gray dark:hover:text-light-gray-dd cursor-pointer">{arrowLeft}</button>
          <button onClick={handleRightArrow} className="text-medium-gray hover:text-dark-gray dark:text-neutral-gray dark:hover:text-light-gray-dd cursor-pointer">{arrowRight}</button>
        </div>
        <div className="flex w-full overflow-hidden">
          <div
            className="flex w-full transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {quotes.map((item, i) => (
              <QuoteCard key={i} quote={item} />
            ))}
          </div>
        </div>

        <div className="flex gap-2">
          {quotes.map((_, i) => (
            <span
              key={i}
              onClick={() => goToQuote(i)}
              className={`w-2.5 h-2.5 ${
                i === currentIndex ? "bg-accent" : ""
              } border border-accent rounded-full cursor-pointer duration-short`}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Quotes;
