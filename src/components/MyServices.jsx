import { myServices } from "../data/myServices";
import SectionTitle from "./SectionTitle";
import SeparatorToBottom from "./SeparatorToBottom";
import SeparatorToRight from "./SeparatorToRight";
import ServiceCard from "./ServiceCard";

function MyServices() {
  return (
    <article className="flex flex-col mt-section-margin">
      <SectionTitle title="my services" />
      <div className="mt-horizontal-separator-mt">
        <SeparatorToRight />
      </div>
      <div className="relative flex flex-col md:flex-row md:flex-wrap px-section-padding">
        <div className="hidden md:block absolute w-full h-full start-[50%] top-0">
          <SeparatorToBottom />
        </div>
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
