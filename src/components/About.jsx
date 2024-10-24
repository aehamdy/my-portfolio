import AboutMe from "./AboutMe";
import MyServices from "./MyServices";
import Pricing from "./Pricing";
import Testimonials from "./Testimonials";

function About() {
  return (
    <section
      id="about"
      className="vertical-scrollbar py-main-section-padding lg:mb-section-margin bg-section-light dark:bg-section-dark rounded-main-section"
    >
      <AboutMe />
      <MyServices />
      <Pricing />
      <Testimonials />
    </section>
  );
}

export default About;
