/* eslint-disable react/prop-types */

function SectionTitle({ title }) {
  let formattedTitle = "";

  const formatTitle = () => {
    const splitted = title.split(" ");
    const transformed = splitted.map(
      (word) => word.charAt(0).toUpperCase() + word.slice(1)
    );
    const final = transformed.join(" ");
    formattedTitle = final;
  };

  formatTitle();
  return (
    <div>
      <h3 className="ps-[25px] text-xl text-start font-semibold text-dark-gray dark:text-white-85 duration-short">
        <span className="relative text-accent before:absolute before:w-7 before:h-7 before:top-1 before:-start-3 before:bg-transparent-circle before:rounded-[50%]">
          {formattedTitle.charAt(0)}
        </span>
        {formattedTitle.slice(1)}
      </h3>
    </div>
  );
}

export default SectionTitle;
