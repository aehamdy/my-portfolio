/* eslint-disable react/prop-types */
import { personalInfo } from "../data/personalInfo";

function MyName({ textStyle }) {
  return (
    <p className={`w-fit ${textStyle} duration-short`}>
      {`${personalInfo.firstName} ${personalInfo.middleName}`}
    </p>
  );
}

export default MyName;
