import { useTypewriter } from "react-simple-typewriter";

function TypeWriter() {
  const [typeEffect] = useTypewriter({
    words: ["Frontend Developer", "Programmer", "Freelancer"],
    loop: {},
    typeSpeed: 150,
    deleteSpeed: 50,
  });

  return <p className="h-7 font-normal text-xl text-accent">{typeEffect}</p>;
}

export default TypeWriter;
