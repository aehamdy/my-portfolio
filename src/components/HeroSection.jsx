import myImage from "../assets/my-image.jpg";
import ProfileInfoSection from "./ProfileInfoSection";

function HeroSection() {
  return (
    <section
      style={{ backgroundImage: `url(${myImage})` }}
      className={`relative lg:absolute flex justify-center w-full md:w-full h-[calc(100dvh-109px)] sm:h-[100dvh] lg:h-[90dvh] lg:my-auto mx-auto bg-[url(${myImage})] bg-cover bg-no-repeat bg-center rounded-b-main-section lg:rounded-main-section overflow-hidden`}
    >
      <ProfileInfoSection />
    </section>
  );
}

export default HeroSection;
