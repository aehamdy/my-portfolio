/* eslint-disable react/prop-types */
import myImage from "../assets/personal-image.webp";
import ProfileInfoSection from "./ProfileInfoSection";

function HeroSection({ onSectionChange }) {
  return (
    <section
      style={{ backgroundImage: `url(${myImage})` }}
      className={`hero-section glitch-wrap relative flex justify-center w-full h-[calc(100dvh-109px)] md:h-[100dvh] lg:h-[90dvh] bg-cover bg-no-repeat bg-center md:bg-top rounded-b-main-section md:rounded-main-section overflow-hidden`}
    >
      <div className="glitch"></div>
      <ProfileInfoSection onSectionChange={onSectionChange} />
    </section>
  );
}

export default HeroSection;
