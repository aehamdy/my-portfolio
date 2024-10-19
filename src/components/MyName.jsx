/* eslint-disable react/prop-types */
import { personalInfo } from "../data/personalInfo";

function MyName({ textSize }) {
  return (
    <p
      className={`w-fit text-${textSize} font-bold text-dark-gray dark:text-white-85`}
    >
      {`${personalInfo.firstName} ${personalInfo.lastName}`}
    </p>
  );
}

export default MyName;
