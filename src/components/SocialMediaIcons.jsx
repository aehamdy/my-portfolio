import { githubIcon, linkedinIcon } from "../data/icons";
import personalInfo from "../data/personalInfo";

const icons = [
  {
    link: personalInfo.links.github,
    icon: githubIcon,
  },
  {
    link: personalInfo.links.linkedin,
    icon: linkedinIcon,
  },
];

function SocialMediaIcons() {
  return (
    <ul className="flex gap-4">
      {icons.map((item, i) => (
        <li
          key={i}
          className="text-white-90 hover:text-accent hover:scale-110 text-xl duration-short"
        >
          <a href={item.link} target="_blank" rel="noopener noreferrer">
            {item.icon}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default SocialMediaIcons;
