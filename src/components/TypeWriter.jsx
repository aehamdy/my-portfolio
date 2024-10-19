/* eslint-disable react/prop-types */
import { useTypewriter } from "react-simple-typewriter";

function TypeWriter({ textSize }) {
  const [typeEffect] = useTypewriter({
    words: ["Frontend Developer", "Programmer", "Freelancer"],
    loop: {},
    typeSpeed: 150,
    deleteSpeed: 50,
  });

  return (
    <p className={`font-normal text-${textSize} text-accent`}>{typeEffect}</p>
  );
}

export default TypeWriter;
