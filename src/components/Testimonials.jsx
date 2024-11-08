import testimonials from "../data/testimonials";
import SectionTitle from "./SectionTitle";
import { useEffect, useState } from "react";
import TestimonialCard from "./TestimonialCard";
import SeparatorToRight from "./SeparatorToRight";
import { arrowLeft, arrowRight } from "../data/icons";

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const handleLeftArrow = () => {
    setCurrentIndex(prevIndex => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    )
  }

  const handleRightArrow = () => {
    setCurrentIndex(prevIndex => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="flex flex-col mt-section-margin">
      <SectionTitle title="testimonials" />
      <div className="mt-horizontal-separator-mt">
        <SeparatorToRight />
      </div>
      <div className="relative flex flex-col items-center gap-6 mt-6 px-section-padding">
        <div className="absolute top-1/2 w-[90%] flex justify-between mx-8 z-[5]">
          <button onClick={handleLeftArrow} className="text-medium-gray hover:text-dark-gray dark:text-neutral-gray dark:hover:text-light-gray-dd cursor-pointer">{arrowLeft}</button>
          <button onClick={handleRightArrow} className="text-medium-gray hover:text-dark-gray dark:text-neutral-gray dark:hover:text-light-gray-dd cursor-pointer">{arrowRight}</button>
        </div>
        <div className="flex w-full overflow-hidden select-none">
          <div
            className="flex w-full transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((item, i) => (
              <TestimonialCard key={i} testimonial={item} />
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
                  ? "bg-accent w-[1.2rem]"
                  : "bg-transparent border border-accent duration-v-short"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
