import {
  IoMoonOutline,
  IoSunnyOutline,
  IoLogoGithub,
  IoLogoLinkedin,
  IoCloudDownload,
  IoSend,
  IoCodeSlash,
} from "react-icons/io5";
import {
  FaBriefcase,
  FaChessQueen,
  FaChevronRight,
  FaGraduationCap,
  FaPaperPlane,
  FaRegListAlt,
  FaRegUser,
  FaRocket,
} from "react-icons/fa";
import {
  DiCss3,
  DiGit,
  DiGithubBadge,
  DiHtml5,
  DiJsBadge,
  DiReact,
  DiResponsive,
  DiSass,
} from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import { LiaPagerSolid } from "react-icons/lia";
import { MdOutlineDesignServices } from "react-icons/md";
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from "react-icons/bi";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

//MiniProfile Icons
export const sunIcon = <IoSunnyOutline />;
export const moonIcon = <IoMoonOutline />;

//Navbar Icons
export const userIcon = <FaRegUser />;
export const listIcon = <FaRegListAlt />;
export const briefcaseIcon = <FaBriefcase />;
export const planeIcon = <FaPaperPlane />;

//SocialMedia Icons
export const githubIcon = <IoLogoGithub />;
export const linkedinIcon = <IoLogoLinkedin />;

//ProfileCardButtons Icons
export const downloadIcon = <IoCloudDownload />;
export const sendIcon = <IoSend />;

//AboutMeSkills Icons
export const htmlIcon = <DiHtml5 />;
export const cssIcon = <DiCss3 />;
export const sassIcon = <DiSass />;
export const jsIcon = <DiJsBadge />;
export const reactIcon = <DiReact />;
export const tailwindIcon = <SiTailwindcss />;
export const gitIcon = <DiGit />;
export const githubIconTwo = <DiGithubBadge />;

//ServiceCard icons
export const codeIcon = (
  <IoCodeSlash style={{ strokeWidth: "0.1", fontSize: "40px" }} />
);
export const pageIcon = (
  <LiaPagerSolid style={{ strokeWidth: "0.1", fontSize: "45px" }} />
);
export const responsiveIcon = (
  <DiResponsive style={{ strokeWidth: "0.9", fontSize: "60px" }} />
);
export const designIcon = (
  <MdOutlineDesignServices style={{ strokeWidth: "0", fontSize: "40px" }} />
);

//PlanCard Icons
export const chessQueenIcon = <FaChessQueen />;
export const rocketIcon = <FaRocket />;
export const chevronRightIcon = <FaChevronRight />;

//Quotes Icons
export const quoteLeftIcon = <BiSolidQuoteAltLeft />;
export const quoteRighttIcon = <BiSolidQuoteAltRight />;

//Experience Icon
export const experienceIcon = <FaBriefcase />;

//Education Icon
export const educationIcon = <FaGraduationCap />;

// Arrow Icons
export const arrowRight = <SlArrowRight />;
export const arrowLeft = <SlArrowLeft />;