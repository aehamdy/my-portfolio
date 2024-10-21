import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from "react-icons/bi";
import { testimonials } from "../data/testimonials";
import SectionTitle from "./SectionTitle";
import { useEffect, useState } from "react";

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section>
      <SectionTitle title="testimonials" />
      <div className="flex flex-col items-center gap-6">
        <div className="flex w-full overflow-hidden select-none">
          <div
            className="flex w-full transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((item, i) => (
              <div key={i} className="flex-shrink-0 w-full flex flex-col gap-3">
                <div className="w-fit mx-auto">
                  <p className="relative w-full sm:w-4/5 md:w-3/4 lg:w-3/5 mx-auto p-2.5 italic text-medium-gray dark:text-neutral-gray duration-short">
                    <span className="absolute top-0 left-0">
                      <BiSolidQuoteAltLeft />
                    </span>
                    {item.content}
                    <span className="absolute bottom-0 end-0">
                      <BiSolidQuoteAltRight />
                    </span>
                  </p>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <div className="w-24 rounded-[50%] overflow-hidden">
                    <img src={item.image} alt="person image" className="" />
                  </div>
                  <span className="font-semibold text-dark-gray dark:text-white-90 duration-short">
                    {item.name}
                  </span>
                  <span className="font-normal text-sm text-light-gray duration-short">
                    {item.profession}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-1.5">
          {testimonials.map((_, i) => (
            <span
              key={i}
              onClick={() => goToSlide(i)}
              className={`w-2.5 h-2.5 rounded-full cursor-pointer ${
                currentIndex === i
                  ? "bg-accent"
                  : "bg-transparent border border-accent"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
