import myImage from "../assets/my-image.jpg";
import ProfileInfoSection from "./ProfileInfoSection";

function HeroSection() {
  return (
    <section
      style={{ backgroundImage: `url(${myImage})` }}
      className={`hero-section glitch-wrap relative flex justify-center w-full h-[calc(100dvh-109px)] md:h-[100dvh] lg:h-[90dvh] bg-cover bg-no-repeat bg-center md:bg-top rounded-b-main-section md:rounded-main-section overflow-hidden`}
    >
      <div className="glitch"></div>
      <ProfileInfoSection />
    </section>
  );
}

export default HeroSection;