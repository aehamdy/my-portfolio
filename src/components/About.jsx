import AboutMe from "./AboutMe";
import MyServices from "./MyServices";
import Pricing from "./Pricing";
import Testimonials from "./Testimonials";

function About() {
  return (
    <section
      id="about"
      className="py-main-section-padding bg-section-light dark:bg-section-dark rounded-main-section"
    >
      <AboutMe />
      <MyServices />
      <Pricing />
      <Testimonials />
    </section>
  );
}

export default About;
