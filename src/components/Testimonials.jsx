import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from "react-icons/bi";
import { testimonials } from "../data/testimonials";
import SectionTitle from "./SectionTitle";

function Testimonials() {
  return (
    <section>
      <SectionTitle title="testimonials" />
      <div className="flex flex-col items-center gap-6">
        <div className="flex w-full overflow-hidden select-none">
          <div className="flex w-full transition-transform duration-500 ease-in-out">
            {testimonials.map((item, i) => (
              <div key={i} className="flex flex-col gap-3">
                <div>
                  <p className="relative p-2.5 italic text-medium-gray dark:text-neutral-gray duration-short">
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
      </div>
    </section>
  );
}

export default Testimonials;
