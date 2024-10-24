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
      <div className="grand-parent md:relative md:h-[99dvh] lg:h-[100dvh] mx-auto md:ps-20 lg:ps-0 lg:py-2 lg:overflow-hidden">
        {/* Display on all screens excpet large screens and larger */}
        <div className="parent lg:hidden relative">
          <Header />
          <div className="low-parent main grid grid-cols-1 gap-y-5 overflow-hidden">
            <div className="hero col-span-2">
              <HeroSection />
            </div>

            <div className="gap-5 rounded-main-section overflow-hidden">
              <div className="all-sections-holder vertical-scrollbar grid grid-cols-1 gap-5 mb-2">
                <About />
                <Resume />
                <Projects />
                <Contact />
              </div>
            </div>
          </div>
        </div>

        {/* Display starting from larger screen and larger */}
        <div className="parent hidden lg:block relative lg:h-full lg:my-6">
          <Header onSectionChange={handleSectionChange} />
          <div className="low-parent main grid lg:grid-cols-5 lg:gap-4 lg:h-full overflow-hidden">
            <div className="hero col-span-2">
              <HeroSection />
            </div>

            <div className="lg:col-span-3 gap-5 rounded-main-section overflow-hidden">
              <div className="all-sections-holder vertical-scrollbar grid lg:col-span-3 gap-5 lg:h-[90dvh] mb-2 lg:mb-0 lg:overflow-auto lg:rounded-main-section">
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
                      !visibleSection.projects
                        ? "hidden"
                        : "lg:animate-fadeInUp"
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
// [ ] add a simple notification/error when user send an successfully/failed email
// [ ] find proper icons to add to each services in MyServices section
