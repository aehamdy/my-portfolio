import { myServices } from "../data/myServices";
import SectionTitle from "./SectionTitle";
import SeparatorToRight from "./SeparatorToRight";
import ServiceCard from "./ServiceCard";

function MyServices() {
  return (
    <article className="flex flex-col gap-4 mt-section-margin">
      <SectionTitle title="my services" />
      <SeparatorToRight />
      <div className="flex flex-col md:flex-row md:flex-wrap px-section-padding">
        {myServices.map((service, i) => (
          <ServiceCard
            key={i}
            index={i}
            service={service}
            myServices={myServices}
          />
        ))}
      </div>
    </article>
  );
}

export default MyServices;
