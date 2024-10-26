import { testimonials } from "../data/testimonials";
import SectionTitle from "./SectionTitle";
import { useEffect, useState } from "react";
import TestimonialCard from "./TestimonialCard";

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
    <article className="flex flex-col gap-7 mt-section-margin">
      <SectionTitle title="testimonials" />
      <div className="flex flex-col items-center gap-6 px-section-padding">
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
                  ? "bg-accent"
                  : "bg-transparent border border-accent"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </article>
  );
}

export default Testimonials;
