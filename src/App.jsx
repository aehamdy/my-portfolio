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
import CvContent from "./components/CvContent";
import { Document, Packer, Paragraph, TextRun } from "docx";
import { saveAs } from "file-saver";
import { personalInfo } from "./data/personalInfo";

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

  //download cv as word file
  const downloadCvAsWord = async () => {
    const doc = new Document({
      sections: [
        {
          properties: {},
          children: [
            new Paragraph({
              children: [
                new TextRun({
                  text: personalInfo.fullName(),
                  bold: true,
                  size: 32, // font size
                }),
              ],
            }),
            new Paragraph({
              //add horizontal line
              border: {
                bottom: {
                  style: "single",
                  size: 6, // Line thickness
                  space: 0, // Space above and below the line
                },
              },
            }),
            new Paragraph({
              children: [], // Empty paragraph just to create space
            }),
            // Add location, phone number, and email on the same line
            new Paragraph({
              children: [
                new TextRun({
                  text: `${personalInfo.location}`, // Location
                  break: 0, // No line break after location
                }),
                new TextRun({
                  text: ` | `, // Separator
                }),
                new TextRun({
                  text: `${personalInfo.phoneNumber}`, // Phone Number
                  break: 0, // No line break after phone number
                }),
                new TextRun({
                  text: ` | `, // Separator
                }),
                new TextRun({
                  text: `${personalInfo.email}`, // Email
                }),
              ],
            }),
            new Paragraph({
              children: [], // Empty paragraph just to create space
            }),
            // Add links for Portfolio, LinkedIn, and GitHub on the next line
            new Paragraph({
              children: [
                new TextRun({
                  text: `Portfolio: ${personalInfo.social.portfolio}`, // Portfolio link
                  hyperlink: personalInfo.social.portfolio, // Making it a hyperlink
                  bold: true,
                }),
              ],
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: `LinkedIn: ${personalInfo.social.linkedin}`, // LinkedIn link
                  hyperlink: personalInfo.social.linkedin, // Making it a hyperlink
                  bold: true,
                }),
              ],
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: `GitHub: ${personalInfo.social.github}`, // GitHub link
                  hyperlink: personalInfo.social.github, // Making it a hyperlink
                  bold: true,
                }),
              ],
            }),
            // Summary Section
            new Paragraph({
              text: "Summary",
              heading: "Heading1",
            }),
            new Paragraph({
              text: personalInfo.summary,
            }),
            // Technical Skills Section
            new Paragraph({
              text: "Technical Skills",
              heading: "Heading1",
            }),
            ...personalInfo.technicalSkills.map((skill) => {
              const skillName = Object.keys(skill)[0];
              const skillValues = skill[skillName].join(", ");
              return new Paragraph({
                children: [
                  new TextRun({
                    text: `-${skillName}: ${skillValues}`,
                  }),
                ],
              });
            }),
            // new Paragraph({
            //   text: "Full Stack Developer",
            // }),
            // new Paragraph({
            //   text: "Contact: john.doe@example.com",
            // }),
            // new Paragraph({
            //   text: "Experience",
            //   heading: "Heading1",
            // }),
            // new Paragraph({
            //   text: "- Worked at XYZ company...",
            // }),
            // new Paragraph({
            //   text: "Skills",
            //   heading: "Heading1",
            // }),
            // new Paragraph({
            //   text: "- JavaScript, React, Node.js",
            // }),
          ],
        },
      ],
    });

    Packer.toBlob(doc).then((blob) => {
      saveAs(blob, "John_Doe_CV.docx");
    });
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
                <ResumeSection
                  openCvModal={openCvModal}
                  downloadCv={downloadCvAsWord}
                />
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
                    <ResumeSection
                      openCvModal={openCvModal}
                      downloadCv={downloadCvAsWord}
                    />
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
        >
          <CvContent />
        </CvModal>
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
