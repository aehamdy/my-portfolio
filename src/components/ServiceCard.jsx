/* eslint-disable react/prop-types */
function ServiceCard({ service, myServices }) {
  return (
    <article key={i} className="relative w-full md:w-1/2 p-3 text-left">
      <h3 className="my-2 font-semibold text-[17px] text-dark-gray dark:text-white-85">
        {service.heading}
      </h3>
      <p className="md:w-4/5 text-[16px] text-medium-gray dark:text-white-55">
        {service.content}
      </p>
      {i != myServices.length - 1 && (
        <span
          className={`${
            i === 2 ? "md:hidden" : ""
          } absolute bottom-0 start-0 w-full h-[1px] bg-custom-gradient-to-r`}
        ></span>
      )}
    </article>
  );
}

export default ServiceCard;
