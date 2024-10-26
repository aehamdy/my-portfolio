import { plans } from "../data/pricing";
import SectionTitle from "./SectionTitle";
import PlanCard from "./PlanCard";
import SeparatorToRight from "./SeparatorToRight";

function Pricing() {
  return (
    <article className="flex flex-col gap-4 mt-section-margin">
      <SectionTitle title="pricing" />
      <SeparatorToRight />
      <div className="flex flex-col sm:flex-row gap-6 sm:gap-0 px-section-padding">
        {plans.map((plan, i) => (
          <PlanCard key={i} index={i} plan={plan} />
        ))}
      </div>
    </article>
  );
}

export default Pricing;
