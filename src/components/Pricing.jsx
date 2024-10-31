import plans from "../data/pricing";
import SectionTitle from "./SectionTitle";
import PlanCard from "./PlanCard";
import SeparatorToRight from "./SeparatorToRight";
import SeparatorToBottom from "./SeparatorToBottom";

function Pricing() {
  return (
    <article className="flex flex-col mt-section-margin">
      <SectionTitle title="pricing" />
      <div className="mt-horizontal-separator-mt">
        <SeparatorToRight />
      </div>
      <div className="relative flex flex-col sm:flex-row gap-6 sm:gap-0 px-section-padding">
        <div className="hidden sm:block absolute start-[50%] top-0 w-full h-full">
          <SeparatorToBottom />
        </div>
        {plans.map((plan, i) => (
          <PlanCard key={i} index={i} plan={plan} />
        ))}
      </div>
    </article>
  );
}

export default Pricing;
