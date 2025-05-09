import {
  Document,
  ExternalHyperlink,
  Paragraph,
  TextRun,
  AlignmentType,
} from "docx";
import personalInfo from "./personalInfo";
import cvData from "./cvData";

const createWordFileStructure = () => {
  const name = `${personalInfo.firstName} ${personalInfo.middleName}`;

  const fontFamily = {
    // mainTitle: "Calibri (Headings)",
    mainTitle: "Times New Roman (Headings)",
    // heading: "Calibri (Headings)",
    heading: "Times New Roman (Headings)",
    // body: "Cambria (Body)",
    body: "Arial MT (Body)",
  };
  const fontSize = {
    mainTitle: 56,
    sectionTitle: 44,
    heading: 36,
    body: 22,
    project: 13,
  };
  const fontColor = {
    // mainTitle: "000000",
    // mainTitle: "565555",
    mainTitle: "242124",
    heading: "121212",
    // heading: "565555",
    // heading: "365F91", //blue color
    project: "4F81BD",
    hyperLink: "0563C1",
    border: "7F7F7F",
  };

  const doc = new Document({
    sections: [
      {
        properties: {
          page: {
            spelling: false, //Disable spell check
            grammer: false, //Disable grammer check
            margin: {
              // top: 720, // 720 = 0.5 inch (each unit is 1/20th of a point)
              top: 600,
              bottom: 500,
              // left: 1440, // 1 inch
              left: 720,
              right: 720,
            },
          },
        },
        children: [
          // Full Name Section
          new Paragraph({
            alignment: AlignmentType.CENTER, // Centers text
            children: [
              new TextRun({
                text: name.toUpperCase(),
                font: fontFamily.mainTitle,
                size: fontSize.mainTitle,
                color: fontColor.mainTitle,
                bold: true,
              }),
            ],
          }),
          // new Paragraph({
          //   border: {
          //     bottom: {
          //       style: "single",
          //       size: 6, // Line thickness
          //       space: 0, // Space above and below the line
          //       color: nameColor,
          //     },
          //   },
          // }),
          // new Paragraph({
          //   children: [], // Empty paragraph for spacing
          // }),

          // Location, Phone, and Email in one line
          new Paragraph({
            alignment: AlignmentType.CENTER, // Centers text
            children: [
              new TextRun({
                text: `${personalInfo.location}`, // Location
                font: fontFamily.body,
                size: fontSize.body,
                color: fontColor.body, // Black
              }),
              new TextRun({
                text: ` | `, // Separator
                font: fontFamily.body,
                size: fontSize.body,
                color: fontColor.body,
              }),
              new TextRun({
                text: `${personalInfo.phoneNumber}`, // Phone Number
                // text: `Phone: ${personalInfo.phoneNumber}`, // Phone Number
                font: fontFamily.body,
                size: fontSize.body,
                color: fontColor.body,
              }),
              new TextRun({
                text: ` | `, // Separator
                font: fontFamily.body,
                size: fontSize.body,
                color: fontColor.body,
              }),
              new TextRun({
                text: `${personalInfo.email}`, // Email
                // text: `Email: ${personalInfo.email}`, // Email
                font: fontFamily.body,
                size: fontSize.body,
                color: fontColor.body,
              }),
            ],
          }),
          // new Paragraph({
          //   children: [], // Empty paragraph for spacing
          // }),

          new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [
              new TextRun({
                text: "Portfolio: ",
                bold: true,
              }),
              new TextRun({
                text: personalInfo.links.portfolio,
                style: "Hyperlink",
                color: fontColor.hyperLink,
                underline: true,
              }),
            ],
          }),

          new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [
              new TextRun({
                text: "GitHub: ",
                bold: true,
              }),
              new TextRun({
                text: personalInfo.links.github,
                style: "Hyperlink",
                color: fontColor.hyperLink,
                underline: true,
              }),

              new TextRun(" • "), // Separator

              new TextRun({
                text: "LinkedIn: ",
                bold: true,
              }),
              new TextRun({
                text: personalInfo.links.linkedin,
                style: "Hyperlink",
                color: fontColor.hyperLink,
                underline: true,
              }),
            ],
          }),

          // Social Links (Portfolio, LinkedIn, GitHub)
          // new Paragraph({
          //   children: [
          //     new TextRun({
          //       text: "Portfolio: ", // Normal text for LinkedIn
          //       font: bodyFont,
          //       size: bodyFontSize * 2,
          //       color: "000000",
          //       // Optionally, you can style this TextRun
          //     }),
          //     new ExternalHyperlink({
          //       children: [
          //         new TextRun({
          //           text: personalInfo.links.portfolio, // URL text as clickable link
          //           style: "Hyperlink", // Applies the hyperlink style in Word
          //           font: bodyFont,
          //           size: bodyFontSize * 2,
          //         }),
          //       ],
          //       link: personalInfo.links.portfolio, // Set the hyperlink URL here
          //     }),
          //   ],
          // }),
          // new Paragraph({
          //   children: [
          //     new TextRun({
          //       text: "Github: ", // Normal text for LinkedIn
          //       font: bodyFont,
          //       size: bodyFontSize * 2,
          //       color: "000000",
          //       // Optionally, you can style this TextRun
          //     }),
          //     new ExternalHyperlink({
          //       children: [
          //         new TextRun({
          //           text: personalInfo.links.github, // URL text as clickable link
          //           style: "Hyperlink", // Applies the hyperlink style in Word
          //           font: bodyFont,
          //           size: bodyFontSize * 2,
          //         }),
          //       ],
          //       link: personalInfo.links.github, // Set the hyperlink URL here
          //     }),
          //   ],
          // }),
          // new Paragraph({
          //   children: [
          //     new TextRun({
          //       text: "LinkedIn: ", // Normal text for LinkedIn
          //       font: bodyFont,
          //       size: bodyFontSize * 2,
          //       color: "000000",
          //       // Optionally, you can style this TextRun
          //     }),
          //     new ExternalHyperlink({
          //       children: [
          //         new TextRun({
          //           text: personalInfo.links.linkedin, // URL text as clickable link
          //           style: "Hyperlink", // Applies the hyperlink style in Word
          //           font: bodyFont,
          //           size: bodyFontSize * 2,
          //         }),
          //       ],
          //       link: personalInfo.links.linkedin, // Set the hyperlink URL here
          //     }),
          //   ],
          // }),

          // Horizontal Line (Text-Based)
          // new Paragraph({
          //   alignment: AlignmentType.CENTER,
          //   children: [
          //     new TextRun({
          //       text: "________________________________________________________________________", // Creates a line
          //       bold: true,
          //       size: 24, // Adjust thickness by increasing size
          //     }),
          //   ],
          // }),

          // Horizontal rule using a TextRun with dashes
          new Paragraph({
            children: [
              new TextRun({
                text: "________________________________________________________________________________________________________", // Simulate a horizontal rule
                color: fontColor.border,
                bold: true, // Optional: Make it bold for better visibility
              }),
            ],
            alignment: "center", // Optional: Center the horizontal rule
          }),

          new Paragraph({
            children: [], // Empty paragraph for spacing
          }),

          // Summary Section
          // new Paragraph({
          //   children: [
          //     new TextRun({
          //       text: "Summary",
          //       heading: "Heading1",
          //       font: headingFont,
          //       size: headingFontSize * 2,
          //       color: headingColor,
          //       bold: true,
          //     }),
          //   ],
          //   style: "Heading1", // Added style for collapsibility
          // }),
          new Paragraph({
            children: [
              new TextRun({
                text: "Summary",
                heading: "Heading1",
                font: fontFamily.heading,
                size: fontSize.heading,
                color: fontColor.heading,
                bold: true,
              }),
            ],
            style: "Heading1", // Added style for collapsibility
          }),

          // Normal Text (Cambria, Black, 12pt)
          new Paragraph({
            children: [
              new TextRun({
                text: personalInfo.summary,
                // spacing: {
                //   line: 340, // Set line height to 240 points (1.5 spacing)
                //   before: 200, // Space before the paragraph
                //   after: 250, // Space after the paragraph
                // },
                font: fontFamily.body,
                size: fontSize.body,
                color: fontColor.body,
              }),
            ],
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
                font: fontFamily.heading,
                size: fontSize.heading,
                color: fontColor.heading,
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
                  text: `- ${skillName}: `, // Bold skill name
                  font: fontFamily.body,
                  size: fontSize.body,
                  color: fontColor.body,
                  bold: true, // Make skill name bold
                }),
                new TextRun({
                  text: skillValues, // Normal skill values
                  font: fontFamily.body,
                  size: fontSize.body,
                  color: fontColor.body,
                }),
              ],
            });
          }),

          new Paragraph({
            children: [], // Empty paragraph for spacing
          }),

          // Experience Section
          new Paragraph({
            children: [
              new TextRun({
                text: "Experience",
                heading: "Heading1",
                font: fontFamily.heading,
                size: fontSize.heading,
                color: fontColor.heading,
                bold: true,
              }),
            ],
            style: "Heading1",
          }),
          ...personalInfo.experience.flatMap((exp) => [
            new Paragraph({
              children: [
                new TextRun({
                  text: `${exp.position} – ${exp.company}`,
                  bold: true,
                  font: fontFamily.body,
                  size: fontSize.body,
                  color: fontColor.body,
                }),
              ],
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: `${exp.startDate} – ${exp.endDate}`,
                  italics: true,
                  font: fontFamily.body,
                  size: fontSize.body,
                  color: fontColor.body,
                }),
              ],
            }),
            ...exp.description.map(
              (line) =>
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `• ${line}`,
                      font: fontFamily.body,
                      size: fontSize.body,
                      color: fontColor.body,
                    }),
                  ],
                  bullet: {
                    level: 0,
                  },
                })
            ),
          ]),

          // new Paragraph({
          //   children: [], // Empty paragraph for spacing
          // }),

          // Horizontal rule using a TextRun with dashes
          new Paragraph({
            children: [
              new TextRun({
                text: "________________________________________________________________________________________________________", // Simulate a horizontal rule
                color: fontColor.border,
                bold: true, // Optional: Make it bold for better visibility
              }),
            ],
            alignment: "center", // Optional: Center the horizontal rule
          }),

          // new Paragraph({
          //   children: [], // Empty paragraph for spacing
          // }),

          // Projects Section
          new Paragraph({
            children: [
              new TextRun({
                text: "Projects",
                heading: "Heading1",
                font: fontFamily.heading,
                size: fontSize.heading,
                color: fontColor.heading,
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
                    text: project.cvName,
                    heading: "Heading2", // Set to Heading2 for project collapsibility
                    font: fontFamily.heading,
                    size: fontSize.heading,
                    color: fontColor.heading,
                    bold: true,
                  }),
                ],
                style: "Heading2", // Style for collapsibility
              }),
              new Paragraph({
                children: [
                  new TextRun({
                    text: "Live Link: ", // Normal text for Live Link
                    font: fontFamily.body,
                    size: fontSize.body,
                    color: fontColor.body,
                    bold: true,
                  }),
                  ...(project.liveLink
                    ? [
                        new ExternalHyperlink({
                          children: [
                            new TextRun({
                              text: project.liveLink, // URL text as clickable link
                              style: "Hyperlink", // Applies the hyperlink style in Word
                              font: fontFamily.body,
                              size: fontSize.body * 0.9,
                            }),
                          ],
                          link: project.liveLink, // Set the hyperlink URL here
                        }),
                      ]
                    : [
                        new TextRun({
                          text: "Not Available", // Normal text if link is not available
                          font: fontFamily.body,
                          size: fontSize.body,
                        }),
                      ]),
                ],
              }),
              new Paragraph({
                children: [
                  new TextRun({
                    text: "Github Repo: ", // Normal text for Live Link
                    font: fontFamily.body,
                    size: fontSize.body,
                    color: fontColor.body,
                    bold: true,
                  }),
                  ...(project.githubRepo
                    ? [
                        new ExternalHyperlink({
                          children: [
                            new TextRun({
                              text: project.githubRepo, // URL text as clickable link
                              style: "Hyperlink", // Applies the hyperlink style in Word
                              font: fontFamily.body,
                              size: fontSize.body * 0.9,
                            }),
                          ],
                          link: project.githubRepo, // Set the hyperlink URL here
                        }),
                      ]
                    : [
                        new TextRun({
                          text: "Not Available", // Normal text if link is not available
                          font: fontFamily.body,
                          size: fontSize.body,
                        }),
                      ]),
                ],
              }),
              // new Paragraph({
              //   children: [], // Empty paragraph for spacing
              // }),
              new Paragraph({
                children: [
                  new TextRun({
                    text: project.description,
                    font: fontFamily.body,
                    size: fontSize.body,
                    color: fontColor.body,
                  }),
                ],
              }),

              // new Paragraph({
              //   children: [], // Empty paragraph for spacing
              // }),

              // new Paragraph({
              //   children: [
              //     new TextRun({
              //       text: `Technologies used: ${project.technologies.join(
              //         ", "
              //       )}`,
              //       font: fontFamily.body,
              //       size: fontSize.body,
              //       color: fontColor.body,
              //       bold: true,
              //       italics: true,
              //     }),
              //   ],
              // }),
              new Paragraph({
                children: [
                  new TextRun({
                    text: "Technologies used: ",
                    font: fontFamily.body,
                    size: fontSize.body,
                    color: fontColor.body,
                    bold: true,
                    // italics: true,
                  }),
                  // List of technologies (Regular)
                  new TextRun({
                    text: project.technologies.join(", "),
                    font: fontFamily.body,
                    size: fontSize.body,
                    color: fontColor.body,
                  }),
                ],
              }),

              // new Paragraph({
              //   children: [], // Empty paragraph for spacing
              // }),

              new Paragraph({
                children: [
                  new TextRun({
                    text: "Challenge overcome: ",
                    font: fontFamily.body,
                    size: fontSize.body,
                    color: fontColor.body,
                    bold: true,
                    italics: true,
                  }),
                  // Challenge description (Regular)
                  new TextRun({
                    text: project.challengeOvercome,
                    font: fontFamily.body,
                    size: fontSize.body,
                    color: fontColor.body,
                  }),
                ],
              }),

              // Add a blank paragraph between projects for spacing
              // new Paragraph({
              //   children: [], // Empty paragraph for spacing
              // }),
            ]),

          // Horizontal rule using a TextRun with dashes
          new Paragraph({
            children: [
              new TextRun({
                text: "________________________________________________________________________________________________________", // Simulate a horizontal rule
                color: fontColor.border,
                bold: true, // Optional: Make it bold for better visibility
              }),
            ],
            alignment: "center", // Optional: Center the horizontal rule
          }),

          // Additional spacing
          // new Paragraph({
          //   children: [], // Empty paragraph for spacing
          // }),

          // Education Section
          new Paragraph({
            children: [
              new TextRun({
                text: "Education",
                heading: "Heading1", // Use the same Heading1 for collapsibility
                font: fontFamily.heading,
                size: fontSize.heading,
                color: fontColor.heading,
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
                      font: fontFamily.body,
                      size: fontSize.body,
                      color: fontColor.body,
                    }),
                  ],
                }),
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `${education.degree} - ${education.graduationYear}`,
                      font: fontFamily.body,
                      size: fontSize.body,
                      color: fontColor.body,
                    }),
                  ],
                }),
                // new Paragraph({
                //   children: [], // Empty paragraph for spacing
                // }),
              ];
            })
            .flat(),

          // Horizontal rule using a TextRun with dashes
          new Paragraph({
            children: [
              new TextRun({
                text: "________________________________________________________________________________________________________", // Simulate a horizontal rule
                color: fontColor.border,
                bold: true, // Optional: Make it bold for better visibility
              }),
            ],
            alignment: "center", // Optional: Center the horizontal rule
          }),

          // Additional spacing
          // new Paragraph({
          //   children: [], // Empty paragraph for spacing
          // }),

          // Certification Section
          new Paragraph({
            children: [
              new TextRun({
                text: "Certifications",
                heading: "Heading1",
                font: fontFamily.heading,
                size: fontSize.heading,
                color: fontColor.heading,
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
                  font: fontFamily.body,
                  size: fontSize.body,
                  color: fontColor.body,
                }),
              ],
            });
          }),

          // Horizontal rule using a TextRun with dashes
          new Paragraph({
            children: [
              new TextRun({
                text: "________________________________________________________________________________________________________", // Simulate a horizontal rule
                color: fontColor.border,
                bold: true, // Optional: Make it bold for better visibility
              }),
            ],
            alignment: "center", // Optional: Center the horizontal rule
          }),

          // Additional spacing
          // new Paragraph({
          //   children: [], // Empty paragraph for spacing
          // }),

          // Languages Section
          new Paragraph({
            children: [
              new TextRun({
                text: "Languages",
                heading: "Heading1",
                font: fontFamily.heading,
                size: fontSize.heading,
                color: fontColor.heading,
                bold: true,
              }),
            ],
            style: "Heading1", // Added style for collapsibility
          }),
          ...cvData.languages.map(
            (lang) =>
              new Paragraph({
                children: [
                  new TextRun({
                    text: `- ${lang.name}: `,
                    bold: true,
                    font: fontFamily.body,
                    size: fontSize.body,
                    color: fontColor.body,
                  }),
                  new TextRun({
                    text: lang.description,
                    bold: false,
                    font: fontFamily.body,
                    size: fontSize.body,
                    color: fontColor.body,
                  }),
                ],
              })
          ),

          // Additional Information Section
          // new Paragraph({
          //   children: [
          //     new TextRun({
          //       text: "Additional Information",
          //       heading: "Heading1",
          //       font: fontFamily.heading,
          //       size: fontSize.heading,
          //       color: fontColor.heading,
          //       bold: true,
          //     }),
          //   ],
          //   style: "Heading1", // Added style for collapsibility
          // }),
          // new Paragraph({
          //   children: [
          //     new TextRun({
          //       text: personalInfo.additionalInformation,
          //       font: fontFamily.body,
          //       size: fontSize.body,
          //       color: fontColor.body,
          //     }),
          //   ],
          // }),

          // Horizontal rule using a TextRun with dashes
          // new Paragraph({
          //   children: [
          //     new TextRun({
          //       text: "________________________________________________________________________________________________________", // Simulate a horizontal rule
          //       color: fontColor.border,
          //       bold: true, // Optional: Make it bold for better visibility
          //     }),
          //   ],
          //   alignment: "center", // Optional: Center the horizontal rule
          // }),

          // // Additional spacing
          // new Paragraph({
          //   children: [], // Empty paragraph for spacing
          // }),

          // Key Strengths Section
          // new Paragraph({
          //   children: [
          //     new TextRun({
          //       text: "Key Strengths",
          //       heading: "Heading1",
          //       font: fontFamily.heading,
          //       size: fontSize.heading,
          //       color: fontColor.heading,
          //       bold: true,
          //     }),
          //   ],
          //   style: "Heading1", // Added style for collapsibility
          // }),
          // ...personalInfo.keyStrengths.map((strength) => {
          //   return new Paragraph({
          //     children: [
          //       new TextRun({
          //         text: `- ${strength}`,
          //         font: fontFamily.body,
          //         size: fontSize.body,
          //         color: fontColor.body,
          //       }),
          //     ],
          //   });
          // }),

          // Horizontal rule using a TextRun with dashes
          // new Paragraph({
          //   children: [
          //     new TextRun({
          //       text: "________________________________________________________________________________________________________", // Simulate a horizontal rule
          //       color: fontColor.border,
          //       bold: true, // Optional: Make it bold for better visibility
          //     }),
          //   ],
          //   alignment: "center", // Optional: Center the horizontal rule
          // }),

          // Additional spacing
          // new Paragraph({
          //   children: [], // Empty paragraph for spacing
          // }),

          // References Section
          // new Paragraph({
          //   children: [
          //     new TextRun({
          //       text: "References",
          //       heading: "Heading1",
          //       font: fontFamily.heading,
          //       size: fontSize.heading,
          //       color: fontColor.heading,
          //       bold: true,
          //     }),
          //   ],
          //   style: "Heading1", // Added style for collapsibility
          // }),
          // new Paragraph({
          //   children: [
          //     new TextRun({
          //       text: "Available upon request.",
          //       font: fontFamily.body,
          //       size: fontSize.body,
          //       color: fontColor.body,
          //     }),
          //   ],
          // }),
        ],
      },
    ],
  });

  return doc;
};

export default createWordFileStructure;
