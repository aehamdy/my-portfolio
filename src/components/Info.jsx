import MyName from "./MyName";
import TypeWriter from "./TypeWriter";

function Info() {
  return (
    <div className="absolute  flex flex-col items-center gap-7 before:content-[''] w-full left-0 bottom-0 bg-transparent backdrop-blur-md">
      <MyName />
      <div>
        <TypeWriter />
      </div>
      <div>
        <ul className="flex gap-4">
          <li>In</li>
          <li>FB</li>
          <li>GIT</li>
          <li>X</li>
          <li>IG</li>
        </ul>
      </div>
      <div className="relative w-full">
        <span className="absolute top-0 left-0 w-full h-[1px] bg-custom-gradient-to-r"></span>
        <div className="relative flex w-full text-sm font-semibold">
          <a href="#" className="w-1/2 py-4">
            Download CV
          </a>
          <span className="absolute start-1/2 translate-x-[-50%] h-full w-[1px] bg-custom-gradient-to-b"></span>
          <a href="#" className="w-1/2 py-4">
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
}

export default Info;
