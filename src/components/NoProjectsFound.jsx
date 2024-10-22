/* eslint-disable react/prop-types */
function NoProjectsFound({ selectedCategory }) {
  return (
    <p className="text-light-gray">
      {`No projects added for '${
        selectedCategory.charAt().toUpperCase() +
        selectedCategory.slice(1).toLowerCase()
      }' category yet`}
    </p>
  );
}

export default NoProjectsFound;
