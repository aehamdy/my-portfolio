import AboutMe from "./AboutMe";
import MyServices from "./MyServices";
// import Pricing from "./Pricing";
import Testimonials from "./Testimonials";

function AboutSection() {
  return (
    <section
      id="about"
      className="vertical-scrollbar py-main-section-padding bg-section-light dark:bg-section-dark rounded-main-section lg:rounded-t-0 duration-short"
    >
      <AboutMe />
      <MyServices />
      {/* <Pricing /> */}
      <Testimonials />
    </section>
  );
}

export default AboutSection;
