import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from "react-icons/bi";
import { quotes } from "../data/quotes";
import SectionTitle from "./SectionTitle";
import { useEffect, useState } from "react";

function Quotes() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToQuote = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === quotes.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="mt-8">
      <SectionTitle title="Quotes" />
      <div className="flex flex-col items-center gap-8 mt-6 px-section-padding">
        <div className="flex w-full overflow-hidden">
          <div
            className="flex w-full transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {quotes.map((item, i) => (
              <article
                key={i}
                className={`flex flex-col gap-5 flex-shrink-0 w-full `}
              >
                <div className="relative text-medium-gray dark:text-white-55 duration-short">
                  <span className="absolute top-0 start-0">
                    <BiSolidQuoteAltLeft />
                  </span>
                  <p className="text-smfont-light italic">{item.content}</p>
                  <span className="absolute bottom-0 end-0">
                    <BiSolidQuoteAltRight />
                  </span>
                </div>

                <div className="flex flex-col">
                  <span className="text-sm text-light-gray">Author</span>
                  <span className="font-semibold text-dark-gray dark:text-white-90 duration-short">
                    {item.author}
                  </span>
                </div>
              </article>
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
