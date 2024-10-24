/* eslint-disable react/prop-types */
function DetailPanel({ heading, content }) {
  return (
    <li className="flex items-center gap-2">
      <span className="capitalize font-medium text-sm text-dark-gray dark:text-white-90">
        {heading}
      </span>
      <strong className="font-medium text-sm text-dark-gray dark:text-white-90">
        . . . .
      </strong>
      <span className="text-base text-medium-gray dark:text-white-55">
        {`${
          heading === "freelance" && content
            ? "Available"
            : heading === "freelance" && !content
            ? "Currently not available"
            : content
        }`}
      </span>
    </li>
  );
}

export default DetailPanel;
