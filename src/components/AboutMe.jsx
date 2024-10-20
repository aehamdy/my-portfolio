import SectionTitle from "./SectionTitle";

function AboutMe() {
  return (
    <section className="p-main-section-padding">
      <SectionTitle title="about me" />
      <div className="flex flex-col text-start dark:text-white-55 text-medium-gray">
        <strong>Hello! I’m Donald Wellborn.</strong>
        <p>
          Back-end & Frond-end developer from UK, London. I have rich experience
          in wordpress, also I am good at Magento. I love to talk with you about
          our unique.
        </p>
      </div>
    </section>
  );
}

export default AboutMe;
