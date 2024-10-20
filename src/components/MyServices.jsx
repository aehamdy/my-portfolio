import { myServices } from "../data/myServices";
import SectionTitle from "./SectionTitle";

function MyServices() {
  return (
    <section>
      <SectionTitle title="my services" />
      <div className="flex flex-col md:flex-row md:flex-wrap">
        {myServices.map((service, i) => (
          <article key={i} className="relative w-full md:w-1/2 p-3 text-left">
            <h3 className="my-2 font-semibold text-[17px] text-dark-gray dark:text-white-85">
              {service.heading}
            </h3>
            <p className="md:w-4/5 text-[16px] text-medium-gray dark:text-white-55">
              {service.content}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default MyServices;
