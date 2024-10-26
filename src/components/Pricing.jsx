import { plans } from "../data/pricing";
import SectionTitle from "./SectionTitle";
import PlanCard from "./PlanCard";

function Pricing() {
  return (
    <article className="mt-section-margin">
      <SectionTitle title="pricing" />
      <div className="flex flex-col sm:flex-row gap-6 sm:gap-0 px-section-padding">
        {plans.map((plan, i) => (
          <PlanCard key={i} index={i} plan={plan} />
        ))}
      </div>
    </article>
  );
}

export default Pricing;
