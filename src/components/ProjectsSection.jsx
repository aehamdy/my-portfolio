/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import ProjectCategories from "./ProjectCategories";
import ProjectList from "./ProjectList";
import SectionTitle from "./SectionTitle";
import SeparatorToRight from "./SeparatorToRight";

function ProjectsSection({ visibleSection = {} }) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  // if (!visibleSection || !visibleSection.projects) {
  //   // console.warn("visibleSection is undefined or does not contain 'projects'");
  //   return null; // Return null to avoid rendering anything when data is not ready
  // }

  // Function to check if the screen is large (>= 1024px)
  const checkScreenSize = () => {
    setIsLargeScreen(window.innerWidth >= 1024);
  };

  useEffect(() => {
    // Run check when component mounts
    checkScreenSize();
    // Add event listener for window resize
    window.addEventListener("resize", checkScreenSize);

    // Cleanup listener on unmount
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Run the logic only if it's a large screen
  if (isLargeScreen && (!visibleSection || !visibleSection.projects)) {
    return null; // Don't render if data isn't ready
  }

  return (
    <>
      <section
        id="projects"
        className="lg:hidden py-main-section-padding bg-section-light dark:bg-section-dark rounded-main-section duration-short"
      >
        <>
          <div className="flex justify-between items-center">
            <SectionTitle title="projects" />
            <div className="hidden sm:block">
              <ProjectCategories
                setSelectedCategory={setSelectedCategory}
                selectedCategory={selectedCategory}
              />
            </div>
          </div>
          <div className="mt-horizontal-separator-mt">
            <SeparatorToRight />
          </div>
          <div className="pt-4 sm:hidden">
            <ProjectCategories
              setSelectedCategory={setSelectedCategory}
              visibleSection={visibleSection}
              selectedCategory={selectedCategory}
            />
          </div>
          <ProjectList selectedCategory={selectedCategory} />
        </>
      </section>

      <div className="hidden lg:block py-main-section-padding bg-section-light dark:bg-section-dark">
        {visibleSection.projects && (
          <>
            <div className="flex justify-between items-center">
              <SectionTitle title="projects" />
              <ProjectCategories setSelectedCategory={setSelectedCategory} />
            </div>
            <div className="mt-horizontal-separator-mt">
              <SeparatorToRight />
            </div>
            <ProjectList selectedCategory={selectedCategory} />
          </>
        )}
      </div>
    </>

    // <div
    //   id="projects"
    //   className="py-main-section-padding bg-section-light dark:bg-section-dark rounded-main-section duration-short"
    // >
    //   {/* {visibleSection.projects && ( */}
    //   <>
    //     <div className="flex justify-between items-center">
    //       <SectionTitle title="projects" />
    //       <div className="hidden sm:block">
    //         <ProjectCategories setSelectedCategory={setSelectedCategory} />
    //       </div>
    //     </div>
    //     <div className="mt-horizontal-separator-mt">
    //       <SeparatorToRight />
    //     </div>
    //     <div className="pt-4 sm:hidden">
    //       <ProjectCategories
    //         setSelectedCategory={setSelectedCategory}
    //         visibleSection={visibleSection}
    //       />
    //     </div>
    //     <ProjectList selectedCategory={selectedCategory} />
    //   </>
    //   {/* )} */}
    // </div>
  );
}

export default ProjectsSection;
