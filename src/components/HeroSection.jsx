import myImage from "../assets/my-image.jpg";
import ProfileInfoSection from "./ProfileInfoSection";

function HeroSection() {
  return (
    <section
      style={{ backgroundImage: `url(${myImage})` }}
      className={`relative flex justify-center w-full md:w-4/5 h-[calc(100dvh-109px)] md:h-[100dvh] mx-auto bg-[url(${myImage})] bg-cover bg-no-repeat bg-center`}
    >
      <ProfileInfoSection />
    </section>
  );
}

export default HeroSection;
