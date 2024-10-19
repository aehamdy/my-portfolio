import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";

const icons = [
  {
    link: "https://github.com/",
    icon: IoLogoGithub,
  },
  {
    link: "https://linkedin.com",
    icon: IoLogoLinkedin,
  },
];

function SocialMediaIcons() {
  return (
    <ul className="flex gap-4">
      {icons.map((item, i) => (
        <li key={i} className="text-white hover:text-accent text-xl">
          <a href={item.link} target="_blank" rel="noopener noreferrer">
            <item.icon />
          </a>
        </li>
      ))}
    </ul>
  );
}

export default SocialMediaIcons;
