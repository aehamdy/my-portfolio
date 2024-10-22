/* eslint-disable react/prop-types */
import { TbMoodSadDizzy } from "react-icons/tb";

function NoProjectsFound({ selectedCategory }) {
  return (
    <div className="flex justify-center items-center gap-2">
      <p className="text-light-gray">
        {`No projects added for `}
        <span className="text-sm text-accent font-medium">
          {selectedCategory.charAt(0).toUpperCase() +
            selectedCategory.slice(1).toLowerCase()}
        </span>
        {` category yet `}
      </p>
      <span className="text-xl text-light-gray">
        <TbMoodSadDizzy />
      </span>
    </div>
  );
}

export default NoProjectsFound;
