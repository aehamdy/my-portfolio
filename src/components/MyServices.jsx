import { myServices } from "../data/myServices";
import SectionTitle from "./SectionTitle";
import ServiceCard from "./ServiceCard";

function MyServices() {
  return (
    <article className="flex flex-col gap-5 mt-section-margin">
      <SectionTitle title="my services" />
      <div className="flex flex-col md:flex-row md:flex-wrap px-section-padding">
        {myServices.map((service, i) => (
          <ServiceCard key={i} service={service} myServices={myServices} />
        ))}
      </div>
    </article>
  );
}

export default MyServices;
