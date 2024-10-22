import GetInTouchList from "./GetInTouchList";
import Map from "./Map";
import SectionTitle from "./SectionTitle";

function Contact() {
  return (
    <section
      id="contact"
      className="py-main-section-padding bg-section-light dark:bg-section-dark rounded-main-section"
    >
      <SectionTitle title="get in touch" />
      <div className="flex flex-col items-start gap-7 mt-section-margin px-section-padding">
        <Map />
        <GetInTouchList />
      </div>
    </section>
  );
}

export default Contact;
