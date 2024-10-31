import "./App.css";
import { useEffect, useState } from "react";
import HeroSection from "./components/HeroSection";
import Header from "./components/Header";
import AboutSection from "./components/AboutSection";
import ResumeSection from "./components/ResumeSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import CvModal from "./components/CvModal";
import PortfolioLoader from "./components/PortfolioLoader";
import useSectionVisibility from "./hooks/useSectionVisibility";
import useSVGAnimation from "./hooks/useSVGAnimation";
import usePageLoader from "./hooks/usePageLoader";

function App() {
  const { activeSection, visibleSection, handleSectionChange } =
    useSectionVisibility();
  // const [isCvModalOpen, setIsCvModalOpen] = useState(false);

  useSVGAnimation(); // Initialize SVG animation hook
  const loading = usePageLoader(); // Initialize loading state

  // const openCvModal = () => setIsCvModalOpen(true);
  // const closeCvModal = () => setIsCvModalOpen(false);

  useEffect(() => {
    document.title = "Ahmed's Portfolio | Creative Frontend Developer";
  }, []);

  if (loading) {
    return <PortfolioLoader />;
  }

  return (
    <>
      <div className="grand-parent md:relative lg:h-[100dvh] mx-auto md:ps-20 lg:ps-0 lg:py-2 lg:overflow-hidden">
        {/* Display on all screens excpet large screens and larger */}
        <div className="parent lg:hidden relative">
          <Header onSectionChange={handleSectionChange} />
          <div className="low-parent main grid grid-cols-1 gap-y-5 overflow-hidden">
            <div className="hero col-span-2">
              <HeroSection />
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
              <HeroSection />
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
      </div>
    </>
  );
}

export default App;

//#TODOS:
// [x] create only one file to contain all icons
// [x] create a component for skills in about me section
// [x] fix the spacing between about me skills icon that caused because of the tool tip
// [x] create two components, one for horizontal graidnet to right and the other to bottom and implement them
// [x] find proper icons to add to each services in MyServices section
// [x] add a simple notification/error when user send a successful/failed email
// [x] add animated svg for body element
// [x] create dynamic cv
// [x] make the cv downloadable in word file
// [x] change the name of the downloadable word file to my firstname + lastname (line 528)
// [x] isolate the function of the downloadable cv as a stand alone component
// [x] make the cv viewable
// [x] restructure the viewable cv
// [x] add loading animation that appears before rendering the website
// [x] add icon as favicon
// [x] ensure the favicon to be in both dark/light mode of the user's browser
// [x] make all constants/variables comes from one file
// [x] create proper image to each one of your projects
// [x] add your real projects
// [x] make each project to display the name of the project itself like Expenses Tracker's name to be SpenTracker
// [x] add simple discribtion to each project that describes its purpose

// [ ] add your real photo
// [ ] add animation to each project when filter changes
