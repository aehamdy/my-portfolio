import { myServices } from "../data/myServices";
import SectionTitle from "./SectionTitle";
import SeparatorToRight from "./SeparatorToRight";
import ServiceCard from "./ServiceCard";

function MyServices() {
  return (
    <article className="flex flex-col mt-section-margin">
      <SectionTitle title="my services" />
      <div className="mt-horizontal-separator-mt">
        <SeparatorToRight />
      </div>
      <div className="flex flex-col md:flex-row md:flex-wrap mt-4 px-section-padding">
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
