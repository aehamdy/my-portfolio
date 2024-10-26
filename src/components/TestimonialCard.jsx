/* eslint-disable react/prop-types */
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from "react-icons/bi";

function TestimonialCard({ key, testimonial }) {
  return (
    <article key={key} className="flex-shrink-0 w-full flex flex-col gap-3">
      <div className="w-fit mx-auto">
        <p className="relative w-full sm:w-4/5 md:w-3/4 lg:w-3/5 mx-auto p-2.5 italic text-medium-gray dark:text-neutral-gray duration-short">
          <span className="absolute top-0 left-0">
            <BiSolidQuoteAltLeft />
          </span>
          {testimonial.content}
          <span className="absolute bottom-0 end-0">
            <BiSolidQuoteAltRight />
          </span>
        </p>
      </div>
      <div className="flex flex-col items-center gap-1">
        <div className="w-24 rounded-[50%] overflow-hidden">
          <img src={testimonial.image} alt="person image" className="" />
        </div>
        <span className="font-semibold text-dark-gray dark:text-white-90 duration-short">
          {testimonial.name}
        </span>
        <span className="font-normal text-sm text-light-gray duration-short">
          {testimonial.profession}
        </span>
      </div>
    </article>
  );
}

export default TestimonialCard;
