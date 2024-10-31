import { useState, useEffect } from "react";

const useSectionVisibility = (initialSection = "about") => {
  const [activeSection, setActiveSection] = useState(initialSection);
  const [visibleSection, setVisibleSection] = useState({
    about: true,
    resume: false,
    projects: false,
    contact: false,
  });

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

  return { activeSection, visibleSection, handleSectionChange };
};

export default useSectionVisibility;
