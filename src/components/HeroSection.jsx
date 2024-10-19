import myImage from "../assets/my-image.jpg";
import Info from "./Info";

function HeroSection() {
  return (
    <section
      style={{ backgroundImage: `url(${myImage})` }}
      className={`relative flex justify-center w-full md:w-4/5 h-[100dvh] mx-auto bg-[url(${myImage})] bg-cover bg-no-repeat bg-center`}
    >
      <Info />
    </section>
  );
}

export default HeroSection;
