import "./App.css";
import HeroSection from "./components/HeroSection";
import Header from "./components/Header";
import AboutSection from "./components/AboutSection";
import ResumeSection from "./components/ResumeSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import { useEffect, useState } from "react";
import CvModal from "./components/CvModal";
import cvData from "./data/cvData";

function App() {
  const [activeSection, setActiveSection] = useState("about");
  const [visibleSection, setVisibleSection] = useState({
    about: true,
    resume: false,
    projects: false,
    contact: false,
  });
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);
  const [loading, setLoading] = useState(true); // Loading state

  const openCvModal = () => {
    setIsCvModalOpen(true);
  };

  const closeCvModal = () => {
    setIsCvModalOpen(false);
  };

  //Hook to make the SVG background moving vertically
  useEffect(() => {
    const lights = document.querySelectorAll(".light"); // Select all lights

    const speeds = Array.from(
      { length: lights.length },
      () => Math.random() * 5 + 2 // Generate random speeds for each light
    );

    const moveLights = () => {
      lights.forEach((light, index) => {
        const speed = speeds[index]; // Each light has a different speed
        const currentY = parseFloat(light.getAttribute("data-y")) || 0; // Get current Y position
        const newY = (currentY + speed) % 1080; // Update position
        light.setAttribute("transform", `translate(0, ${newY})`); // Apply transform
        light.setAttribute("data-y", newY); // Store the new position
      });
    };

    const intervalId = setInterval(moveLights, 50); // Call moveLights every 50ms

    return () => clearInterval(intervalId); // Clean up interval on component unmount
  }, []);

  useEffect(() => {
    // Simulating data fetching
    setTimeout(() => {
      // After fetching data, initialize visibleSection
      setVisibleSection({
        about: true,
        resume: false,
        projects: false, // or false depending on your desired initial state
        contact: false,
      });
      setLoading(false); // Set loading to false after data is fetched
    }, 1000); // Simulating a 1-second API call
  }, []);

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

  // useEffect(() => {
  //   console.log("Visible Section:", visibleSection);
  // }, [visibleSection]);

  if (loading) {
    return <div>Loading...</div>; // Show loading state until data is fetched
  }

  return (
    <>
      <div className="grand-parent md:relative lg:h-[100dvh] mx-auto md:ps-20 lg:ps-0 lg:py-2 lg:overflow-hidden">
        {/* Display on all screens excpet large screens and larger */}
        <div className="parent lg:hidden relative">
          <Header onSectionChange={handleSectionChange} />
          <div className="low-parent main grid grid-cols-1 gap-y-5 overflow-hidden">
            <div className="hero col-span-2">
              <HeroSection openCvModal={openCvModal} />
            </div>

            <div className="gap-5 rounded-main-section overflow-hidden">
              <div className="all-sections-holder vertical-scrollbar grid grid-cols-1 gap-5 mb-2">
                <AboutSection />
                <ResumeSection />
                <ProjectsSection />
                <ContactSection />
              </div>
            </div>
          </div>
        </div>

        {/* Display starting from larger screen and larger */}
        <div className="parent hidden lg:block relative lg:h-full lg:my-6">
          <Header onSectionChange={handleSectionChange} />
          <div className="low-parent main grid lg:grid-cols-5 lg:gap-4 lg:h-full overflow-hidden">
            <div className="hero col-span-2">
              <HeroSection openCvModal={openCvModal} />
            </div>

            <div className="lg:col-span-3 gap-5 rounded-main-section overflow-hidden">
              <div className="all-sections-holder vertical-scrollbar grid lg:col-span-3 gap-5 lg:h-[90dvh] mb-2 lg:mb-0 bg-section-light dark:bg-section-dark lg:overflow-auto lg:overflow-x-hidden lg:rounded-main-section">
                {visibleSection.about && (
                  <div className="lg:animate-fadeInUp">
                    <AboutSection />
                  </div>
                )}
                {visibleSection.resume && (
                  <div className="lg:animate-fadeInUp">
                    <ResumeSection />
                  </div>
                )}
                {/* {visibleSection.projects && (
                  <div className="lg:animate-fadeInUp">
                    <ProjectsSection visibleSection={visibleSection} />
                  </div>
                )} */}
                {visibleSection && visibleSection.projects && (
                  <div className="lg:animate-fadeInUp">
                    <ProjectsSection visibleSection={visibleSection} />
                  </div>
                )}

                {visibleSection.contact && (
                  <div className="lg:animate-fadeInUp">
                    <ContactSection />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <CvModal
          isOpen={isCvModalOpen}
          closeModal={closeCvModal}
          cvData={cvData}
        />
      </div>
    </>
  );
}

export default App;

//#BUG: projects filteration is working only on small screen to medium, but doesn't work on large screen!

//#TODOS:
// [x] create only one file to contain all icons
// [x] create a component for skills in about me section
// [x] fix the spacing between about me skills icon that caused because of the tool tip
// [x] create two components, one for horizontal graidnet to right and the other to bottom and implement them
// [x] find proper icons to add to each services in MyServices section
// [x] add a simple notification/error when user send a successful/failed email
// [x] add animated svg for body element
// [ ] create dynamic cv
// [ ] make the cv viewable
// [ ] make the cv downloadable in word file

// [ ] make the functionality of setting visible section and set active section to be dynamic using the constant array of navbar.jsx
// [ ] add animation to each project when filter changes
// [ ] make all constants/variables comes from one file
// [ ] add env file
// [ ] create proper image to each one of your projects
// [ ] add your real projects
// [ ] add loading animation that appears before rendering the website
// [ ] add your real photo
// [ ] add svg icon as favicon
// [ ] ensure the favicon to be in both dark/light mode of the user's browser
