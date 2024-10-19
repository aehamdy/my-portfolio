import { personalInfo } from "../data/personalInfo";

function MyName() {
  return (
    <p className="absolute top-0 translate-y-[-50%] w-fit text-dark-gray dark:text-white-85 text-4xl font-bold leading-8">
      {`${personalInfo.firstName} ${personalInfo.lastName}`}
    </p>
  );
}

export default MyName;
