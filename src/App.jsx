import "./App.css";
import HeroSection from "./components/HeroSection";
import Header from "./components/Header";
import About from "./components/About";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { useEffect, useState } from "react";

function App() {
  const [activeSection, setActiveSection] = useState("about");
  const [visibleSection, setVisibleSection] = useState({
    about: true,
    resume: false,
    projects: false,
    contact: false,
  });

  const handleSectionChange = (section) => {
    setActiveSection(section);
    setVisibleSection({
      about: section === "about",
      resume: section === "resume",
      projects: section === "projects",
      contact: section === "contact",
    });
  };

  useEffect(() => {
    setVisibleSection((prev) => ({
      ...prev,
      [activeSection]: true,
    }));
  }, [activeSection]);

  useEffect(() => {
    document.title = "Ahmed's Portfolio | Creative Frontend Developer";
  }, []);

  return (
    <>
      <div className="container flex flex-col md:flex-row gap-4 mx-auto">
        <Header onSectionChange={handleSectionChange} />
        <div className="flex flex-col lg:grid lg:grid-cols-5 gap-4 lg:h-[90dvh] -mt-[16px] md:mt-0 rounded-b-main-section lg:rounded-main-section overflow-hidden">
          <div className="herosection-holder col-span-2 lg:ps-[40px]">
            <HeroSection />
          </div>
          <div className="vertical-scrollbar col-span-3 lg:h-[100dvh] overflow-y-auto rounded-main-section overflow-x-hidden">
            <div className="flex flex-col gap-6">
              {visibleSection.about && (
                <div
                  className={`lg:animate-fadeInUp ${
                    !visibleSection.about ? "hidden" : ""
                  }`}
                >
                  <About />
                </div>
              )}
              {visibleSection.resume && (
                <div
                  className={`lg:animate-fadeInUp ${
                    !visibleSection.resume ? "hidden" : ""
                  }`}
                >
                  <Resume />
                </div>
              )}
              {visibleSection.projects && (
                <div
                  className={` ${
                    !visibleSection.projects ? "hidden" : "lg:animate-fadeInUp"
                  }`}
                >
                  <Projects />
                </div>
              )}
              {visibleSection.contact && (
                <div
                  className={` ${
                    !visibleSection.contact ? "hidden" : "lg:animate-fadeInUp"
                  }`}
                >
                  <Contact />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

//#TODOS:
// [ ] fix the issue of HeroSection and Projects width are getting shrink when no projects found
// [ ] make the functionality of setting visible section and set active section to be dynamic using the constant array of navbar.jsx
// [ ] fix the issue of Contact section is getting smaller on large screen when click on its relatd nav button
// [ ] add animation to each section when they get hide
// [ ] make all constants/variables comes from one file
// [ ] add env file
// [ ] create only one file to contain all icons
// [ ] create proper image to each one of your projects
// [ ] add your real projects
// [ ] create two components, one for horizontal graidnet to right and the other to bottom and implement them
// [ ] create dynamic cv
// [ ] make the cv showable
// [ ] make the cv downloadable in word file
