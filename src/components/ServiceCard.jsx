/* eslint-disable react/prop-types */
import { DiResponsive } from "react-icons/di";
import { IoCodeSlash } from "react-icons/io5";
import { LiaPagerSolid } from "react-icons/lia";
import { MdOutlineDesignServices } from "react-icons/md";

function ServiceCard({ index, service, myServices }) {
  let icon;

  switch (service.type) {
    case "code":
      icon = <IoCodeSlash style={{ strokeWidth: "0.1", fontSize: "40px" }} />;
      break;
    case "page":
      icon = <LiaPagerSolid style={{ strokeWidth: "0.1", fontSize: "45px" }} />;
      break;
    case "responsive":
      icon = <DiResponsive style={{ strokeWidth: "0.9", fontSize: "60px" }} />;
      break;
    case "design":
      icon = (
        <MdOutlineDesignServices
          style={{ strokeWidth: "0", fontSize: "40px" }}
        />
      );
      break;
    default:
      icon = null;
  }

  return (
    <article className="relative w-full md:w-1/2 p-3 text-left">
      <div
        className={`${
          service.type === "design" && "my-3"
        } w-fit text-5xl text-accent`}
      >
        {icon}
      </div>
      <h3 className="my-2 font-semibold text-[17px] text-dark-gray dark:text-white-85">
        {service.heading}
      </h3>
      <p className="md:w-4/5 text-[16px] text-medium-gray dark:text-white-55">
        {service.content}
      </p>
      {index != myServices.length - 1 && (
        <span
          className={`${
            index === 2 ? "md:hidden" : ""
          } absolute bottom-0 start-0 w-full h-[1px] bg-custom-gradient-to-r`}
        ></span>
      )}
    </article>
  );
}

export default ServiceCard;
