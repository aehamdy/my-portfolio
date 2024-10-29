import { Document, ExternalHyperlink, Paragraph, TextRun } from "docx";
import { personalInfo } from "./personalInfo";

export const createWordFileStructure = () => {
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
              grammer: false, //Disable grammer check
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
                    text: "Portfolio: ", // Normal text for LinkedIn
                    font:bodyFont,
                    size: bodyFontSize * 2,
                    color: "000000"
                    // Optionally, you can style this TextRun
                  }),
                  new ExternalHyperlink({
                    children: [
                      new TextRun({
                        text: personalInfo.social.portfolio, // URL text as clickable link
                        style: "Hyperlink", // Applies the hyperlink style in Word
                        font: bodyFont,
                        size: bodyFontSize * 2,
                      }),
                    ],
                    link: personalInfo.social.portfolio, // Set the hyperlink URL here
                  }),
                ],
            }),
            new Paragraph({
                children: [
                  new TextRun({
                    text: "LinkedIn: ", // Normal text for LinkedIn
                    font:bodyFont,
                    size: bodyFontSize * 2,
                    color: "000000"
                    // Optionally, you can style this TextRun
                  }),
                  new ExternalHyperlink({
                    children: [
                      new TextRun({
                        text: personalInfo.social.linkedin, // URL text as clickable link
                        style: "Hyperlink", // Applies the hyperlink style in Word
                        font: bodyFont,
                        size: bodyFontSize * 2,
                      }),
                    ],
                    link: personalInfo.social.linkedin, // Set the hyperlink URL here
                  }),
                ],
            }),
            new Paragraph({
                children: [
                  new TextRun({
                    text: "Github: ", // Normal text for LinkedIn
                    font:bodyFont,
                    size: bodyFontSize * 2,
                    color: "000000"
                    // Optionally, you can style this TextRun
                  }),
                  new ExternalHyperlink({
                    children: [
                      new TextRun({
                        text: personalInfo.social.github, // URL text as clickable link
                        style: "Hyperlink", // Applies the hyperlink style in Word
                        font: bodyFont,
                        size: bodyFontSize * 2,
                      }),
                    ],
                    link: personalInfo.social.github, // Set the hyperlink URL here
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
              .flatMap((project) => [
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
                new Paragraph({
                    children: [
                      new TextRun({
                        text: "Live Link: ", // Normal text for Live Link
                        font: bodyFont,
                        size: bodyFontSize * 2,
                        color: "000000",
                      }),
                      ...(project.liveLink
                        ? [
                            new ExternalHyperlink({
                              children: [
                                new TextRun({
                                  text: project.liveLink, // URL text as clickable link
                                  style: "Hyperlink", // Applies the hyperlink style in Word
                                  font: bodyFont,
                                  size: bodyFontSize * 2,
                                }),
                              ],
                              link: project.liveLink, // Set the hyperlink URL here
                            }),
                          ]
                        : [
                            new TextRun({
                              text: "Not Available", // Normal text if link is not available
                              font: bodyFont,
                              size: bodyFontSize * 2,
                            }),
                          ]),
                    ],
                  }),
                new Paragraph({
                    children: [
                      new TextRun({
                        text: "Github Repo: ", // Normal text for Live Link
                        font: bodyFont,
                        size: bodyFontSize * 2,
                        color: "000000",
                      }),
                      ...(project.githubRepo
                        ? [
                            new ExternalHyperlink({
                              children: [
                                new TextRun({
                                  text: project.githubRepo, // URL text as clickable link
                                  style: "Hyperlink", // Applies the hyperlink style in Word
                                  font: bodyFont,
                                  size: bodyFontSize * 2,
                                }),
                              ],
                              link: project.githubRepo, // Set the hyperlink URL here
                            }),
                          ]
                        : [
                            new TextRun({
                              text: "Not Available", // Normal text if link is not available
                              font: bodyFont,
                              size: bodyFontSize * 2,
                            }),
                          ]),
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

    return doc;
}