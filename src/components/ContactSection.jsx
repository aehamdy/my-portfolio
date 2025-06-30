import ContactForm from "./ContactForm";
import GetInTouchList from "./GetInTouchList";
import Map from "./Map";
import SectionTitle from "./SectionTitle";
import SeparatorToRight from "./SeparatorToRight";

function ContactSection() {
  return (
    <section
      id="contact"
      className="py-main-section-padding bg-section-light dark:bg-section-dark rounded-main-section duration-short"
    >
      <SectionTitle title="get in touch" />
      <div className="mt-horizontal-separator-mt">
        <SeparatorToRight />
      </div>
      <div className="flex flex-col items-start gap-7 mt-section-margin px-section-padding">
        <Map />
        <GetInTouchList />

        <p className="text-start text-sm text-medium-gray dark:text-white-55">
          Need similar website or any help with your Web design and Development
          ?
        </p>
      </div>

      <div className="mt-section-margin">
        <SectionTitle title="contact form" />
        <div className="mt-horizontal-separator-mt">
          <SeparatorToRight />
        </div>
      </div>

      <div className="mt-section-margin px-section-padding">
        <ContactForm />
      </div>
    </section>
  );
}

export default ContactSection;
