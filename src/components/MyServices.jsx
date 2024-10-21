import { myServices } from "../data/myServices";
import SectionTitle from "./SectionTitle";

function MyServices() {
  return (
    <article className="flex flex-col gap-5 mt-section-margin">
      <SectionTitle title="my services" />
      <div className="flex flex-col md:flex-row md:flex-wrap px-section-padding">
        {myServices.map((service, i) => (
          <article key={i} className="relative w-full md:w-1/2 p-3 text-left">
            <h3 className="my-2 font-semibold text-[17px] text-dark-gray dark:text-white-85">
              {service.heading}
            </h3>
            <p className="md:w-4/5 text-[16px] text-medium-gray dark:text-white-55">
              {service.content}
            </p>
            {i != myServices.length - 1 && (
              <span
                className={`${
                  i === 2 ? "md:hidden" : ""
                } absolute bottom-0 start-0 w-full h-[1px] bg-custom-gradient-to-r`}
              ></span>
            )}
          </article>
        ))}
      </div>
    </article>
  );
}

export default MyServices;
