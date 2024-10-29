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
    // Font and Color Variables
    const headingFont = "Calibri (Headings)";
    const bodyFont = "Cambria (Body)";

    const nameFontSize = 26;
    const headingFontSize = 14;
    const bodyFontSize = 11;
    const projectFontSize = 13;

    const nameColor = "1F497D"; // Hex color for name
    const headingColor = "365F91"; // Hex color for section headings
    const projectColor = "4F81BD"; // Hex color for project names

    const doc = new Document({
      sections: [
        {
          properties: {
            page: {
              spelling: false, //Disable spell check
              // grammer: false, //Disable grammer check
            },
          },
          children: [
            // Full Name Section
            new Paragraph({
              children: [
                new TextRun({
                  text: personalInfo.fullName(),
                  font: headingFont,
                  size: nameFontSize * 2, // Word uses half-points
                  color: nameColor,
                  // bold: true,
                }),
              ],
            }),
            new Paragraph({
              border: {
                bottom: {
                  style: "single",
                  size: 6, // Line thickness
                  space: 0, // Space above and below the line
                  color: nameColor,
                },
              },
            }),
            new Paragraph({
              children: [], // Empty paragraph for spacing
            }),
            // Location, Phone, and Email in one line
            new Paragraph({
              children: [
                new TextRun({
                  text: `${personalInfo.location}`, // Location
                  font: bodyFont,
                  size: bodyFontSize * 2,
                  color: "000000", // Black
                }),
                new TextRun({
                  text: ` | `, // Separator
                  font: bodyFont,
                  size: bodyFontSize * 2,
                  color: "000000",
                }),
                new TextRun({
                  text: `Phone: ${personalInfo.phoneNumber}`, // Phone Number
                  font: bodyFont,
                  size: bodyFontSize * 2,
                  color: "000000",
                }),
                new TextRun({
                  text: ` | `, // Separator
                  font: bodyFont,
                  size: bodyFontSize * 2,
                  color: "000000",
                }),
                new TextRun({
                  text: `Email: ${personalInfo.email}`, // Email
                  font: bodyFont,
                  size: bodyFontSize * 2,
                  color: "000000",
                }),
              ],
            }),
            new Paragraph({
              children: [], // Empty paragraph for spacing
            }),
            // Social Links (Portfolio, LinkedIn, GitHub)
            new Paragraph({
              children: [
                new TextRun({
                  text: `Portfolio: ${personalInfo.social.portfolio}`,
                  hyperlink: personalInfo.social.portfolio,
                  font: bodyFont,
                  size: bodyFontSize * 2,
                  color: "000000",
                  // bold: true,
                }),
              ],
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: `LinkedIn: ${personalInfo.social.linkedin}`,
                  hyperlink: personalInfo.social.linkedin,
                  font: bodyFont,
                  size: bodyFontSize * 2,
                  color: "000000",
                  // bold: true,
                }),
              ],
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: `GitHub: ${personalInfo.social.github}`,
                  hyperlink: personalInfo.social.github,
                  font: bodyFont,
                  size: bodyFontSize * 2,
                  color: "000000",
                  // bold: true,
                }),
              ],
            }),
            new Paragraph({
              children: [], // Empty paragraph for spacing
            }),
            new Paragraph({
              children: [], // Empty paragraph for spacing
            }),
            // Summary Section
            new Paragraph({
              children: [
                new TextRun({
                  text: "Summary",
                  heading: "Heading1",
                  font: headingFont,
                  size: headingFontSize * 2,
                  color: headingColor,
                  bold: true,
                }),
              ],
              style: "Heading1", // Added style for collapsibility
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: personalInfo.summary,
                  spacing: {
                    line: 340, // Set line height to 240 points (1.5 spacing)
                    before: 200, // Space before the paragraph
                    after: 250, // Space after the paragraph
                  },
                  font: bodyFont,
                  size: bodyFontSize * 2,
                  color: "000000",
                }),
              ],
            }),

            new Paragraph({
              children: [], // Empty paragraph for spacing
            }),
            new Paragraph({
              children: [], // Empty paragraph for spacing
            }),

            // Technical Skills Section
            new Paragraph({
              children: [
                new TextRun({
                  text: "Technical Skills",
                  heading: "Heading1",
                  font: headingFont,
                  size: headingFontSize * 2,
                  color: headingColor,
                  bold: true,
                }),
              ],
              style: "Heading1", // Added style for collapsibility
            }),
            ...personalInfo.technicalSkills.map((skill) => {
              const skillName = Object.keys(skill)[0];
              const skillValues = skill[skillName].join(", ");
              return new Paragraph({
                children: [
                  new TextRun({
                    text: `- ${skillName}: ${skillValues}`,
                    font: bodyFont,
                    size: bodyFontSize * 2,
                    color: "000000",
                  }),
                ],
              });
            }),

            new Paragraph({
              children: [], // Empty paragraph for spacing
            }),
            new Paragraph({
              children: [], // Empty paragraph for spacing
            }),

            // Projects Section
            new Paragraph({
              children: [
                new TextRun({
                  text: "Projects",
                  heading: "Heading1",
                  font: headingFont,
                  size: headingFontSize * 2,
                  color: headingColor,
                  bold: true,
                }),
              ],
              style: "Heading1", // Style for collapsibility
            }),
            new Paragraph({
              children: [], // Empty paragraph for spacing
            }),
            // Projects
            ...personalInfo.projects
              .filter((project) => project.addToDownloadableCv)
              .flatMap((project, index) => [
                // Project Name (Collapsible)
                new Paragraph({
                  children: [
                    new TextRun({
                      text: project.name,
                      heading: "Heading2", // Set to Heading2 for project collapsibility
                      font: headingFont,
                      size: projectFontSize * 2,
                      color: projectColor,
                      bold: true,
                    }),
                  ],
                  style: "Heading2", // Style for collapsibility
                }),
                // Project Content (Initially hidden, displayed on expand)
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `Live Link: ${project.liveLink || "Not Available"}`,
                      font: bodyFont,
                      size: bodyFontSize * 2,
                      color: "000000",
                    }),
                  ],
                }),
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `GitHub Repo: ${
                        project.githubRepo || "Not Available"
                      }`,
                      font: bodyFont,
                      size: bodyFontSize * 2,
                      color: "000000",
                    }),
                  ],
                }),
                new Paragraph({
                  children: [
                    new TextRun({
                      text: project.description,
                      font: bodyFont,
                      size: bodyFontSize * 2,
                      color: "000000",
                    }),
                  ],
                }),
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `Technologies used: ${project.technologies.join(
                        ", "
                      )}`,
                      font: bodyFont,
                      size: bodyFontSize * 2,
                      color: "000000",
                      italic: true,
                    }),
                  ],
                }),
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `Challenge overcome: ${project.challengeOvercome}`,
                      font: bodyFont,
                      size: bodyFontSize * 2,
                      color: "000000",
                    }),
                  ],
                }),
                // Add a blank paragraph between projects for spacing
                new Paragraph({
                  children: [], // Empty paragraph for spacing
                }),
              ]),

            // Additional spacing
            new Paragraph({
              children: [], // Empty paragraph for spacing
            }),
            new Paragraph({
              children: [], // Empty paragraph for spacing
            }),

            // Education Section
            new Paragraph({
              children: [
                new TextRun({
                  text: "Education",
                  heading: "Heading1", // Use the same Heading1 for collapsibility
                  font: headingFont,
                  size: headingFontSize * 2,
                  color: headingColor,
                  bold: true,
                }),
              ],
              style: "Heading1", // Style for collapsibility
            }),
            // Education Content
            ...personalInfo.education
              .map((education) => {
                return [
                  new Paragraph({
                    children: [
                      new TextRun({
                        text: `${education.universityName} - ${education.location}`,
                        font: bodyFont,
                        size: bodyFontSize * 2,
                        color: "000000",
                      }),
                    ],
                  }),
                  new Paragraph({
                    children: [
                      new TextRun({
                        text: `${education.degree} - ${education.graduationYear}`,
                        font: bodyFont,
                        size: bodyFontSize * 2,
                        color: "000000",
                      }),
                    ],
                  }),
                  new Paragraph({
                    children: [], // Empty paragraph for spacing
                  }),
                ];
              })
              .flat(),

            // Additional spacing
            new Paragraph({
              children: [], // Empty paragraph for spacing
            }),

            // Certification Section
            new Paragraph({
              children: [
                new TextRun({
                  text: "Certifications",
                  heading: "Heading1",
                  font: headingFont,
                  size: headingFontSize * 2,
                  color: headingColor,
                  bold: true,
                }),
              ],
              style: "Heading1", // Added style for collapsibility
            }),
            ...personalInfo.certifications.map((certification) => {
              return new Paragraph({
                children: [
                  new TextRun({
                    text: certification,
                    font: bodyFont,
                    size: bodyFontSize * 2,
                    color: "000000",
                  }),
                ],
              });
            }),

            // Additional spacing
            new Paragraph({
              children: [], // Empty paragraph for spacing
            }),
            new Paragraph({
              children: [], // Empty paragraph for spacing
            }),

            // Additional Information Section
            new Paragraph({
              children: [
                new TextRun({
                  text: "Additional Information",
                  heading: "Heading1",
                  font: headingFont,
                  size: headingFontSize * 2,
                  color: headingColor,
                  bold: true,
                }),
              ],
              style: "Heading1", // Added style for collapsibility
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: personalInfo.additionalInformation,
                  font: bodyFont,
                  size: bodyFontSize * 2,
                  color: "000000",
                }),
              ],
            }),

            // Additional spacing
            new Paragraph({
              children: [], // Empty paragraph for spacing
            }),
            new Paragraph({
              children: [], // Empty paragraph for spacing
            }),

            // Key Strengths Section
            new Paragraph({
              children: [
                new TextRun({
                  text: "Key Strengths",
                  heading: "Heading1",
                  font: headingFont,
                  size: headingFontSize * 2,
                  color: headingColor,
                  bold: true,
                }),
              ],
              style: "Heading1", // Added style for collapsibility
            }),
            ...personalInfo.keyStrengths.map((strength) => {
              return new Paragraph({
                children: [
                  new TextRun({
                    text: `- ${strength}`,
                    font: bodyFont,
                    size: bodyFontSize * 2,
                    color: "000000",
                  }),
                ],
              });
            }),

            // Additional spacing
            new Paragraph({
              children: [], // Empty paragraph for spacing
            }),
            new Paragraph({
              children: [], // Empty paragraph for spacing
            }),

            // References Section
            new Paragraph({
              children: [
                new TextRun({
                  text: "References",
                  heading: "Heading1",
                  font: headingFont,
                  size: headingFontSize * 2,
                  color: headingColor,
                  bold: true,
                }),
              ],
              style: "Heading1", // Added style for collapsibility
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: "Available upon request.",
                  font: bodyFont,
                  size: bodyFontSize * 2,
                  color: "000000",
                }),
              ],
            }),
          ],
        },
      ],
    });

    // Save the document as a .docx file
    const blob = await Packer.toBlob(doc); // Changed toBlob for browser environment
    saveAs(blob, "CV.docx"); // Use saveAs to download the blob as a file
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
