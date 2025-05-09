import personalInfo from "./personalInfo";

const aboutMeList = [
  { residence: personalInfo.residence },
  { location: personalInfo.location },
  { languages: personalInfo.languages.map((language) => language.name) },
];

export default aboutMeList;
