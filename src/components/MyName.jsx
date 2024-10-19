/* eslint-disable react/prop-types */
import { personalInfo } from "../data/personalInfo";

function MyName({ textStyle }) {
  return (
    <p className={`w-fit ${textStyle} duration-short`}>
      {`${personalInfo.firstName} ${personalInfo.lastName}`}
    </p>
  );
}

export default MyName;
