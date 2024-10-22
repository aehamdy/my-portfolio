/* eslint-disable react/prop-types */
import { TbMoodSadDizzy } from "react-icons/tb";

function NoProjectsFound({ selectedCategory }) {
  return (
    <div className="flex flex-col justify-center items-center gap-2 text-light-gray">
      <span className="text-7xl">
        <TbMoodSadDizzy className="stroke-[1.2]" />
      </span>
      <p className="break-words">
        {`No projects added for `}
        <span className="text-sm text-accent font-medium">
          {selectedCategory.charAt(0).toUpperCase() +
            selectedCategory.slice(1).toLowerCase()}
        </span>
        {` category yet `}
      </p>
    </div>
  );
}

export default NoProjectsFound;
